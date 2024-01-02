import useCartStore from '../hooks/useCartStore';
import getTotalPrice from '../utils/getTotalPrice';
import CartItem from './CartItem';

export default function Cart() {
  const [{ cart }, store] = useCartStore();

  const totalPrice = getTotalPrice(cart).toLocaleString();

  const handleCancle = () => {
    store.clear();
  };

  const handleOrder = () => {
    store.clear();
  };

  return (
    <>
      <h2>
        주문내역
        {cart.length}
        개
      </h2>
      <div>
        총 결제 예상금액
        {' '}
        {totalPrice}
        원
      </div>
      <ul>
        {cart.map((menu, index) => {
          const key = `${menu.id}-${index}`;
          return (
            <CartItem
              key={key}
              menu={menu}
              index={index}
            />
          );
        })}
      </ul>
      <div>
        <button
          type="button"
          onClick={handleCancle}
        >
          취소

        </button>
        <button
          type="button"
          onClick={handleOrder}
        >
          주문하기

        </button>
      </div>
      <br />
    </>
  );
}
