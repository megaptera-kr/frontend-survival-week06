import { Menu } from '../types/restaurants';

type Props = {
  data: Menu[];
}

function Menu({ data }: Props) {
  return (
    <ul>
      {data && data.map((item: Menu) => (
        <li key={item.id}>
          <p>
            {item.name}
            (
            {item.price}
            원)
          </p>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
