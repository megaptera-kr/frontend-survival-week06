import Food from '../types/Food';

type CartItemProps = {
    food: Food;
    handleRemoveMenu: (index:number) => void;
    index: number;
}
export default function CartItem({ food, handleRemoveMenu, index }: CartItemProps) {
  const { name, price } = food;
  return (
    <div>
      <span>
        {name}
      </span>
      <span>
        {price.toLocaleString()}
        원
      </span>
      <button type="button" onClick={() => handleRemoveMenu(index)}>X</button>
    </div>
  );
}
