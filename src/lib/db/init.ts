import initSqlJs, { Database, SqlJsStatic } from 'sql.js';
import { openDB, IDBPDatabase } from 'idb';
import { CURRICULUM_DATA } from '@/lib/curriculum';
import { PracticeQWithOptions, Vocab, Flashcard } from '@/types/db';

const IDB_NAME = 'dutch-taxi-pwa-db';
const IDB_STORE = 'sqlite-store';
const IDB_KEY = 'dutch-taxi-db';
const IDB_VERSION = 1;

export interface DbInstance {
  query<T = any>(sql: string, params?: any[] | Record<string, any>): T[];
  run(sql: string, params?: any[] | Record<string, any>): void;
  save(): Promise<void>;
  export(): Uint8Array;
  getRawDb(): Database;
}

let dbInstance: DbInstance | null = null;
let initPromise: Promise<DbInstance> | null = null;

async function getIdb(): Promise<IDBPDatabase | null> {
  if (typeof window === 'undefined') return null;
  try {
    return await openDB(IDB_NAME, IDB_VERSION, {
      upgrade(db) {
        if (!db.objectStoreNames.contains(IDB_STORE)) {
          db.createObjectStore(IDB_STORE);
        }
      },
    });
  } catch (e) {
    console.warn('IndexedDB not accessible, falling back to memory:', e);
    return null;
  }
}

function seedTables(db: Database) {
  // Schema creation
  db.run(`
    CREATE TABLE IF NOT EXISTS vocab (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      dutch_term TEXT NOT NULL,
      root_decomposition TEXT,
      literal_english TEXT,
      legal_meaning TEXT,
      exam_frequency TEXT
    );
    CREATE TABLE IF NOT EXISTS grammar (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      marker_type TEXT NOT NULL,
      dutch_word TEXT NOT NULL,
      impact TEXT
    );
    CREATE TABLE IF NOT EXISTS practice_q (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      dutch_stem TEXT NOT NULL,
      english_breakdown TEXT,
      correct_option INTEGER,
      explanation TEXT,
      role_annotations TEXT,
      domain TEXT
    );
    CREATE TABLE IF NOT EXISTS practice_option (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      q_id INTEGER NOT NULL,
      option_text TEXT NOT NULL,
      is_correct BOOLEAN NOT NULL DEFAULT 0,
      trap_annotation TEXT
    );
    CREATE TABLE IF NOT EXISTS flashcard (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      front_text TEXT NOT NULL,
      back_text TEXT NOT NULL,
      audio_path TEXT,
      vocab_refs TEXT,
      last_review TEXT,
      ease REAL DEFAULT 2.5,
      interval INTEGER DEFAULT 1,
      next_due TEXT
    );
  `);

  // Check if questions already exist
  const stmt = db.prepare('SELECT COUNT(*) as count FROM practice_q');
  let hasData = false;
  if (stmt.step()) {
    const row: any = stmt.getAsObject();
    if (row.count > 0) hasData = true;
  }
  stmt.free();

  if (!hasData) {
    // Seed questions & options
    CURRICULUM_DATA.questions.forEach((q) => {
      db.run(
        `INSERT INTO practice_q (id, dutch_stem, english_breakdown, correct_option, explanation, role_annotations, domain)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,
        [q.id, q.dutch_stem, q.english_breakdown, q.correct_option, q.explanation, q.role_annotations, q.domain]
      );

      q.options.forEach((opt) => {
        db.run(
          `INSERT INTO practice_option (id, q_id, option_text, is_correct, trap_annotation)
           VALUES (?, ?, ?, ?, ?)`,
          [opt.id, opt.q_id, opt.option_text, opt.is_correct ? 1 : 0, opt.trap_annotation]
        );
      });
    });

    // Seed vocab
    CURRICULUM_DATA.vocab.forEach((v) => {
      db.run(
        `INSERT INTO vocab (id, dutch_term, root_decomposition, literal_english, legal_meaning, exam_frequency)
         VALUES (?, ?, ?, ?, ?, ?)`,
        [v.id, v.dutch_term, v.root_decomposition, v.literal_english, v.legal_meaning, v.exam_frequency]
      );
    });

    // Seed flashcards
    CURRICULUM_DATA.flashcards.forEach((fc) => {
      db.run(
        `INSERT INTO flashcard (id, front_text, back_text, audio_path, vocab_refs, last_review, ease, interval, next_due)
         VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
        [fc.id, fc.front_text, fc.back_text, fc.audio_path, fc.vocab_refs, fc.last_review, fc.ease, fc.interval, fc.next_due]
      );
    });
  } else {
    // Check if cached DB has outdated flashcards or vocab counts and auto-sync
    try {
      const fcStmt = db.prepare('SELECT COUNT(*) as count FROM flashcard');
      let fcCount = 0;
      if (fcStmt.step()) {
        fcCount = (fcStmt.getAsObject() as any).count || 0;
      }
      fcStmt.free();

      if (fcCount < CURRICULUM_DATA.flashcards.length) {
        db.run('DELETE FROM flashcard');
        CURRICULUM_DATA.flashcards.forEach((fc) => {
          db.run(
            `INSERT INTO flashcard (id, front_text, back_text, audio_path, vocab_refs, last_review, ease, interval, next_due)
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [fc.id, fc.front_text, fc.back_text, fc.audio_path, fc.vocab_refs, fc.last_review, fc.ease, fc.interval, fc.next_due]
          );
        });
      }

      const vStmt = db.prepare('SELECT COUNT(*) as count FROM vocab');
      let vCount = 0;
      if (vStmt.step()) {
        vCount = (vStmt.getAsObject() as any).count || 0;
      }
      vStmt.free();

      if (vCount < CURRICULUM_DATA.vocab.length) {
        db.run('DELETE FROM vocab');
        CURRICULUM_DATA.vocab.forEach((v) => {
          db.run(
            `INSERT INTO vocab (id, dutch_term, root_decomposition, literal_english, legal_meaning, exam_frequency)
             VALUES (?, ?, ?, ?, ?, ?)`,
            [v.id, v.dutch_term, v.root_decomposition, v.literal_english, v.legal_meaning, v.exam_frequency]
          );
        });
      }
    } catch (e) {
      console.warn('Auto-sync table update error:', e);
    }
  }
}

export async function getDb(): Promise<DbInstance> {
  if (typeof window === 'undefined') {
    throw new Error('sql.js client database cannot run on server-side');
  }

  if (dbInstance) {
    return dbInstance;
  }

  if (initPromise) {
    return initPromise;
  }

  initPromise = (async () => {
    // 1. Initialize SQL.js WASM
    const SQL: SqlJsStatic = await initSqlJs({
      locateFile: (file) => `https://sql.js.org/dist/${file}`,
    });

    // 2. Check IndexedDB for persisted database
    let dbBuffer: Uint8Array | null = null;
    try {
      const idb = await getIdb();
      if (idb) {
        const cached = await idb.get(IDB_STORE, IDB_KEY);
        if (cached instanceof Uint8Array && cached.length > 0) {
          dbBuffer = cached;
        }
      }
    } catch (err) {
      console.warn('Failed to load DB from IndexedDB:', err);
    }

    // 3. If not in IndexedDB, fetch public/data.db
    if (!dbBuffer) {
      try {
        const response = await fetch('/data.db');
        if (response.ok) {
          const arrayBuffer = await response.arrayBuffer();
          if (arrayBuffer.byteLength > 0) {
            dbBuffer = new Uint8Array(arrayBuffer);
            const idb = await getIdb();
            if (idb) await idb.put(IDB_STORE, dbBuffer, IDB_KEY);
          }
        }
      } catch (err) {
        console.warn('Could not fetch /data.db from network:', err);
      }
    }

    // 4. Instantiate SQLite Database
    let db: Database;
    if (dbBuffer && dbBuffer.length > 0) {
      try {
        db = new SQL.Database(dbBuffer);
      } catch (e) {
        db = new SQL.Database();
      }
    } else {
      db = new SQL.Database();
    }

    // Seed or ensure tables exist
    try {
      seedTables(db);
    } catch (err) {
      console.warn('Seeding tables check:', err);
    }

    const instance: DbInstance = {
      query<T = any>(sql: string, params?: any[] | Record<string, any>): T[] {
        try {
          const stmt = db.prepare(sql);
          if (params) {
            stmt.bind(params as any);
          }
          const results: T[] = [];
          while (stmt.step()) {
            results.push(stmt.getAsObject() as unknown as T);
          }
          stmt.free();
          return results;
        } catch (e) {
          console.error('SQL query error:', e);
          return [];
        }
      },

      run(sql: string, params?: any[] | Record<string, any>): void {
        try {
          db.run(sql, params as any);
        } catch (e) {
          console.error('SQL run error:', e);
        }
      },

      async save(): Promise<void> {
        try {
          const data = db.export();
          const idb = await getIdb();
          if (idb) await idb.put(IDB_STORE, data, IDB_KEY);
        } catch (err) {
          console.error('Failed to save DB to IndexedDB:', err);
        }
      },

      export(): Uint8Array {
        return db.export();
      },

      getRawDb(): Database {
        return db;
      },
    };

    dbInstance = instance;
    return instance;
  })();

  return initPromise;
}

export async function fetchQuestionsSafe(): Promise<PracticeQWithOptions[]> {
  try {
    const db = await getDb();
    const rawQuestions = db.query('SELECT * FROM practice_q ORDER BY id ASC');
    if (rawQuestions && rawQuestions.length > 0) {
      return rawQuestions.map((q: any) => {
        const options = db.query('SELECT * FROM practice_option WHERE q_id = ? ORDER BY id ASC', [q.id]);
        return {
          ...q,
          options,
        };
      });
    }
  } catch (err) {
    console.warn('DB query failed, using static curriculum fallback:', err);
  }
  return CURRICULUM_DATA.questions;
}

export async function fetchVocabSafe(): Promise<Vocab[]> {
  try {
    const db = await getDb();
    const items = db.query('SELECT * FROM vocab ORDER BY dutch_term ASC');
    if (items && items.length > 0) return items;
  } catch (err) {
    console.warn('Vocab query fallback:', err);
  }
  return CURRICULUM_DATA.vocab as Vocab[];
}

export async function fetchFlashcardsSafe(): Promise<Flashcard[]> {
  try {
    const db = await getDb();
    const cards = db.query('SELECT * FROM flashcard ORDER BY id ASC');
    if (cards && cards.length > 0) return cards;
  } catch (err) {
    console.warn('Flashcard query fallback:', err);
  }
  return CURRICULUM_DATA.flashcards;
}
