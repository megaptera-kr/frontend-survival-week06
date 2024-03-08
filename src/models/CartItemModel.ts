import Food from '../types/FoodType';

class CartItemModel {
  readonly id: number;

  readonly food: Food;

  constructor({ id, food }: { id: number; food: Food }) {
    this.id = id;
    this.food = food;
  }
}

export default CartItemModel;
