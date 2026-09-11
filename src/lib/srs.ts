export interface FlashcardState {
  ease: number; // default 2.5
  interval: number; // days, default 1
  next_due: string | null; // ISO-8601
  last_review: string | null; // ISO-8601
}

export type SRSGrade = 0 | 1 | 2 | 3 | 4 | 5;

/**
 * SuperMemo 2 (SM-2) Spaced Repetition Algorithm
 * @param card Current flashcard state
 * @param grade Review rating (0=blackout, 1=wrong, 2=hard, 3=good, 4=easy, 5=perfect)
 * @returns Updated FlashcardState with new interval, ease, and next_due
 */
export function scheduleNext(card: FlashcardState, grade: SRSGrade): FlashcardState {
  const now = new Date();
  const todayISO = now.toISOString();

  let ease = card.ease ?? 2.5;
  let interval = card.interval ?? 1;

  if (grade < 3) {
    // If forgotten or fail: reset interval to 1 day
    interval = 1;
  } else {
    // Correct response: calculate new interval and ease factor
    if (interval === 1) {
      interval = 6;
    } else {
      interval = Math.round(interval * ease);
    }

    // EF' = EF + (0.1 - (5 - grade) * (0.08 + (5 - grade) * 0.02))
    const diff = 5 - grade;
    ease = ease + (0.1 - diff * (0.08 + diff * 0.02));
    if (ease < 1.3) {
      ease = 1.3;
    }
  }

  const nextDueDate = new Date(now.getTime() + interval * 24 * 60 * 60 * 1000);

  return {
    ease: Number(ease.toFixed(3)),
    interval,
    last_review: todayISO,
    next_due: nextDueDate.toISOString(),
  };
}

/**
 * Check if a card is due for review today or overdue
 */
export function isDue(card: FlashcardState): boolean {
  if (!card.next_due) return true;
  const dueDate = new Date(card.next_due);
  const now = new Date();
  return dueDate <= now;
}

/**
 * Filter flashcards to those due for review
 */
export function getDueCards<T extends FlashcardState>(cards: T[]): T[] {
  return cards.filter(isDue);
}
