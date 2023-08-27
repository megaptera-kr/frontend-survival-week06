import { useEffect } from 'react';
import { container } from 'tsyringe';
import CartStore from '../stores/CartStore';
import useForceUpdate from './useForceUpdate';

export default function useCartStore() {
  const store = container.resolve(CartStore);

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.addListener(forceUpdate);
    return () => {
      store.removeListener(forceUpdate);
    };
  }, []);

  return store;
}
