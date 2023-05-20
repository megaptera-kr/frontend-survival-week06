import { Restaurant } from '../types/restaurants';

type Condition = {
  keyword: string;
}

export default function filterRestaurants(data: Restaurant[], { keyword }: Condition) {
  if (!keyword) {
    return data;
  }
  return data && data.filter((item) => (item.name.includes(keyword)));
}
