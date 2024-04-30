import { FormEvent, MouseEvent } from 'react';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import { OrdersType } from '../../types/ordersType';
import convertKRW from '../../utils/convertKRW/convertKRW';

export const initOrders: OrdersType = { menu: [], totalPrice: 0 };

function Orders() {
  const [orders, setOrders] = useLocalStorage<OrdersType>(
    'orders',
    useReadLocalStorage('orders') ?? initOrders,
  );

  const removeOrder = (event:MouseEvent<HTMLButtonElement>) => {
    const { id } = event.currentTarget.dataset;

    const filteredMenu = orders.menu.filter((food) => food.id !== id);
    const newTotalPrice = filteredMenu.reduce((acc:number, food) => acc + food.price, 0);

    setOrders((prev) => ({
      ...prev,
      menu: filteredMenu,
      totalPrice: newTotalPrice,
    }));
  };

  const submitOrders = (event:FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setOrders(initOrders);
  };

  const cancelOrders = () => {
    setOrders(initOrders);
  };

  return (
    <div>
      <h2>
        주문내역
        {orders?.menu.length}
        개
      </h2>
      <p>{`총 결제 예상 금액 ${convertKRW(orders.totalPrice)}`}</p>
      <ul style={{ listStyle: 'none' }}>
        {orders?.menu.map((food) => (
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
