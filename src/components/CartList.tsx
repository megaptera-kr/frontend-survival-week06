import { Menu } from '../types/restaurants';
import useDispatch from '../hooks/useDispatch';

import { removeItem } from '../stores/actions/cart.action';

type CartListProps = {
  item: Menu;
  index: number;
  onClickCancel: (index: number) => void;
}

function CartList({ item, index, onClickCancel }: CartListProps) {
  return (
    <li style={{ marginBottom: '1rem' }}>
      <span>{`${item.name}(${item.price.toLocaleString()}원)`}</span>
      <button type="button" onClick={() => onClickCancel(index)}>X</button>
    </li>
  );
}

export default CartList;
