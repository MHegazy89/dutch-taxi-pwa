"""
Transform module: Validates and shapes raw extracted items into DB schema rows.
"""
import json
from typing import Dict, Any, List

def transform_data(raw_data: Dict[str, Any]) -> Dict[str, Any]:
    """
    Transforms raw curriculum dictionaries into validated rows ready for SQLite insertion.
    """
    transformed = {
        "vocab": [],
        "grammar": [],
        "practice_q": [],
        "practice_option": [],
        "flashcard": []
    }

    # 1. Transform Vocab
    for v in raw_data.get("vocab", []):
        transformed["vocab"].append({
            "dutch_term": v["dutch_term"],
            "root_decomposition": v.get("root_decomposition"),
            "literal_english": v.get("literal_english"),
            "legal_meaning": v.get("legal_meaning"),
            "exam_frequency": v.get("exam_frequency", "medium")
        })

    # 2. Transform Grammar
    for g in raw_data.get("grammar", []):
        transformed["grammar"].append({
            "marker_type": g["marker_type"],
            "dutch_word": g["dutch_word"],
            "impact": g.get("impact")
        })

    # 3. Transform Practice Questions & Options
    q_id_counter = 1
    for q in raw_data.get("questions", []):
        role_annotations_json = json.dumps(q.get("role_annotations", []))
        correct_idx = q.get("correct_option_index", 0)

        transformed["practice_q"].append({
            "id": q_id_counter,
            "dutch_stem": q["dutch_stem"],
            "english_breakdown": q.get("english_breakdown"),
            "correct_option": correct_idx,
            "explanation": q.get("explanation"),
            "role_annotations": role_annotations_json,
            "domain": q.get("domain", "transport")
        })

        options = q.get("options", [])
        traps = q.get("trap_annotations", [])

        for opt_idx, opt_text in enumerate(options):
            trap = traps[opt_idx] if opt_idx < len(traps) else None
            is_corr = 1 if opt_idx == correct_idx else 0
            transformed["practice_option"].append({
                "q_id": q_id_counter,
                "option_text": opt_text,
                "is_correct": is_corr,
                "trap_annotation": trap
            })

        q_id_counter += 1

    # 4. Transform Flashcards
    for f in raw_data.get("flashcards", []):
        vocab_refs_json = json.dumps(f.get("vocab_refs", []))
        transformed["flashcard"].append({
            "front_text": f["front_text"],
            "back_text": f["back_text"],
            "audio_path": f.get("audio_path"),
            "vocab_refs": vocab_refs_json,
            "last_review": None,
            "ease": 2.5,
            "interval": 1,
            "next_due": None
        })

    return transformed
