import useCartStore from '../hooks/useCartStore';
import Summary from './Summary';
import CartItem from './CartItem';
import OperationButtons from './OperationButtons';

function Cart() {
  const [{ menu }, store] = useCartStore();
  const handleClickRemove = (index: number) => {
    store.removeMenu(index);
  };

  const handleClickCancel = () => {
    store.clear();
  };

  const handleClickOrder = async () => {
    if (!menu.length) {
      return;
    }
    store.clear();
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>점심 바구니</h2>
      <Summary selectedMenu={menu} />
      {!menu.length ? <p>주문메뉴가 존재하지 않습니다</p> : (
        <ul style={{ width: '20%' }}>
          {menu.map((food, index) => {
            const key = `${food.id}-${index}`;

            return (
              <CartItem
                key={key}
                index={index}
                food={food}
                handleClickRemove={handleClickRemove}
              />
            );
          })}
        </ul>
      )}

      <OperationButtons
        onClickCancel={handleClickCancel}
        onClickOrder={handleClickOrder}
      />
    </div>
  );
}

export default Cart;
