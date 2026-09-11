-- Vocabulary (core lexicon from NotebookLM domains)
CREATE TABLE IF NOT EXISTS vocab (
    id                 INTEGER PRIMARY KEY AUTOINCREMENT,
    dutch_term         TEXT NOT NULL,
    root_decomposition TEXT,        -- e.g. "Arbeids|tijden|besluit"
    literal_english    TEXT,
    legal_meaning      TEXT,
    exam_frequency     TEXT          -- 'high' | 'medium' | 'low'
);

-- Grammar markers (WH-words, modals, negation, conditionals)
CREATE TABLE IF NOT EXISTS grammar (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    marker_type TEXT NOT NULL,      -- 'WH' | 'Modal' | 'Negation' | 'Condition'
    dutch_word  TEXT NOT NULL,
    impact      TEXT
);

-- Practice questions
CREATE TABLE IF NOT EXISTS practice_q (
    id                INTEGER PRIMARY KEY AUTOINCREMENT,
    dutch_stem        TEXT NOT NULL,
    english_breakdown TEXT,
    correct_option    INTEGER,
    explanation       TEXT,
    role_annotations  TEXT,         -- JSON: [{"text":"De taxibestuurder","role":"Actor"}, ...]
    domain            TEXT          -- 'gordelplicht' | 'bcdt' | 'atbv' | 'paman' | 'transport' | 'gedrag' | 'casus'
);

CREATE TABLE IF NOT EXISTS practice_option (
    id              INTEGER PRIMARY KEY AUTOINCREMENT,
    q_id            INTEGER NOT NULL REFERENCES practice_q(id),
    option_text     TEXT NOT NULL,
    is_correct      BOOLEAN NOT NULL DEFAULT 0,
    trap_annotation TEXT
);

-- Flashcards (SRS)
CREATE TABLE IF NOT EXISTS flashcard (
    id           INTEGER PRIMARY KEY AUTOINCREMENT,
    front_text   TEXT NOT NULL,
    back_text    TEXT NOT NULL,
    audio_path   TEXT,              -- relative: '/audio/<slug>.mp3' (Phase 2)
    vocab_refs   TEXT,              -- JSON array of vocab.id
    last_review  TEXT,              -- ISO-8601
    ease         REAL    DEFAULT 2.5,
    interval     INTEGER DEFAULT 1,
    next_due     TEXT               -- ISO-8601
);

-- Scenario role-play (Phase 2 — stub only)
CREATE TABLE IF NOT EXISTS scenario (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    title       TEXT NOT NULL,
    description TEXT,
    difficulty  TEXT CHECK(difficulty IN ('easy','medium','hard')),
    steps       TEXT NOT NULL       -- JSON: [{"speaker":"client","dutch":"...","vocab_ids":[]}]
);

-- Theme grouping
CREATE TABLE IF NOT EXISTS theme (
    id          INTEGER PRIMARY KEY AUTOINCREMENT,
    name        TEXT NOT NULL,
    description TEXT
);

CREATE TABLE IF NOT EXISTS theme_scenario (
    theme_id    INTEGER NOT NULL REFERENCES theme(id),
    scenario_id INTEGER NOT NULL REFERENCES scenario(id),
    PRIMARY KEY (theme_id, scenario_id)
);

-- Video chunk stub (Phase 2 — Whisper integration)
CREATE TABLE IF NOT EXISTS video_chunk (
    id         INTEGER PRIMARY KEY AUTOINCREMENT,
    video_file TEXT NOT NULL,
    start_ms   INTEGER NOT NULL,
    end_ms     INTEGER NOT NULL,
    transcript TEXT NOT NULL,
    vocab_ids  TEXT,                -- JSON array
    created_at TEXT NOT NULL
);
