# The assignment

Three parts. Do them in order; Part 1 matters most.

---

## Part 1 — Build **Streaks** (≈ 3 hours, 50%)

A habit tracker with one job: tap a habit once a day, watch the streak grow.

### Must have

1. **Habit list** — each row shows the emoji, name, a "done today" control, and the current streak
   (`🔥 12`). Habits are sorted so that ones not yet done today come first.
2. **Add a habit** — name (required, trimmed, max 40 chars) plus an emoji picked from a small fixed set
   you provide. No empty names, no duplicates (case-insensitive).
3. **Check in / undo** — tapping the control toggles today's check-in. Give the user haptic feedback
   on check-in (`expo-haptics`, already installed).
4. **Delete a habit** — via long-press or swipe, with a confirmation. Deleting is permanent.
5. **Streak logic lives in `lib/streak.ts`** and is covered by `npm test`. Implement the four stubbed
   functions according to their doc comments. The rules that trip people up:
   - "today" is the **device's local calendar day**, not UTC;
   - a streak is still alive if yesterday is done and today isn't yet;
   - duplicates and future dates must not inflate the count.
   Extend `lib/streak.test.ts` with your own cases (see the `TODO`s in the file).
6. **Persistence** — state survives killing the app. Use AsyncStorage (already installed) through
   `lib/storage.ts`. Corrupt or missing data must fall back gracefully, never crash.
7. **States** — a loading state while reading storage, an empty state when there are no habits.
8. **Runs in Expo Go on iOS** with no red screens, and `npm run typecheck` passes.

### Nice to have (pick at most one; do it only if the must-haves are solid)

- Last-7-days dots under each habit (`● ● ○ ● ● ● ●`).
- Dark mode that follows the system setting.
- A "longest streak" stat per habit, using `longestStreak()`.
- Reorder habits by drag.

### Not evaluated

Pixel-perfect design, animations, app icon / splash, Android, web. Plain `StyleSheet` is fine.
If you use a UI kit that's fine too; if you spend two hours on gradients, that's not.

### Freedom

You can restructure `App.tsx`, add folders, add Expo Router or React Navigation, use hooks or a state
library — your call. We'll ask you *why* on the call, so pick things you can defend.

---

## Part 2 — Bug hunt (≈ 1 hour, 25%)

Open `bughunt/FocusCard.tsx` and the **Bug hunt** tab in the app. It's a focus timer that logs
sessions. It compiles and *almost* works. We planted **seven** bugs across three flavours:

- crashes (something is `null` when it shouldn't be),
- silently wrong (the number on screen is not the number that should be there),
- lifecycle / performance (things keep running when they shouldn't).

Find as many as you can, fix them **in place** (don't rewrite the file; we diff it), and for each one
write three lines in `NOTES.md`: *what was wrong · how you noticed · how you fixed it*.

Tips: run it on the phone and actually use it. Change the timer to 1 minute. Kill and relaunch the app.
Read every `useEffect` twice. Think about what time it is in London.

---

## Part 3 — Short answers (≈ 30 min, 15%)

Answer in `NOTES.md`. Aim for 3–6 sentences each; a diagram or code snippet is welcome. Open book,
but answer in your own words — we can tell.

1. **Expo Go vs. development build.** What can Expo Go run, and what can't it? Name one real library
   that would force this project off Expo Go, and describe what you'd have to do to keep using it.
2. **"Could not connect to the server."** The app works in the iOS Simulator, but scanning the QR
   code on a physical iPhone fails with that message. Give the two or three most likely causes and
   the exact steps you'd take to tell them apart.
3. **What happens between `npx expo start` and pixels on the phone?** Walk through the moving parts
   (Metro, the bundle, Expo Go, Fast Refresh). Where would a syntax error show up? Where would a
   missing native module show up?
4. **A list of 2,000 habits stutters while scrolling.** What would you change, in what order, and
   how would you *measure* that each change helped rather than just believing it did?

---

## Write-up (10%)

Fill in every section of `NOTES.md`. Short and honest beats long and polished. In particular, we care
about: what you'd do with another day, what you're unsure about, and how you used AI tools.
