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
    const getCategories = async () => {
      const data: Category[] = await api.read();
      setCategories(data);
    };
    getCategories();
  }, []);

  return { categories };
}

export default useFetchCategories;
