import CancelButton from './CancelButton';
import OrderButton from './OrderButton';

export default function OrderButtonContainer() {
  return (
    <div className="w-full flex gap-2">
      <OrderButton />
      <CancelButton />
    </div>
  );
}
