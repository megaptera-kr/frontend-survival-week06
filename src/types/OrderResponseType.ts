import Food from './FoodType';

type OrderResponse = {
  id: string;
  menu: Food[];
  totalPrice: number;
};

export default OrderResponse;
