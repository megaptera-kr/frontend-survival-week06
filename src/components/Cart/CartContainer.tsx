import CancelButton from './CancelButton';
import OrderButton from './OrderButton';

import useCartStore from '../../hooks/useCartStore';
import CartMenus from './CartMenus';

export default function CartContainer() {
  const [{ cart }] = useCartStore();
  const totalPrice = cart.reduce((acc, cur) => acc + cur.price, 0);
  return (
    <div style={{ maxWidth: '400px', marginBottom: '50px' }}>
      <h2>
        점심 바구니
      </h2>
      <h3>
        주문내역
        {cart.length}
        개
      </h3>
      <h3>
        총 주문 금액:
        {totalPrice.toLocaleString()}
        원
      </h3>
      <CartMenus menus={cart} />
      <OrderButton />
      <CancelButton />
    </div>
  );
}
