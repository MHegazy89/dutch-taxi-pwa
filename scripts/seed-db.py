#!/usr/bin/env python3
"""
Convenience seed runner for building public/data.db
Usage: python scripts/seed-db.py
"""
import sys
from pathlib import Path

# Add project root to sys.path
BASE_DIR = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(BASE_DIR))

from scripts.etl.load import load_database

if __name__ == "__main__":
    print("=== CBR Taxi Theory Exam Database Seeder ===")
    load_database()
