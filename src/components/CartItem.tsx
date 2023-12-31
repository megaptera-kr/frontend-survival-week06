import useCartStore from '../hooks/useCartStore';
import Food from '../types/Food';

type CartItemProps ={
    menu: Food
    index: number
}

export default function CartItem(
  { menu, index }:CartItemProps,
) {
  const [, store] = useCartStore();

  const handleClick = () => {
    store.delMenu(index);
  };
  return (
    <li>
      <span>
        {menu.name}
        {' '}
        {menu.price}
        원
      </span>
      <button
        type="button"
        onClick={handleClick}
      >
        X
      </button>
    </li>
  );
}
