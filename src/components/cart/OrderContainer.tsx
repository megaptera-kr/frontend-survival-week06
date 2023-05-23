import OrderButtonContainer from './OrderButtonContainer';
import OrderInfo from './OrderInfo';

export default function OrderContainer() {
  return (
    <div className="w-full flex flex-col ">
      <OrderInfo />
      <OrderButtonContainer />
    </div>
  );
}
