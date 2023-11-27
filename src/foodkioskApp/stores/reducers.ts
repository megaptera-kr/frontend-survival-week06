import { Categories, Food, Order, Restaurant, State } from '../types';

import { Action, Reducers } from './BaseStore';

const fetchData = (state: State, action: Action<Restaurant[]>) => ({
  ...state,
  restaurants: action.payload,
});

const clickCategory = (state: State, action: Action<Categories>) => ({
  ...state,
  category: action.payload,
});

const search = (state: State, action: Action<string>) => ({
  ...state,
  query: action.payload,
});

const resetFoods = (state: State, action: Action<Food[]>) => ({
  ...state,
  addedFoods: action.payload,
});

const addFood = (state: State, action: Action<Food>) => ({
  ...state,
  addedFoods: [...state.addedFoods, action.payload],
});

const deleteFood = (state: State, action: Action<number>) => ({
  ...state,
  addedFoods: [
    ...state.addedFoods.filter((_, index) => index !== action.payload),
  ],
});

const getOrder = (state: State, action: Action<Order>) => ({
  ...state,
  order: action.payload,
});

const deleteOrder = (state: State, action: Action<Order>) => ({
  ...state,
  order: action.payload,
});

const reducers: Reducers<State> = {
  fetchData,
  clickCategory,
  search,
  resetFoods,
  addFood,
  deleteFood,
  getOrder,
  deleteOrder,
};

export default reducers;
