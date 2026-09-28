/**
 * Streak math for the Streaks app. Pure functions only: no React, no Date.now(),
 * no AsyncStorage. Everything here must be unit-testable with `npm test`.
 *
 * A "day key" is a local-calendar date formatted as YYYY-MM-DD, e.g. "2026-09-27".
 * Check-ins are stored as an array of day keys (unordered, may contain duplicates).
 */

export type DayKey = string; // "YYYY-MM-DD"

/**
 * Return the day key for a Date **in the device's local time zone**.
 *
 * TODO(candidate): implement. Hint: `toISOString()` is UTC and is the wrong tool here.
 */
export function toDayKey(date: Date): DayKey {
  throw new Error('not implemented');
}

/**
 * Return the day key that is `days` days before `key` (days may be negative).
 * Must survive month/year boundaries and DST changes.
 *
 * TODO(candidate): implement.
 */
export function shiftDay(key: DayKey, days: number): DayKey {
  throw new Error('not implemented');
}

/**
 * Current streak length.
 *
 * Rules:
 *  - Count consecutive days with a check-in, walking backwards from `today`.
 *  - If `today` has no check-in yet, the streak is still alive as long as
 *    `yesterday` has one, so start counting from yesterday instead.
 *  - Duplicate check-ins for the same day count once.
 *  - Future-dated check-ins (after `today`) are ignored.
 *  - No qualifying check-ins → 0.
 *
 * Examples (today = 2026-09-27):
 *   ["2026-09-27","2026-09-26","2026-09-25"]        → 3
 *   ["2026-09-26","2026-09-25"]                     → 2   (today not done yet, still alive)
 *   ["2026-09-25","2026-09-24"]                     → 0   (missed yesterday, streak broke)
 *   ["2026-09-27","2026-09-27","2026-09-26"]        → 2   (duplicate ignored)
 *
 * TODO(candidate): implement.
 */
export function computeStreak(checkins: DayKey[], today: DayKey): number {
  throw new Error('not implemented');
}

/**
 * Longest streak ever recorded (not just the current one).
 *
 * TODO(candidate): implement.
 */
export function longestStreak(checkins: DayKey[]): number {
  throw new Error('not implemented');
}
