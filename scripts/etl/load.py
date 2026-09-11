"""
Load module: Creates public/data.db and inserts transformed rows into SQLite.
"""
import sqlite3
import os
import argparse
from pathlib import Path
from scripts.etl.extract import extract_from_notebook
from scripts.etl.transform import transform_data

BASE_DIR = Path(__file__).resolve().parent.parent.parent
MIGRATIONS_FILE = BASE_DIR / "src" / "lib" / "db" / "migrations" / "000_init.sql"
DEFAULT_OUTPUT_DB = BASE_DIR / "public" / "data.db"

def load_database(output_db_path: Path = DEFAULT_OUTPUT_DB, dry_run: bool = False):
    """
    Creates the SQLite database, applies migrations, and loads transformed data.
    """
    print(f"[*] Starting ETL Load process -> {output_db_path}")

    # 1. Extract
    raw_data = extract_from_notebook()

    # 2. Transform
    data = transform_data(raw_data)

    if dry_run:
        print("[*] Dry run mode enabled:")
        print(f"    - Vocab entries: {len(data['vocab'])}")
        print(f"    - Grammar markers: {len(data['grammar'])}")
        print(f"    - Practice questions: {len(data['practice_q'])}")
        print(f"    - Practice options: {len(data['practice_option'])}")
        print(f"    - Flashcards: {len(data['flashcard'])}")
        return

    # Ensure output directory exists
    output_db_path.parent.mkdir(parents=True, exist_ok=True)

    # Remove existing DB file to ensure clean build
    if output_db_path.exists():
        os.remove(output_db_path)

    conn = sqlite3.connect(output_db_path)
    cursor = conn.cursor()

    # Read and apply schema
    with open(MIGRATIONS_FILE, "r", encoding="utf-8") as f:
        schema_sql = f.read()
    cursor.executescript(schema_sql)

    # Insert Vocab
    for v in data["vocab"]:
        cursor.execute("""
            INSERT INTO vocab (dutch_term, root_decomposition, literal_english, legal_meaning, exam_frequency)
            VALUES (?, ?, ?, ?, ?)
        """, (v["dutch_term"], v["root_decomposition"], v["literal_english"], v["legal_meaning"], v["exam_frequency"]))

    # Insert Grammar
    for g in data["grammar"]:
        cursor.execute("""
            INSERT INTO grammar (marker_type, dutch_word, impact)
            VALUES (?, ?, ?)
        """, (g["marker_type"], g["dutch_word"], g["impact"]))

    # Insert Practice Questions
    for q in data["practice_q"]:
        cursor.execute("""
            INSERT INTO practice_q (id, dutch_stem, english_breakdown, correct_option, explanation, role_annotations, domain)
            VALUES (?, ?, ?, ?, ?, ?, ?)
        """, (q["id"], q["dutch_stem"], q["english_breakdown"], q["correct_option"], q["explanation"], q["role_annotations"], q["domain"]))

    # Insert Practice Options
    for opt in data["practice_option"]:
        cursor.execute("""
            INSERT INTO practice_option (q_id, option_text, is_correct, trap_annotation)
            VALUES (?, ?, ?, ?)
        """, (opt["q_id"], opt["option_text"], opt["is_correct"], opt["trap_annotation"]))

    # Insert Flashcards
    for fc in data["flashcard"]:
        cursor.execute("""
            INSERT INTO flashcard (front_text, back_text, audio_path, vocab_refs, last_review, ease, interval, next_due)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        """, (fc["front_text"], fc["back_text"], fc["audio_path"], fc["vocab_refs"], fc["last_review"], fc["ease"], fc["interval"], fc["next_due"]))

    conn.commit()
    conn.close()

    print(f"[✓] Successfully built {output_db_path}")
    print(f"    - {len(data['vocab'])} vocabulary words")
    print(f"    - {len(data['grammar'])} grammar markers")
    print(f"    - {len(data['practice_q'])} practice questions")
    print(f"    - {len(data['practice_option'])} practice options")
    print(f"    - {len(data['flashcard'])} flashcards")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Load curriculum data into public/data.db SQLite")
    parser.add_argument("--output", type=Path, default=DEFAULT_OUTPUT_DB, help="Path to output data.db")
    parser.add_argument("--dry-run", action="store_true", help="Print summary without writing database")
    args = parser.parse_args()

    load_database(output_db_path=args.output, dry_run=args.dry_run)
