import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import FocusCard from './bughunt/FocusCard';

/**
 * Entry point. The tab switcher below is only scaffolding so both parts of the
 * assignment can be reached in Expo Go. Replace the Streaks placeholder with
 * your app (Part 1). You may restructure this file however you like — add
 * navigation, move things into folders, etc. Just keep it running in Expo Go.
 */
export default function App() {
  const [tab, setTab] = useState<'streaks' | 'bughunt'>('streaks');

  return (
    <SafeAreaView style={styles.root}>
      <StatusBar style="auto" />
      <View style={styles.tabs}>
        <Tab label="Streaks" active={tab === 'streaks'} onPress={() => setTab('streaks')} />
        <Tab label="Bug hunt" active={tab === 'bughunt'} onPress={() => setTab('bughunt')} />
      </View>
      {tab === 'streaks' ? <StreaksPlaceholder /> : <FocusCard />}
    </SafeAreaView>
  );
}

function StreaksPlaceholder() {
  return (
    <View style={styles.center}>
      <Text style={styles.h1}>Streaks</Text>
      <Text style={styles.p}>Part 1 goes here. See ASSIGNMENT.md.</Text>
    </View>
  );
}

function Tab({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Pressable onPress={onPress} style={[styles.tab, active && styles.tabActive]}>
      <Text style={[styles.tabText, active && styles.tabTextActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#fff' },
  tabs: { flexDirection: 'row', borderBottomWidth: StyleSheet.hairlineWidth, borderColor: '#ddd' },
  tab: { flex: 1, paddingVertical: 14, alignItems: 'center' },
  tabActive: { borderBottomWidth: 2, borderColor: '#111' },
  tabText: { fontSize: 16, color: '#888' },
  tabTextActive: { color: '#111', fontWeight: '600' },
  center: { flex: 1, alignItems: 'center', justifyContent: 'center', gap: 8 },
  h1: { fontSize: 28, fontWeight: '700' },
  p: { fontSize: 16, color: '#666' },
});
