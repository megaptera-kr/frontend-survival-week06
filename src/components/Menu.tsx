import useDispatch from '../hooks/useDispatch';
import { inputCart } from '../stores/Stores';
import Food from '../type/Food';

type MenuProps = {
  menu : Food
}

export default function Menu({ menu }:MenuProps) {
  const dispatch = useDispatch();

  const menuString = JSON.stringify(menu);
  function handleClick() {
    dispatch(inputCart(menuString));
  }
  return (
    <ol key={menu.id}>
      <label>
        {menu.name}
        {' ('}
        {menu.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        {'원) '}
        <button type="button" onClick={handleClick}>선택</button>
      </label>
    </ol>
  );
}
