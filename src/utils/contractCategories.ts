import Restaurant from '../type/Restaurant';

export default function contractCategories(restaurants:Restaurant[]) {
  const category = restaurants.reduce((acc:string[], cur:Restaurant) => {
    const currentCategory = cur.category;
    return (
      acc.includes(currentCategory) ? acc : [...acc, currentCategory]
    );
  }, []);

  return category;
}
