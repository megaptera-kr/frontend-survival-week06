import { FormEvent, MouseEvent } from 'react';
import useCartStore from '../../hooks/useCartStore';
import { OrdersType } from '../../types/ordersType';
import convertKRW from '../../utils/convertKRW/convertKRW';

export const initOrders: OrdersType = { menu: [], totalPrice: 0 };

function Orders() {
  const [{ cart }, cartStores] = useCartStore();

  const removeOrder = (event:MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget.dataset;

    if (!id) { return; }
    cartStores.removeCart(id);
  };

  const submitOrders = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cartStores.clearCart();
  };

  const cancelOrders = () => {
    cartStores.clearCart();
  };

  // console.log('====cartState: ', cartState);
  return (
    <div>
      <h2>
        주문내역
        {cart.menu.length}
        개
      </h2>
      <p>{`총 결제 예상 금액 ${convertKRW(cart.totalPrice)}`}</p>
      <ul style={{ listStyle: 'none' }}>
        {cart.menu.map((food) => (
          <li key={food.id}>
            <span>
              {food.name}
              {convertKRW(food.price)}
            </span>
            <button
              type="button"
              data-id={food.id}
              name={`${food.name}.${food.price}`}
              onClick={removeOrder}
            >
              X
            </button>
          </li>
        ))}
      </ul>
      <form onSubmit={submitOrders}>
        <button type="submit">
          주문하기
        </button>
      </form>

      <button type="button" onClick={cancelOrders}>
        취소
      </button>
    </div>
  );
}

export default Orders;
