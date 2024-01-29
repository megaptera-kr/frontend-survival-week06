import { useEffect } from 'react';
import { container } from 'tsyringe';
import Store from '../stores/store';
import useForceUpdate from './useForceUpdate';

const useStore = () => {
  const store = container.resolve(Store);
  const forceUpdate = useForceUpdate();

  useEffect(() => {
    store.addListener(forceUpdate);
    return () => store.removeListener(forceUpdate);
  }, []);

  return store;
};

export default useStore;
