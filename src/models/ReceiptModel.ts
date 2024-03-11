import Food from '../types/FoodType';
import Receipt from '../types/ReceiptType';

class ReceiptModel {
  readonly id: string;

  readonly menu: Food[];

  readonly totalPrice: number;

  constructor({ id, menu, totalPrice }: Receipt) {
    this.id = id;
    this.menu = menu;
    this.totalPrice = totalPrice;
  }
}

export default ReceiptModel;
