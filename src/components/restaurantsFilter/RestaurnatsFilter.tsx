import SearchFilter from './searchFilter/SearchFilter';
import CategoryFilter from './categoryFilter/CategoryFilter';
import type { RestaurantFilter } from '../../types/restaurants';

interface RestaurnatsFilterProps {
  categories: string[];
  filter: RestaurantFilter;
  onChangeFilter: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RestaurnatsFilter({
  categories,
  filter,
  onChangeFilter,
}: RestaurnatsFilterProps) {
  return (
    <div>
      <SearchFilter id="restaurant-name" searchText={filter.searchText} onChange={onChangeFilter} />
      <CategoryFilter
        categories={categories}
        selectedCategory={filter.category}
        onChange={onChangeFilter}
      />
    </div>
  );
}
