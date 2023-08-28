import Food from '../types/Food';
import useOrderStore from '../hooks/useOrderStore';

export default function CartItem({
  food,
  cartItemIndex,
}: {
  food: Food;
  cartItemIndex: number;
}) {
  const [{ cart }, store] = useOrderStore();

  const { name, price } = food;
  const onCancelHandler = () => {
    store.setCart?.(
      cart.filter((_, index) => index !== cartItemIndex),
    );
  };
  return (
    <li style={{ display: 'flex', paddingBlock: '0.5rem' }}>
      <label htmlFor={`#${name}`} style={{ margin: '0px auto' }}>{`${name}(${price}원)`}</label>
      <button type="button" id={name} onClick={() => onCancelHandler()}>X</button>
    </li>
  );
}
