# Expo Go take-home — iOS intern (React Native / Expo)

An **open-book** assignment. Use the docs, Google, Stack Overflow, and any AI assistant you like.
We are not testing what you remember; we are testing what you build, how you debug, and how you explain.

**Budget:** aim for 4–6 focused hours. **Deadline:** 7 days from when you receive the link.
Stopping early with clean, working, explained code beats a rushed "everything".

## What you'll do

| Part | What | Where | Weight |
|---|---|---|---|
| 1 | Build **Streaks**, a tiny habit tracker, running in Expo Go | `App.tsx`, `lib/` | 50% |
| 2 | **Bug hunt**: fix a planted-bug component and explain each bug | `bughunt/FocusCard.tsx` | 25% |
| 3 | Four **short-answer** questions | `NOTES.md` | 15% |
| — | Your write-up (decisions, trade-offs, AI use) | `NOTES.md` | 10% |

Full spec: [ASSIGNMENT.md](ASSIGNMENT.md). Scoring: [RUBRIC.md](RUBRIC.md). Write-up template: [NOTES.md](NOTES.md).

## Setup (10 minutes)

You need: Node 20+, an iPhone with **Expo Go** from the App Store, and the phone on the same Wi-Fi as your laptop.
The iOS Simulator (Xcode) works too, but we want to see it on a real phone.

```bash
git clone <this repo>   # or download the zip
cd expo-go-intern-assignment
npm install
npx expo start          # scan the QR code with the iPhone camera
```

Other commands:

```bash
npm run typecheck       # tsc --noEmit  — must pass at submission
npm test                # unit tests for lib/streak.ts (they fail until you implement it — that's the point)
npm run lint
```

This project is pinned to **Expo SDK 58**, which is what the App Store build of Expo Go runs today.
Don't upgrade or downgrade the SDK.

## Rules

- **Expo Go only.** No `expo prebuild`, no EAS build, no custom native modules. If a library needs a
  development build, it is off-limits (that is part of the exercise).
- **Any library that works in Expo Go is fine.** `npx expo install <pkg>` picks compatible versions.
- **AI tools are allowed and expected.** Disclose how you used them in `NOTES.md`. You must be able to
  explain every line you submit in a 30-minute follow-up call; "the AI wrote it" is not an answer.
- **Keep it private.** Do not publish your solution or fork this repo publicly (see Submitting).
- Ask questions if the spec is unclear. Asking a good question is a plus, not a minus.

## Submitting

1. Create a **private** GitHub repo with your solution and invite `pavanreddy21` as a collaborator
   (or email a zip if you prefer).
2. Fill in `NOTES.md`.
3. Record a **1–2 minute screen recording** of the app running in Expo Go on your phone
   (iOS Control Center → Screen Recording). Upload it anywhere we can view it and link it in `NOTES.md`.
4. Make sure `npm run typecheck` and `npm test` pass on a fresh clone.

## What happens next

We review within a few days, then a 30-minute call: you walk us through your code and we pair on a
small change to it. That call is the real interview; this assignment is just the shared context for it.

## License

MIT. The starter code is yours to reuse for anything.
