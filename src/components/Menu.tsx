import useDispatch from '../hooks/useDispatch';
import { addItem } from '../stores/actions/cart.action';
import type { Menu } from '../types/restaurants';

type MenuProps = {
  food: Menu
}

function Menu({ food }: MenuProps) {
  const dispatch = useDispatch();

  const handleClickBtn = () => {
    dispatch(addItem(food));
  };

  return (
    <li style={{ marginBottom: '1rem' }}>
      <span>{`${food.name}(${food.price.toLocaleString()}원)`}</span>
      <button type="button" name={`#${food.name}`} style={{ float: 'right' }} onClick={handleClickBtn}>선택</button>
    </li>
  );
}

export default Menu;
