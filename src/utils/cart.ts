import type { Food } from '../types/food';
import type { FoodWithCount } from '../types/cart';

export const calcTotalPrice = (foods: Food[]) => foods.reduce((acc, food) => acc + food.price, 0);

export const calcPrice = (food: FoodWithCount) => (food.price * food.count).toLocaleString();
