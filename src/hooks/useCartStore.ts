import { useSyncExternalStore } from 'react';

import CartStore, { CartStoreSnapshot } from '../stores/v1/CartStore';

const cartStore = new CartStore();

function useCartStore(): [CartStoreSnapshot, CartStore] {
  const snapshot: CartStoreSnapshot = useSyncExternalStore(
    (onStoreChange) => {
      cartStore.addListener(onStoreChange);
      return () => cartStore.removeListener(onStoreChange);
    },
    () => cartStore.getSnapshot(),
  );

  return [snapshot, cartStore];
}

export default useCartStore;
