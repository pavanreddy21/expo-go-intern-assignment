/**
 * Persistence layer. Keep all AsyncStorage access in this file so the rest of
 * the app can be tested without a device.
 *
 * You may change the shape of `Habit` and `AppState` — this is only a starting point.
 */
import AsyncStorage from '@react-native-async-storage/async-storage';
import type { DayKey } from './streak';

export type Habit = {
  id: string;
  name: string;
  emoji: string;
  createdAt: DayKey;
  checkins: DayKey[];
};

export type AppState = {
  version: 1;
  habits: Habit[];
};

const KEY = 'streaks:v1';

export const EMPTY_STATE: AppState = { version: 1, habits: [] };

export async function loadState(): Promise<AppState> {
  // TODO(candidate): read, parse and validate. Corrupt or missing data must
  // fall back to EMPTY_STATE, never crash the app.
  const raw = await AsyncStorage.getItem(KEY);
  return raw ? (JSON.parse(raw) as AppState) : EMPTY_STATE;
}

export async function saveState(state: AppState): Promise<void> {
  await AsyncStorage.setItem(KEY, JSON.stringify(state));
}
