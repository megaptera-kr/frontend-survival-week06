import CartItemModel from '../models/CartItemModel';

import { moneyformat } from '../utils/common';

import useOrder from '../hooks/useOrder';

type OrderButtonInCartProps = {
  cartItems: CartItemModel[];
  totalPrice: number;
};

export default function OrderButtonInCart({
  cartItems,
  totalPrice,
}: OrderButtonInCartProps) {
  const [handleClick] = useOrder({ cartItems, totalPrice });

  return (
    <button type='button' value={totalPrice} onClick={handleClick}>
      합계: {moneyformat(totalPrice)}원 주문
    </button>
  );
}
