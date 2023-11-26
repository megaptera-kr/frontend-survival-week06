/* eslint-disable no-restricted-syntax */
import { container } from 'tsyringe';

import { useEffect, useRef } from 'react';

import Store from '../stores/Store';

import useForceUpdate from './useForceUpdate';

import { State } from '../types';

type Selector<T> = (state: State) => T;

export default function useSelector<T>(selector: Selector<T>): T {
  const store = container.resolve(Store);
  const state = useRef(selector(store.state));

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const update = () => {
      const newState = selector(store.state);

      if (newState !== state.current) {
        forceUpdate();
        state.current = newState;
        // setState(newState);
      }
    };

    store.addListener(update);

    return () => store.removeListener(update);
  }, [store, forceUpdate]);

  return selector(store.state);
}
