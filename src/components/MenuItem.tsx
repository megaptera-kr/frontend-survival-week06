import { Food } from '../types';

interface MenuButtonProps {
    food: Food;
    handleClickSelect: (food: Food) => void
}

export default function MenuButton({ food, handleClickSelect }
  : MenuButtonProps) {
  return (
    <li
      key={food.id}
      style={{ paddingBlock: '.5rem' }}
    >
      <button
        type="button"
        onClick={() => handleClickSelect(food)}
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
