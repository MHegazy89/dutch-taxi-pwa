import initSqlJs, { Database, SqlJsStatic } from 'sql.js';
import { openDB, IDBPDatabase } from 'idb';

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

async function getIdb(): Promise<IDBPDatabase> {
  return openDB(IDB_NAME, IDB_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(IDB_STORE)) {
        db.createObjectStore(IDB_STORE);
      }
    },
  });
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
      const cached = await idb.get(IDB_STORE, IDB_KEY);
      if (cached instanceof Uint8Array && cached.length > 0) {
        dbBuffer = cached;
      }
    } catch (err) {
      console.warn('Failed to load DB from IndexedDB, falling back to network fetch:', err);
    }

    // 3. If not in IndexedDB, fetch public/data.db
    if (!dbBuffer) {
      try {
        const response = await fetch('/data.db');
        if (response.ok) {
          const arrayBuffer = await response.arrayBuffer();
          if (arrayBuffer.byteLength > 0) {
            dbBuffer = new Uint8Array(arrayBuffer);
            // Cache immediately to IndexedDB
            const idb = await getIdb();
            await idb.put(IDB_STORE, dbBuffer, IDB_KEY);
          }
        }
      } catch (err) {
        console.warn('Could not fetch /data.db from network:', err);
      }
    }

    // 4. Instantiate SQLite Database
    let db: Database;
    if (dbBuffer && dbBuffer.length > 0) {
      db = new SQL.Database(dbBuffer);
    } else {
      db = new SQL.Database();
    }

    const instance: DbInstance = {
      query<T = any>(sql: string, params?: any[] | Record<string, any>): T[] {
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
      },

      run(sql: string, params?: any[] | Record<string, any>): void {
        db.run(sql, params as any);
      },

      async save(): Promise<void> {
        try {
          const data = db.export();
          const idb = await getIdb();
          await idb.put(IDB_STORE, data, IDB_KEY);
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

export async function resetDatabase(): Promise<void> {
  if (typeof window === 'undefined') return;
  const idb = await getIdb();
  await idb.delete(IDB_STORE, IDB_KEY);
  dbInstance = null;
  initPromise = null;
}
