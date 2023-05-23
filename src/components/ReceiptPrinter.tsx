import useStore from '../hooks/useStore';
import Receipt from './Receipt';

export default function ReceiptPrinter() {
  const store = useStore();
  return (
    <div>
      {
        store.state.receipt ? <Receipt /> : (
          <div>
            [
            영수증 나오는 곳
            ]
          </div>
        )
      }
    </div>
  );
}
