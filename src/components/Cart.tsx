import useCartStore from '../hooks/useCartStore';
import useCreateOrder from '../hooks/useCreateOrder';
import Receipt from '../types/Receipt';
import CartItem from './CartItem';
import OperationButtons from './OperationButtons';
import Summary from './Summary';

type CartProps = {
    setReceipt: (receipt: Receipt) => void;
}

export default function Cart({ setReceipt }: CartProps) {
  const store = useCartStore();

  const { createOrder } = useCreateOrder();

  const handleClickRemove = (idx:number) => {
    store.deleteCart(idx);
    store.update();
  };

  const handleClickOrder = async () => {
    if (!store.cart.length) return;
    const receipt = await createOrder(store.cart);
    setReceipt(receipt);
    store.cart = [];
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
