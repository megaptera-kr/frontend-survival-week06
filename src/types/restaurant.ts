import Food from './food';

interface Restaurant {
  id: string,
  category: string,
  name: string,
  menu: Food[],
}

export default Restaurant;
