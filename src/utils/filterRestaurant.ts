import Restaurant from '../types/Restaurants';

type filterRestaurantCondition = {
    filterText: string,
    filterCategory: string,
}

function normalize(string: string) {
  return string.toLocaleLowerCase().replace(/\s/g, '');
}

export default function filterRestaurant(
  restaurants: Restaurant[],
  { filterText, filterCategory }: filterRestaurantCondition,
) {
  const query = normalize(filterText);

  let filteredRestaurant: Restaurant[] = query.length
    ? restaurants.filter(({ name }: {name: string}) => {
      const normalizedName = normalize(name);
      return normalizedName.includes(query);
    })
    : restaurants;

  if (filterCategory !== '전체') {
    filteredRestaurant = filteredRestaurant.filter(({
      category,
    }: {category: string}) => category === filterCategory);
  }

  return filteredRestaurant;
}
