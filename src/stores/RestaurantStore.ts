import { singleton } from 'tsyringe';

import { Action, Store } from 'usestore-ts';
import { Category, Restaurant } from '../types/restaurant';
import { getRestaurant } from '../apis';

export type SearchParams = {
  name: string,
  category: Category,
}

@singleton()
@Store()
export default class RestaurantStore {
  allRestaurants:Restaurant[] = [];

  restaurants:Restaurant[] = [];

  searchParams: SearchParams = { name: '', category: '전체' };

  @Action()
  updateRestaurant(restaurants: Restaurant[]) {
    this.restaurants = restaurants;
    this.allRestaurants = restaurants;
  }

  @Action()
  searchRestaurants(newSearchParams: SearchParams) {
    const { name, category } = newSearchParams;

    if (!name && category === '전체') {
      this.restaurants = this.allRestaurants;
      return;
    }

    this.restaurants = this.allRestaurants.filter((restaurant) => {
      const isNameMatched = !name.trim() || restaurant.name.includes(name);
      const isCategoryMatched = category === '전체' || restaurant.category === category;

      return isNameMatched && isCategoryMatched;
    });
    this.searchParams = newSearchParams;
  }

  async fetchRestaurant() {
    const restaurants = await getRestaurant();
    this.updateRestaurant(restaurants);
  }
}
