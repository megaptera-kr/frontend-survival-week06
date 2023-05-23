import Restaurants from '../types/Restaurants';
import RestaurantsTable from './RestaurantsTable';
import RestaurantsRow from './RestaurantsRow';
import Menu from '../types/Menu';

interface FilterableRestaurantsTableProps {
  restaurants: Restaurants[];
    onAddCart: (menuItem: Menu) => void;
}

export default function FilterableRestaurantsTable({
  restaurants,
  onAddCart,
}: FilterableRestaurantsTableProps) {
  return (
    <table>
      <RestaurantsTable />
      <RestaurantsRow
        restaurants={restaurants}
        onAddCart={onAddCart}
      />
    </table>
  );
}
