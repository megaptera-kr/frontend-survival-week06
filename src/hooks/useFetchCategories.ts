import { useEffect, useState } from 'react';

import CategoryAPI from '../apis/category.api';

import Category from '../types/CategoryType';

type useFetchCategoriesReturnType = {
  categories: Category[];
};

function useFetchCategories(): useFetchCategoriesReturnType {
  const [categories, setCategories] = useState<Category[]>([]);

  const api = new CategoryAPI();

  useEffect(() => {
    const fetchData = async () => {
      const data: Category[] = await api.read();
      setCategories(data);
    };

    fetchData();
  }, []);

  return { categories };
}

export default useFetchCategories;
