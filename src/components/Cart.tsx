import useCartStore from '../hooks/useCartStore';
import CartItem from './CartItem';
import OrderButton from './OrderButton';

export default function Cart() {
  const [{ cart }, store] = useCartStore();

  return (
    <div>
      <h2>점심 바구니</h2>
      <ul>
        {cart.map((item, idx) => {
          const key = `${item.id}-${idx}`;
          return (<CartItem key={key} id={key} name={item.name} index={idx} />);
        })}
      </ul>
      <p>
        총 주문 수:
        {' '}
        {cart.length}
      </p>
      <OrderButton
        foods={cart}
        onClick={() => {
          store.removeAllCartItems();
        }}
      />
    </div>
  );
}
