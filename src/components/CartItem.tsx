import useCartStore from '../hooks/useCartStore';

type CartItemProps = {
  key: string,
  name: string,
  index:number,
}

export default function CartItem({ key, name, index }: CartItemProps) {
  const [, store] = useCartStore();

  return (
    <li key={key}>
      {name}
      <button
        type="button"
        onClick={() => {
          store.removeCartItem(index);
        }}
      >
        X
      </button>
    </li>
  );
}
