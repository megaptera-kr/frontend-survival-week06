import { postOrders } from '../../apis';
import { Menu } from '../../types/restaurant';
import toLocaleCurrency from '../../utils/format';
import useOrderStore from '../../hooks/useOrderStore';

export default function Cart() {
  const [{ cart }, store] = useOrderStore();
  const totalPrice = cart.reduce((prev, cur) => prev + cur.price, 0);

  const handleClickRemoveMenu = (menu: Menu) => () => {
    store.setCart?.(cart.filter((cartMenu) => cartMenu.id !== menu.id));
  };

  const handleClickOrderMenu = async () => {
    const res = await postOrders({
      menu: cart,
      totalPrice,
    });

    store.setReceipt?.(res);
    store.setCart?.([]);

    setTimeout(() => { store.setReceipt?.(null); }, 8000);
  };

  return (
    <div>
      <h2>점심 바구니</h2>
      <ul>
        {cart?.map((menu) => (
          <li key={menu.id}>
            {menu.name}
            (
            {toLocaleCurrency(menu.price)}
            원)
            <button type="button" onClick={handleClickRemoveMenu(menu)}>취소</button>
          </li>
        ))}
      </ul>
      <button type="button" onClick={handleClickOrderMenu}>
        합계:
        {' '}
        {toLocaleCurrency(totalPrice)}
        원 주문
      </button>
    </div>
  );
}
