import { singleton } from 'tsyringe';

import BaseStore from './BaseStore';

import reducers from './reducers';

import { State } from '../types';

const initialState: State = {
  restaurants: [],
  filteredRestaurants: [],
  category: '전체',
  query: '',
  order: {},
  addedFoods: [],
};

@singleton()
export default class Store extends BaseStore<State> {
  constructor() {
    super(initialState, reducers);
  }
}
