import {
  CartItem, Receipt, Restaurant,
} from '../types/restaurant';

export type GetRestaurantResponse = Restaurant[]

export type PostOrderRequest = CartItem

export type PostOrderResponse = Receipt
