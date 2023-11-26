import useCartStore from '../../hooks/useCartStore';

function Cart() {
  const [{ cart, totalPrice }, store] = useCartStore();
  return (
    <div className="cart">
      <h3>장바구니</h3>
      <ul>
        {cart.map((menu, menuIdx) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`cart_${menuIdx}`}>
            <span>
              메뉴명 :
              {' '}
              {menu.name}
            </span>
            <span>
              가격 :
              {' '}
              {menu.price}
            </span>
            <button type="button" data-testid={`cart_${menu.id}_${cart.length}`} onClick={() => store.deleteCartMenu(menuIdx)}>삭제</button>
          </li>
        ))}
      </ul>
      <p className="cart-footer">
        <span>
          주문내역
          {cart.length}
          개
        </span>
        <span className="price">
          총
          {' '}
          {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
          원
        </span>
      </p>
      {totalPrice > 0
      && (
        <>
          <button type="button" onClick={() => store.clearCart()}>취소</button>
          <button type="button" onClick={() => store.clearCart()}>주문하기</button>
        </>
      )}
    </div>
  );
}

export default Cart;
