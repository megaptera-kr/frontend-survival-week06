import { singleton } from 'tsyringe';

import BaseStore, { Action } from './BaseStore';

const initialState = {
  name: 'Cart',
  sum: 0,
  count: 0,
  menuList: [],
};

export type State = typeof initialState;

function add(state: State, action: Action<any>) {
  return {
    ...state,
    sum: state.sum + action.payload.price,
    count: state.count + 1,
    menuList: [...state.menuList, action.payload],
  };
}

function remove(state: State, action: Action<any>) {
  const updatedMenuList = [
    ...state.menuList.slice(0, action.payload.index),
    ...state.menuList.slice(action.payload.index + 1),
  ];
  return {
    ...state,
    sum: state.sum - action.payload.price,
    count: state.count - 1,
    menuList: updatedMenuList,
  };
}

function reset(state: State) {
  return {
    ...state,
    sum: 0,
    count: 0,
    menuList: [],
  };
}

const reducers = {
  add,
  remove,
  reset,
};

@singleton()
export default class Store extends BaseStore<State> {
  constructor() {
    super(initialState, reducers);
  }
}
