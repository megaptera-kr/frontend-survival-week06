import CartUtils from './cartUtils/CartUtils';
import CartList from './cartList/CartList';

export default function Cart() {
  return (
    <article>
      <h2>장바구니</h2>
      <CartUtils />
      <CartList />
    </article>
  );
}
