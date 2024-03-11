import CategoryButton from './CategoryButton';

import useFetchCategories from '../hooks/useFetchCategories';

import Category from '../types/CategoryType';

type CategoryButtonsProps = {
  setCategoryName: (v: string) => void;
};

export default function CategoryButtons({
  setCategoryName,
}: CategoryButtonsProps) {
  const { categories } = useFetchCategories();

  return (
    <ul
      style={{
        display: 'flex',
        padding: 0,
        listStyle: 'none',
      }}
    >
      {[{ id: 0, name: '전체' }, ...categories].map((category: Category) => (
        <CategoryButton
          key={category.id}
          categoryName={category.name}
          setCategoryName={setCategoryName}
        />
      ))}
    </ul>
  );
}
