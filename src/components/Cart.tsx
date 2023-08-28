import useCartStore from '../hooks/useCartStore';

import CartItem from './CartItem';
import OperationButtons from './OperationButtons';
import Summary from './Summary';

export default function Cart() {
  const store = useCartStore();

  const handleClickRemove = (idx:number) => {
    store.deleteCart(idx);
    store.update();
  };

  const handleClickOrder = () => {
    if (!store.cart) return;
    store.cart = [];
    store.update();
  };

  const handleClickCancel = () => {
    store.cart = [];
    store.update();
  };

  return (
    <div>
      <Summary cart={store.cart} />
      <ul>
        {store.cart.map((food, idx) => {
          const key = `${food.id}-${idx}`;
          return (
            <CartItem
              key={key}
              food={food}
              index={idx}
              handleClickCancel={() => handleClickRemove(idx)}
            />
          );
        })}
      </ul>
      <OperationButtons
        onClickCancel={handleClickCancel}
        onClickOrder={handleClickOrder}
      />
    </div>
  );
}
