import Food from './FoodType';

type Receipt = {
  id: string;
  menu: Food[];
  totalPrice: number;
};

export default Receipt;
