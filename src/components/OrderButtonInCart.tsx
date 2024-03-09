import CartItemModel from '../models/CartItemModel';

import OrderAPI from '../apis/order.api';

import useCartStore from '../hooks/useCartStore';
import useReceiptStore from '../hooks/useReceiptStore';

import { moneyformat } from '../utils/common';

import ReceiptType from '../types/ReceiptType';

type OrderButtonInCartProps = {
  cartItems: CartItemModel[];
  totalPrice: number;
};

const api = new OrderAPI();

export default function OrderButtonInCart({
  cartItems,
  totalPrice,
}: OrderButtonInCartProps) {
  // TODO: make useOrderHook
  const [, cartStore] = useCartStore();
  const [, receiptStore] = useReceiptStore();

  const handleClick = async () => {
    if (cartItems.length === 0 || totalPrice === 0) {
      return;
    }

    const receipt: ReceiptType = await api.create({ cartItems, totalPrice });
    if (receipt.id) {
      cartStore.clear();
      receiptStore.addItem(receipt);
    }
  };

  return (
    <button type='button' value={totalPrice} onClick={handleClick}>
      합계: {moneyformat(totalPrice)}원 주문
    </button>
  );
}
