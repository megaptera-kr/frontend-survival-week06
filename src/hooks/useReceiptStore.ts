import { useSyncExternalStore } from 'react';

import ReceiptStore, { ReceiptStoreSnapshot } from '../stores/v1/ReceiptStore';

const receiptStore = new ReceiptStore();

function useReceiptStore(): [ReceiptStoreSnapshot, ReceiptStore] {
  const snapshot: ReceiptStoreSnapshot = useSyncExternalStore(
    (onStoreChange) => {
      receiptStore.addListener(onStoreChange);
      return () => receiptStore.removeListener(onStoreChange);
    },
    () => receiptStore.getSnapshot(),
  );

  return [snapshot, receiptStore];
}

export default useReceiptStore;
