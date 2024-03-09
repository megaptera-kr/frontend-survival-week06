import CartItemModel from '../models/CartItemModel';

import OrderAPI from '../apis/order.api';
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
  const handleClick = async () => {
    const response: ReceiptType = await api.create({ cartItems, totalPrice });
  };

  return (
    <button type='button' value={totalPrice} onClick={handleClick}>
      합계: {moneyformat(totalPrice)}원 주문
    </button>
  );
}
