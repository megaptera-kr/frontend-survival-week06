import Food from '../types/Food';

type CartItemProps = {
  food: Food;
  index: number;
  handleClickRemove: (index: number) => void;
}

export default function CartItem({
  food, index, handleClickRemove,
}: CartItemProps) {
  const { name, price } = food;

  return (
    <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <span style={{ margin: '0px auto' }}>
        {name}
        {price.toLocaleString()}
        원
      </span>
      <button
        type="button"
        onClick={() => handleClickRemove(index)}
        style={{ marginLeft: '0.5rem' }}
      >
        X
      </button>
    </li>
  );
}
