import Food from '../types/Food';

type MenuItemProps = {
    food: Food;
    onClick: any;
}

export default function MenuItem({ food, onClick }:MenuItemProps) {
  const { name, price } = food;

  return (
    <li
      style={{
        display: 'flex',
        paddingBlock: '.5rem',
      }}
    >
      <button
        style={{ marginLeft: '.5rem' }}
        type="button"
        onClick={() => onClick(food)}
      >
        <span style={{ margin: '0 auto' }}>
          {name}
          (
          {price.toLocaleString()}
          원)
        </span>
      </button>
    </li>
  );
}
