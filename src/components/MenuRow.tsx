import useCartStore from '../hooks/useCartStore';

import { Food } from '../types';

interface MenuRowProps {
    food: Food;
}

export default function MenuRow({ food } : MenuRowProps) {
  const [, store] = useCartStore();

  const handleClick = () => {
    store.addCartItem(food);
  };

  return (
    <li
      style={{ paddingBlock: '.5rem' }}
    >
      <button
        type="button"
        onClick={handleClick}
        style={{
          display: 'inline-block',
          minWidth: 'max-content',
          width: '10rem',
          textAlign: 'center',
        }}
      >
        {food.name}
        (
        {food.price.toLocaleString()}
        원)
      </button>
    </li>
  );
}
