import useCartStore from './useCartStore';
import useReceiptStore from './useReceiptStore';

import OrderAPI from '../apis/order.api';

import CartItemModel from '../models/CartItemModel';
import ReceiptType from '../types/ReceiptType';

type useOrderParamType = {
  cartItems: CartItemModel[];
  totalPrice: number;
};

const api = new OrderAPI();

function useOrder({ cartItems, totalPrice }: useOrderParamType) {
  const [, cartStore] = useCartStore();
  const [, receiptStore] = useReceiptStore();

  const handleClick = async () => {
    if (!cartItems.length || totalPrice <= 0) {
      return;
    }

    const receipt: ReceiptType = await api.create({ cartItems, totalPrice });
    if (receipt.id) {
      receiptStore.addItem(receipt);
      cartStore.clear();
    }
  };

  return [handleClick];
}

export default useOrder;
