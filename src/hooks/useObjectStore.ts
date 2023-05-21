import { useEffect } from 'react';

import useForceUpdate from './useForceUpdate';

import ObjectStore from '../stores/ObjectStore';
import Cart from '../types/cart';

export default function useObjectStore<T extends ObjectStore>(store: T): T {
  const forceUpdate = useForceUpdate<Cart>();

  useEffect(() => {
    store.addListener(forceUpdate);
    return () => store.removeListener(forceUpdate);
  }, [store]);

  return store;
}
