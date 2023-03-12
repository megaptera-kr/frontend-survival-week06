import { useSyncExternalStore } from 'react';

import CounterStore, { CounterStoreSnapShot } from '../stores/CounterStore';

const counterStore = new CounterStore();

export default function useCounterStore(): [CounterStoreSnapShot, CounterStore] {
  const snapshot = useSyncExternalStore(
    (onStoreChange) => {
      counterStore.addListener(onStoreChange);
      return () => {
        counterStore.removeListener(onStoreChange);
      };
    },
    () => counterStore.getSnapshot(),
  );
  return [snapshot, counterStore];
}
