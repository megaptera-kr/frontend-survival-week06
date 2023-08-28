import { type Action } from '../base.store';
import type { Menu } from '../../types/restaurants';

export const initialState: {menu: Menu[]} = {
  menu: [],
};
export type State = typeof initialState;

const reducers = {
  addItem(state: State, action: Action<Menu>): State {
    if (!action.payload) return state;
    return {
      ...state,
      menu: [...state.menu, action.payload],
    };
  },
  removeItem(state: State, action: Action<number>): State {
    if (action.payload !== 0 && !action.payload) return state;
    return {
      ...state,
      menu: state.menu.filter((_, idx) => idx !== action.payload),
    };
  },
  clearItem(state: State): State {
    return {
      ...state,
      menu: [],
    };
  },
};

export default reducers;
