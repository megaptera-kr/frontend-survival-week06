interface FilterCondition { category: string; keyword: string; }

const filterList = <T extends { [key: string]: any; }[]>(
  targetList: T,
  condition?: FilterCondition | FilterCondition[],
) => {
  if (!condition) return targetList;

  if (Array.isArray(condition)) {
    return targetList.filter((row) => condition.every(({ category, keyword }) => row[category].includes(keyword.trim())));
  }

  const { category, keyword } = condition;

  if (!(category || keyword)) return targetList;

  const filtered = targetList.filter((row) => row[category].includes(keyword.trim()));

  return filtered;
};

export default filterList;
