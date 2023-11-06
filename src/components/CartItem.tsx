import Menu from '../types/Menu';

type CartItemProps = {
  cart: Menu;
  index: number;
  onClickCancel: (index: number) => void;
}

export default function CartItem({
  cart,
  index,
  onClickCancel,
}: CartItemProps) {
  return (
    <li>
      <span>
        {cart.name}
        (
        {cart.price.toLocaleString('ko-kr')}
        원)
      </span>
      <button
        type="button"
        onClick={() => {
          onClickCancel(index);
        }}
      >
        x
      </button>
    </li>
  );
}
