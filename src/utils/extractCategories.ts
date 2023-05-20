import { Restaurant } from '../types/restaurants';

export default function extractCategories(data: Restaurant[]) : string [] {
  return (data &&
    data.reduce((acc, curr) => acc.includes(curr.category) ? acc : [...acc, curr.category], []));
}
