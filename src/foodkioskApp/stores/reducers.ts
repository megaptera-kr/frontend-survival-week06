import { Categories, MenuItem, Receipt, RestaurantItem, State } from '../types';

import { Action, Reducers } from './BaseStore';

const fetchData = (state: State, action: Action<RestaurantItem[]>) => ({
  ...state,
  restaurants: action.payload,
});

const updateCategory = (state: State, action: Action<Categories>) => ({
  ...state,
  category: action.payload,
});

const search = (state: State, action: Action<string>) => ({
  ...state,
  query: action.payload,
});

const resetMenu = (state: State, action: Action<MenuItem[]>) => ({
  ...state,
  addedMenus: action.payload,
});

const addMenu = (state: State, action: Action<MenuItem>) => ({
  ...state,
  addedMenus: [...state.addedMenus, action.payload],
});

const deleteMenu = (state: State, action: Action<number>) => ({
  ...state,
  addedMenus: [
    ...state.addedMenus.filter((_, index) => index !== action.payload),
  ],
});

const getReceipt = (state: State, action: Action<Receipt>) => ({
  ...state,
  receipt: action.payload,
});

const deleteReceipt = (state: State, action: Action<Receipt>) => ({
  ...state,
  receipt: action.payload,
});

const reducers: Reducers<State> = {
  fetchDataReducer: fetchData,
  updateCategoryReducer: updateCategory,
  searchReducer: search,
  resetMenuReducer: resetMenu,
  addMenuReducer: addMenu,
  deleteMenuReducer: deleteMenu,
  getReceiptReducer: getReceipt,
  deleteReceiptReducer: deleteReceipt,
};

export default reducers;
