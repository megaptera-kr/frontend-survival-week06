import Restaurant from '../types/Restaurant';

function normalize(text : string) {
  return text.trim().toLocaleLowerCase();
}

export default function filterRestaurant(restaurants : Restaurant[], filterText:string) {
  const query = normalize(filterText);

  const contains = (restaurant : Restaurant) => (
    normalize(restaurant.name).includes(query)
  );

  return restaurants.filter(contains);
}
