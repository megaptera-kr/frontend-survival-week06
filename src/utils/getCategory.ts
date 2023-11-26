import { RestaurantsInterface } from '../components/Restaurants/Restaurants.interface';

const getCategories = (data : RestaurantsInterface[]) : string[] => data.reduce((acc, cur) => (acc.includes(cur.category) ? acc : [...acc, cur.category]), ['전체']);

export default getCategories;
