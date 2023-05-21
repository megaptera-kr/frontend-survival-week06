import { Menu } from '../types/restaurants';
import useDispatch from '../hooks/useDispatch';
import useSelector from '../hooks/useSelector';

type Props = {
  data: Menu[];
}

function Menu({ data }: Props) {
  const dispatch = useDispatch();

  return (
    <ul>
      {data && data.map((item: Menu) => (
        <li key={item.id} className="flex">
          <p>
            {item.name}
            (
            {item.price}
            원)
          </p>
          <button
            type="button"
            className="bg-slate-200 rounded-lg mx-4 px-2  hover:bg-violet-200"
            onClick={() => dispatch({ type: 'add', payload: item })}
          >
            ➕ 담기
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
