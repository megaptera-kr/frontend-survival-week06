import { useSyncExternalStore } from 'react';
import CounterStore, { CounterStoreSnapshot } from '../stores/CounterStore';

const counterStore = new CounterStore();

export default function useCounterStore(): [CounterStoreSnapshot, CounterStore] {
  const snapshot = useSyncExternalStore((onStoreChange) => {
    counterStore.addListener(onStoreChange);
    return () => counterStore.removdListener(onStoreChange);
  }, () => counterStore.getSnapshot());
  return [snapshot, counterStore];
}
