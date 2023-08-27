import { singleton } from 'tsyringe';

import BaseStore from './BaseStore';

import reducers, { State, initialState } from './reducers/cart.reducer';

@singleton()
export default class Store extends BaseStore<State> {
  constructor() {
    super(initialState, reducers);
  }
}
