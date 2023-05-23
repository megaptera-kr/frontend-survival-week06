interface OrderButtonFieldProps {
  totalPrice: number;
  onClickOrder: () => void;
}

export default function OrderButtonField({
  totalPrice,
  onClickOrder,
}: OrderButtonFieldProps) {
  return (
    <button
      type="button"
      name="orderReceipt"
      onClick={onClickOrder}
    >
      합계:
      {' '}
      {(totalPrice).toLocaleString('ko-kr')}
      원 주문
    </button>
  );
}
