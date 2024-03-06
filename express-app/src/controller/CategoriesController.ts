import { Express } from 'express';

import restaurants from '../database/restaurants.table';

import Restaurant from '../types/RestaurantType';
import Category from '../types/CategoryType';

function CategoryController(app: Express) {
  app.get('/categories', (req, res) => {
    const uniqueCaterogies = new Set<string>();

    restaurants.forEach((restaurant: Restaurant) => {
      uniqueCaterogies.add(restaurant.category);
    });

    const categories: Category[] = Array.from(uniqueCaterogies).map(
      (item: string, i: number) => ({
        id: i + 1,
        name: item as string,
      }),
    );

    res.send(categories);
  });
}

export default CategoryController;
