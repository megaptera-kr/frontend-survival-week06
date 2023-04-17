import CartItem from './CartItem';
import OrderButton from './OrderButton';
import useCreateOrder from '../../hooks/useCreateOrder';
import { ReceiptType } from '../../types/receipt';
import useCartStore from '../../hooks/useCartStore';

interface ShoppingBasketProps {
  setReceipt: (menus: ReceiptType) => void;
}

export default function ShoppingBasket({ setReceipt }: ShoppingBasketProps) {
  const [{ menus }, store] = useCartStore();
  const createOrder = useCreateOrder();
  const handleCancel = (index: number) => {
    store.subtract(index);
  };

  const handleOrder = async () => {
    if (!menus.length) {
      return;
    }
    const receipt = await createOrder(menus);

    setReceipt(receipt);
    store.reset();
  };

  return (
    <div style={{ marginBottom: '3rem' }}>
      <h2>점심 바구니</h2>
      <ul style={{ width: '20%' }}>
        {menus.map((menu, index) => (
          <CartItem
            key={menu.id}
            index={index}
            menu={menu}
            handleClick={handleCancel}
          />
        ))}
      </ul>
      <OrderButton foods={menus} onClick={handleOrder} />
    </div>
  );
}
