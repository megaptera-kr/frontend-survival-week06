import Cart from './Cart';
import OrderContainer from './OrderContainer';

export default function CartContainer() {
  return (
    <div className="w-full flex flex-col items-center">
      <h1 className="font-bold text-2xl">점심 바구니</h1>
      <Cart />
      <OrderContainer />
    </div>
  );
}
