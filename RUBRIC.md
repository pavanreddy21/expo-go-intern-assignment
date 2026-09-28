# Rubric

100 points. We publish this so there are no surprises. Roughly: 75+ = strong yes, 60–75 = the call
decides, under 60 = probably not this time.

## Part 1 — Streaks (50)

| Points | Criterion | What "full marks" looks like |
|---|---|---|
| 10 | Runs in Expo Go | Fresh clone → `npm install` → `npx expo start` → works on an iPhone, no red screens, typecheck passes. |
| 15 | Streak logic + tests | All four `lib/streak.ts` functions correct, incl. local-day, yesterday-alive, duplicates, future dates, month/year/DST boundaries. Tests added beyond ours. |
| 10 | Persistence | Survives app kill. Corrupt / missing / old-shape data falls back cleanly. Storage access stays behind `lib/storage.ts` or an equivalent boundary. |
| 10 | UX states & rules | Loading + empty states, validation (empty / duplicate / long names), delete confirmation, sort order, haptics. |
| 5 | Code quality | Small components, sensible names, no dead code, no `any` without a reason. Readable in one sitting. |

The optional "nice to have" earns no points on its own. It can lift Code quality or UX by a point or two
if it's done well, and it costs points if it broke a must-have.

## Part 2 — Bug hunt (25)

| Points | Criterion |
|---|---|
| 3 each (max 21) | Bug found **and** fixed correctly **and** explained (what / how noticed / fix). 2 pts if found and fixed but the explanation is vague; 1 pt if found but the fix introduces a new problem. |
| 4 | Diff discipline: fixed in place, no unrelated rewrites, no new bugs introduced. |

## Part 3 — Short answers (15)

| Points | Criterion |
|---|---|
| 4 | Q1 Expo Go vs dev build — accurate boundary, a real example library, a workable path forward. |
| 4 | Q2 Connection debugging — plausible causes ranked, concrete steps to distinguish them. |
| 3 | Q3 Metro → phone — correct sequence, correct location of both error types. |
| 4 | Q4 List performance — ordered fixes **and** a measurement method, not just a list of tricks. |

## Write-up (10)

| Points | Criterion |
|---|---|
| 4 | Decisions and trade-offs are stated and make sense. |
| 3 | Honest about what's unfinished or uncertain. |
| 3 | AI use disclosed specifically (which tool, for what, what you changed). |

## Automatic deductions

- **−10** Requires a development build / native module / EAS to run.
- **−10** `npm run typecheck` fails on a fresh clone.
- **−5** No screen recording.
- **Disqualifying:** can't explain their own code on the follow-up call.
