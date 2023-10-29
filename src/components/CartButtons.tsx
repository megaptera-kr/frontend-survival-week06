type CartButtonsProps = {
  onClickAllCancel: () => void;
  onClickOrder: () => void;
};

export default function CartButtons({
  onClickAllCancel,
  onClickOrder,
}: CartButtonsProps) {
  return (
    <div>
      <button
        type="button"
        onClick={onClickAllCancel}
      >
        취소
      </button>
      <button
        type="button"
        onClick={onClickOrder}
      >
        주문하기
      </button>
    </div>
  );
}
