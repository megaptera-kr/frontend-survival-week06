import { singleton } from 'tsyringe';

import Restaurant from '../types/RestaurantType';
import { normalize } from '../utils/common';

type QueryStringType = {
  restaurantName: string;
  categoryName: string;
};

@singleton()
class RestaurantAPI {
  readonly url: URL;

  constructor() {
    this.url = new URL('http://localhost:3000/restaurants');
  }

  async read({
    categoryName = '전체',
    restaurantName = '',
  }: QueryStringType): Promise<Restaurant[]> {
    const params = new URLSearchParams();
    params.append('categoryName', categoryName);
    params.append('restaurantName', normalize(restaurantName));
    this.url.search = params.toString();

    const response = await fetch(this.url);
    if (!response.ok) {
      throw new Error(`Fail to get data. Status: ${response.status}`);
    }

    return response.json();
  }
}

export default RestaurantAPI;
