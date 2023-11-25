/* eslint-disable no-restricted-syntax */
import { container } from 'tsyringe';

import { useEffect, useState } from 'react';

import Store from '../stores/Store';

import useForceUpdate from './useForceUpdate';

import { State } from '../types';
import shallowEqual from '../utils/shallowEqual';

type Selector<T> = (state: State) => T;

export default function useSelector<T>(selector: Selector<T>): T {
  const store = container.resolve(Store);

  const [state, setState] = useState<T>(selector(store.state));

  const forceUpdate = useForceUpdate();

  useEffect(() => {
    const update = () => {
      const newState = selector(store.state);

      if (!shallowEqual(newState, state)) {
        setState(newState);
        forceUpdate();
      }

      if (newState !== state) {
        forceUpdate();
        setState(newState);
      }
    };

    store.addListener(update);

    return () => store.removeListener(update);
  }, [state, forceUpdate]);

  return state;
}
