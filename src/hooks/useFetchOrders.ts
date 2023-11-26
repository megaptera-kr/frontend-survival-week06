import { useStore } from 'usestore-ts';

import { useReceiptStorage } from './useStorage';
import createReceiptData from '../utils/createReceiptData';
import cartStore from '../stores/cartStore';
import ordersStore from '../stores/ordersStore';

const usePayment = () => {
  const { setReceipt } = useReceiptStorage();
  const [, order] = useStore(ordersStore);
  const [{ cartArray }, cart] = useStore(cartStore);

  const payment = async () => {
    try {
      const receipt = createReceiptData(cartArray);
      const response = await order.payment(receipt);

      cart.clearCart();

      response && setReceipt(response);
    } catch (error) {
      console.error(error);
    }
  };

  return payment;
};

export default usePayment;
