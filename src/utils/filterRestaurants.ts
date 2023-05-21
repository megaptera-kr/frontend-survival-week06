import { Restaurant } from '../types/restaurants';

type Condition = {
  keyword: string;
  selectedCategory: string;
}

export default function filterRestaurants(
  data: Restaurant[],
  { keyword, selectedCategory }: Condition,
): Restaurant[] {
  const filteredData = selectedCategory === '전체' ? data : data.filter((item) => item.category === selectedCategory);

  if (!keyword) {
    return filteredData;
  }
  return filteredData.filter((item) => (item.name.includes(keyword)));
}
