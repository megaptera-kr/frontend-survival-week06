import { Restaurant } from '../types/restaurants';
import RestaurantItem from './RestaurantItem';

type Props = {
  restaurants: Restaurant[];
}

export default function FilterableRestaurantsList({ restaurants }: Props) {
  return (
    <section>
      <section className="flex">
        <h2>식당 이름</h2>
        <h2>종류</h2>
        <h2>메뉴</h2>
      </section>
      <ul>
        {restaurants && restaurants.map((item) => (
          <RestaurantItem key={item.id} data={item} />
        ))}
      </ul>
    </section>

  );
}
