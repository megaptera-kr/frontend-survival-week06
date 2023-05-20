import { Restaurant } from '../types/restaurants';
import Menu from './Menu';

type Props = {
  data: Restaurant;
};

export default function RestaurantItem({ data }: Props) {
  return (
    <li className="flex" key={data.id}>
      <div>{data.name}</div>
      <div>{data.category}</div>
      <Menu data={data.menu} />
    </li>
  );
}
