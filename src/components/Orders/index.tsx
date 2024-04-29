import { MouseEvent } from 'react';
import { useLocalStorage, useReadLocalStorage } from 'usehooks-ts';
import { OrdersType } from '../../types/ordersType';
import convertKRW from '../../utils/convertKRW/convertKRW';

function Orders() {
  const [orders, setOrders] = useLocalStorage<OrdersType>(
    'orders',
    useReadLocalStorage('orders') ?? { menu: [], totalPrice: 0 },
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
  return (
    <div>
      <h2>점심 바구니</h2>
      <ul style={{ listStyle: 'none' }}>
        {orders?.menu.map((food) => (
          <li key={food.id}>
            <span>
              {food.name}
              (
              {convertKRW(food.price)}
              )
            </span>
            <button
              type="button"
              data-id={food.id}
              name={`${food.name}.${food.price}`}
              onClick={removeOrder}
            >
              취소
            </button>
          </li>
        ))}
      </ul>
      <button type="button">
        {`합계: ${convertKRW(orders.totalPrice)} 주문`}
      </button>
    </div>
  );
}

export default Orders;
