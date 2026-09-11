import { describe, it, expect } from 'vitest';
import { scheduleNext, isDue, FlashcardState, getDueCards } from '../../src/lib/srs';

describe('SM-2 Spaced Repetition Engine', () => {
  it('should reset interval to 1 on failing grades (0, 1, 2)', () => {
    const card: FlashcardState = {
      ease: 2.5,
      interval: 10,
      next_due: new Date().toISOString(),
      last_review: null,
    };

    const nextState = scheduleNext(card, 0);
    expect(nextState.interval).toBe(1);
    expect(nextState.ease).toBe(2.5);
  });

  it('should increase interval to 6 on first successful grade (grade 4)', () => {
    const card: FlashcardState = {
      ease: 2.5,
      interval: 1,
      next_due: new Date().toISOString(),
      last_review: null,
    };

    const nextState = scheduleNext(card, 4);
    expect(nextState.interval).toBe(6);
    expect(nextState.ease).toBeGreaterThanOrEqual(2.5);
  });

  it('should multiply interval by ease on subsequent correct review (grade 5)', () => {
    const card: FlashcardState = {
      ease: 2.5,
      interval: 6,
      next_due: new Date().toISOString(),
      last_review: null,
    };

    const nextState = scheduleNext(card, 5);
    expect(nextState.interval).toBe(15); // 6 * 2.5 = 15
    expect(nextState.ease).toBeGreaterThan(2.5);
  });

  it('should floor ease factor at minimum 1.3', () => {
    let card: FlashcardState = {
      ease: 1.35,
      interval: 6,
      next_due: new Date().toISOString(),
      last_review: null,
    };

    // Grade 3 drops ease
    const nextState = scheduleNext(card, 3);
    expect(nextState.ease).toBeGreaterThanOrEqual(1.3);
  });

  it('should correctly identify due and non-due cards', () => {
    const overdueCard: FlashcardState = {
      ease: 2.5,
      interval: 1,
      next_due: new Date(Date.now() - 100000).toISOString(),
      last_review: null,
    };

    const futureCard: FlashcardState = {
      ease: 2.5,
      interval: 10,
      next_due: new Date(Date.now() + 100000000).toISOString(),
      last_review: null,
    };

    expect(isDue(overdueCard)).toBe(true);
    expect(isDue(futureCard)).toBe(false);

    const dueList = getDueCards([overdueCard, futureCard]);
    expect(dueList.length).toBe(1);
    expect(dueList[0]).toBe(overdueCard);
  });
});
