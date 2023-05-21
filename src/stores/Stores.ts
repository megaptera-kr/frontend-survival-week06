import { singleton } from 'tsyringe';
import BaseStore, { Action } from './BaseStore';

const emptyCart = [] as string[];

const initialState = {
  inputText: '',
  category: '전체',
  cart: emptyCart,
  receipt: '',
};

type State = typeof initialState

export function inputText(text:string) {
  return { type: 'INPUTTEXT', payload: text };
}

export function inputCategory(category:string) {
  return { type: 'INPUTCATEGORY', payload: category };
}

export function inputCart(food:string) {
  return { type: 'INPUTCART', payload: food };
}

export function delCart() {
  return { type: 'DELCART', payload: '' };
}

export function order(index:string) {
  return { type: 'RECEIPT', payload: index };
}

export function refreshCart() {
  return { type: 'REFRESHCART', payload: '' };
}

export function refreshReceipt() {
  return { type: 'REFRESHRECEIPT', payload: '' };
}

function reducer(state:State, action:Action) {
  switch (action.type) {
  case 'INPUTTEXT':
    return {
      ...state, inputText: action.payload,
    };
  case 'INPUTCATEGORY':
    return {
      ...state, category: action.payload,
    };
  case 'INPUTCART':
    return {
      ...state, cart: [...(state.cart), action.payload],
    };
  case 'DELCART': {
    return {
      ...state, cart: emptyCart,
    }; }
  case 'RECEIPT':
    return {
      ...state, receipt: action.payload,
    };
  case 'REFRESHCART':
    return {
      ...state, cart: emptyCart,
    };
  case 'REFRESHRECEIPT':
    return {
      ...state, receipt: '',
    };
  default:
    return state;
  }
}

@singleton()
export default class Store extends BaseStore<State> {
  constructor() {
    super(initialState, reducer);
  }
}
