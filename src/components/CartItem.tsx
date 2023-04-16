import useCartStore from '../hooks/useCartStore';

type CartItemProps = {
  id: string,
  name: string,
  index:number,
}

export default function CartItem({ id, name, index }: CartItemProps) {
  const [, store] = useCartStore();

  return (
    <li key={id}>
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
