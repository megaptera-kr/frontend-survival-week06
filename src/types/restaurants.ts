import type { Food } from './food';

export interface Restaurant {
 id: string;
 category: string;
 name: string;
 menu: Food[];
}

export type RestaurantFilter = {
  searchText: string;
  category: string;
}
