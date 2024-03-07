import CategoryButton from './CategoryButton';

import useFetchCategories from '../hooks/useFetchCategories';

import Category from '../types/CategoryType';

type CategoryButtonsProps = {
  handleCategoryButton: (v: string) => void;
};

export default function CategoryButtons({
  handleCategoryButton,
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
          content={category.name}
          clickButton={handleCategoryButton}
        />
      ))}
    </ul>
  );
}
