import CartItem from './CartItem';
import Food from '../types/Food';
import useOrderStore from '../hooks/useOrderStore';

export default function Cart() {
  const [{ cart }, store] = useOrderStore();

  const totalPrice = cart.reduce(
    (result, food) => result + food.price,
    0,
  );

  const onOrderHandler = async () => {
    if (!cart.length) {
      return;
    }

    const response = await fetch('http://localhost:3000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ menu: cart, totalPrice }),
    });

    const { id } = await response.json();

    const receiptResponse = await fetch(`http://localhost:3000/orders/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const { order } = await receiptResponse.json();

    store.setReceipt?.(order);
    store.setCart?.([]);
  };
  return (
    <div>
      <div style={{ marginBottom: '48px' }}>
        <h2>점심 바구니</h2>
        <div>
          <h3>{`주문내역${cart.length ?? 0}개`}</h3>
        </div>
        <ul style={{ width: '20%' }}>
          {cart.map((food: Food, index: number) => (
            <CartItem
              key={`food${food.id + index}`}
              cartItemIndex={index}
              food={food}
            />
          ))}
        </ul>
        <button
          type="button"
          onClick={() => store.setCart?.([])}
        >
          취소
        </button>
        <button type="button" onClick={() => onOrderHandler()}>
          {`합계: ${totalPrice.toLocaleString()}원 주문하기`}
        </button>
      </div>
    </div>
  );
}
