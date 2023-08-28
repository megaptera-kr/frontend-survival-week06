import Food from '../types/Food';

type CartItemProps = {
    food: Food;
    index: number;
    handleClickCancel: (idx: number) => void;
}

export default function CartItem({
  food, index, handleClickCancel,
}: CartItemProps) {
  const { name, price } = food;
  return (
    <div>
      <span>{name}</span>
      <span>
        {price.toLocaleString()}
        원
      </span>
      <button
        type="button"
        onClick={() => handleClickCancel(index)}
      >
        X
      </button>
    </div>
  );
}
