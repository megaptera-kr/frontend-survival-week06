import useStore from '../hooks/useStore';
import CartItem from './CartItem';
import OrderBtn from './OrderBtn';
import OrderSummary from './OrderSummary';

export default function Cart() {
  const store = useStore();

  const handleRemoveMenu = (targetId: number) => {
    store.removeMenu(targetId);
  };

  const handleClearMenu = () => {
    store.clear();
  };
  return (
    <div>
      <OrderSummary selectedMenu={store.menu} />
      {store.menu.map((menu, index) => {
        const key = `${menu.id}-${index}`;
        return (
          <CartItem key={key} handleRemoveMenu={handleRemoveMenu} index={index} food={menu} />
        );
      })}
      <OrderBtn clearMenu={handleClearMenu} />
    </div>
  );
}
