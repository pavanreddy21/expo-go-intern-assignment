// Runs with Node's built-in test runner via tsx: `npm test`
// Add your own cases. We will read these as carefully as the implementation.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { computeStreak, longestStreak, shiftDay, toDayKey } from './streak';

const T = '2026-09-27';

test('computeStreak: three consecutive days ending today', () => {
  assert.equal(computeStreak(['2026-09-27', '2026-09-26', '2026-09-25'], T), 3);
});

test('computeStreak: today not checked in yet keeps the streak alive', () => {
  assert.equal(computeStreak(['2026-09-26', '2026-09-25'], T), 2);
});

test('computeStreak: a missed yesterday breaks the streak', () => {
  assert.equal(computeStreak(['2026-09-25', '2026-09-24'], T), 0);
});

test('computeStreak: duplicates count once', () => {
  assert.equal(computeStreak(['2026-09-27', '2026-09-27', '2026-09-26'], T), 2);
});

test('computeStreak: empty input is 0', () => {
  assert.equal(computeStreak([], T), 0);
});

test('shiftDay crosses a month boundary', () => {
  assert.equal(shiftDay('2026-10-01', -1), '2026-09-30');
});

test('toDayKey uses local time, not UTC', () => {
  // 23:30 local on the 27th must still be the 27th, whatever the device TZ is.
  const d = new Date(2026, 8, 27, 23, 30, 0);
  assert.equal(toDayKey(d), '2026-09-27');
});

// TODO(candidate): add cases for longestStreak, future-dated check-ins,
// year boundaries, and at least one DST transition day.
test.todo('longestStreak: candidate to add cases');
