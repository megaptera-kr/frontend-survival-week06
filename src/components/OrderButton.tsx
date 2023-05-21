import useDispatch from '../hooks/useDispatch';
import useFetchReceipt from '../hooks/useFetchReceipt';
import useFetchReceiptId from '../hooks/useFetchReciptId';
import { order, refreshCart, refreshReceipt } from '../stores/Stores';
import calcTotalPrice from '../utils/calcTotalPrice';
import getCartFood from '../utils/getCartFood';

export default function OrderButton() {
  const totalPrice = calcTotalPrice();
  const menu = getCartFood();

  const dispatch = useDispatch();
  const { getReceipt } = useFetchReceiptId();
  const { OrderedReceipt } = useFetchReceipt();

  async function handleClick() {
    const receiptID = await getReceipt({ totalPrice, menu });
    const receipt = await OrderedReceipt(receiptID.id);
    const item = JSON.stringify(receipt.order);
    dispatch(order(item));
    dispatch(refreshCart());

    setTimeout(() => {
      dispatch(refreshReceipt());
    }, 7000);
  }
  return (
    <div>
      <button type="button" onClick={handleClick}>
        {'합계: '}
        {totalPrice.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
        원 주문하기
      </button>
    </div>
  );
}
