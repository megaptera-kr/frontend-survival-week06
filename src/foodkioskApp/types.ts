export type Categories = '전체' | '중식' | '한식' | '일식';

export type Food = {
  id: string;
  name: string;
  price: number;
};

export type Order = {
  id: string;
  menu: Food[];
  totalPrice: number;
};

export type OrderResponse = {
  id: string;
  order: Order;
};

export type Restaurant = {
  id: string;
  category: string;
  name: string;
  menu: Food[];
};

export type Restaurants = {
  restaurants: Restaurant[];
};

export interface State {
  restaurants: Restaurant[];
  filteredRestaurants: Restaurant[];
  category: Categories;
  query: string;
  order: Partial<Order>;
  addedFoods: Food[];
}
