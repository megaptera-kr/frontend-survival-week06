import Food from './Food';

interface Restaurant {
    id: string,
    name: string,
    category: string,
    menu: Food[],
}

export default Restaurant;
