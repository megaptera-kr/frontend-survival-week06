import { Menu } from '../types/restaurants';
import useDispatch from '../hooks/useDispatch';

import { removeItem } from '../stores/actions/cart.action';

type CartListProps = {
  item: Menu;
  index: number;
}

function CartList({ item, index }: CartListProps) {
  const dispatch = useDispatch();

  const handleClickCancel = () => {
    dispatch(removeItem(index));
  };

  return (
    <li>
      <span>{`${item.name}(${item.price.toLocaleString()}원)`}</span>
      <button type="button" onClick={handleClickCancel}>X</button>
    </li>
  );
}

export default CartList;
