interface FilterCondition { category: string; keyword: string; }
export type Condition = FilterCondition | FilterCondition[];

const filterList = <T extends { [key: string]: any; }[]>(
  targetList: T,
  condition?: Condition,
) => {
  if (!condition) return targetList;

  if (Array.isArray(condition)) {
    return targetList.filter((row) => condition.every(({ category, keyword }) => row[category].includes(keyword.trim()))) as T;
  }

  const { category, keyword } = condition;

  if (!(category || keyword)) return targetList as T;

  const filtered = targetList.filter((row) => row[category].includes(keyword.trim()));

  return filtered as T;
};

export default filterList;
