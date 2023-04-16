export const deduplicationBy = <T, V extends string>(arr: T[], f: (arg: T) => V) => {
  const unique = new Set(...arr.map(f));
  return arr.filter((item) => unique.has(f(item)));
};

export const frequenciesBy = <T, V extends string>
  (arr: T[], f: (arg: T) => V): Record<V, number> => arr.reduce((acc, cur) => ({
    ...acc,
    [f(cur)]: acc[f(cur)] ? acc[f(cur)] + 1 : 1,
  }), {} as Record<V, number>);

export const parseCart = (foods: Food[]): FoodWithCount[] => {
  const freq = frequenciesBy(foods, (food) => food.id);
  const uniqueFoods = deduplicationBy(foods, (food) => food.id);

  return uniqueFoods.map((food) => ({ ...food, count: freq[food.id] }));
};
