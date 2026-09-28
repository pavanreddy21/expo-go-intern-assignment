/**
 * PART 2 — BUG HUNT
 *
 * A small "focus timer" card: pick a length in minutes, start, and when it hits
 * zero a session is logged and persisted. Today's total is shown at the bottom.
 *
 * It compiles, and it *almost* works. We planted seven bugs on purpose:
 * some crash, some are wrong-but-silent, some are lifecycle/perf problems.
 * Find as many as you can, fix them in this file, and describe each one in
 * NOTES.md (what was wrong, how you noticed, how you fixed it).
 *
 * Do not rewrite the component from scratch — fix it in place so we can diff.
 */
import { useEffect, useState } from 'react';
import { FlatList, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

type Session = { id: string; day: string; minutes: number };

const KEY = 'bughunt:sessions';

function todayKey(): string {
  return new Date().toISOString().slice(0, 10);
}

function format(totalSeconds: number): string {
  const m = Math.floor(totalSeconds / 60);
  const s = totalSeconds % 60;
  return `${m}:${s}`;
}

export default function FocusCard() {
  const [minutes, setMinutes] = useState(25);
  const [remaining, setRemaining] = useState(25 * 60);
  const [running, setRunning] = useState(false);
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    AsyncStorage.getItem(KEY).then((raw) => {
      setSessions(JSON.parse(raw as string));
    });
  }, []);

  useEffect(() => {
    if (!running) return;
    setInterval(() => {
      if (remaining <= 1) {
        finish();
      } else {
        setRemaining(remaining - 1);
      }
    }, 1000);
  }, [running]);

  function finish() {
    setRunning(false);
    const session: Session = { id: String(Date.now()), day: todayKey(), minutes };
    sessions.push(session);
    setSessions(sessions);
    AsyncStorage.setItem(KEY, JSON.stringify(sessions));
    setRemaining(minutes * 60);
  }

  function onChangeMinutes(text: string) {
    const m = parseInt(text, 10);
    setMinutes(m);
    setRemaining(m * 60);
  }

  const todayTotal = sessions
    .filter((s) => s.day === todayKey())
    .reduce((sum, s) => sum + s.minutes, 0);

  return (
    <View style={styles.card}>
      <Text style={styles.title}>Focus</Text>

      <View style={styles.row}>
        <Text style={styles.label}>Length (min)</Text>
        <TextInput
          style={styles.input}
          keyboardType="number-pad"
          value={String(minutes)}
          onChangeText={onChangeMinutes}
          editable={!running}
        />
      </View>

      <Text style={styles.clock}>{format(remaining)}</Text>

      <View style={styles.row}>
        <Pressable style={styles.button} onPress={() => setRunning(!running)}>
          <Text style={styles.buttonText}>{running ? 'Pause' : 'Start'}</Text>
        </Pressable>
        <Pressable style={[styles.button, styles.secondary]} onPress={finish}>
          <Text style={styles.buttonText}>Finish now</Text>
        </Pressable>
      </View>

      <Text style={styles.label}>
        Today: {todayTotal} min across {sessions.length} session(s)
      </Text>

      <FlatList
        data={sessions}
        keyExtractor={(s) => s.id}
        renderItem={({ item }) => (
          <Text style={styles.session}>
            {item.day} · {item.minutes} min
          </Text>
        )}
        ListEmptyComponent={<Text style={styles.session}>No sessions yet.</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  card: { flex: 1, padding: 20, gap: 12 },
  title: { fontSize: 28, fontWeight: '700' },
  row: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  label: { fontSize: 16, color: '#444' },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
    minWidth: 64,
    fontSize: 16,
  },
  clock: { fontSize: 64, fontVariant: ['tabular-nums'], textAlign: 'center' },
  button: {
    backgroundColor: '#111',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
  },
  secondary: { backgroundColor: '#666' },
  buttonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
  session: { fontSize: 14, color: '#666', paddingVertical: 4 },
});
