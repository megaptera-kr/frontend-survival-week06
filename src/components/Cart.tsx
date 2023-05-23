import OrderButtonField from './OrderButtonField';
import Menu from '../types/Menu';
import calculateTotalPrice from '../utils/calculateTotalPrice';
import usePostReceipt from '../hooks/usePostReceipt';

interface CartProps {
    cart: Menu[];
    setCart: any;
    setReceipt: any;
    onDeleteCart: (index: number) => void;
}

export default function Cart({
  cart, setCart, setReceipt, onDeleteCart,
}: CartProps) {
  const { createOrder } = usePostReceipt();

  const totalPrice = calculateTotalPrice(cart);

  const handleClickOrder = async () => {
    if (cart.length > 0) {
      const { receipt } = await createOrder({ menu: cart, totalPrice });
      setReceipt(receipt);
      setCart([]);
    }
  };

  return (
    <div style={{ marginBottom: 50 }}>
      {
        cart.length > 0
          ? (
            <ul style={{ listStyle: 'none', padding: 20 }}>
              {cart.map((cartItem, index) => {
                const key = `${cartItem.id}-${index}`;
                return (
                  <li
                    key={key}
                    style={{
                      width: 250,
                      display: 'flex',
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginBottom: 10,
                    }}
                  >
                    {cartItem.name}
                    (
                    {(cartItem.price).toLocaleString('ko-kr')}
                    원)
                    <button
                      type="button"
                      style={{ marginLeft: 10 }}
                      onClick={() => onDeleteCart(index)}
                    >
                      취소
                    </button>
                  </li>
                );
              })}
            </ul>
          )
          : (
            <div
              style={{ padding: 5, paddingBottom: 20 }}
            >
              점심 바구니가 비어있어요.
            </div>
          )
      }
      <OrderButtonField
        totalPrice={totalPrice}
        onClickOrder={handleClickOrder}
      />
    </div>
  );
}
