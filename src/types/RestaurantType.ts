import Food from './FoodType';

type Restaurant = {
  id: string;
  name: string;
  category: string;
  menu: Food[];
};

export default Restaurant;
