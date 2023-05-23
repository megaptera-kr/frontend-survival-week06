type OperationButtonsProps = {
    handleClickCancle: () => void;
    handleClickOrder: () => void
}

export default function OperationButtons({
  handleClickCancle,
  handleClickOrder,
}: OperationButtonsProps) {
  return (
    <>
      <button
        type="button"
        onClick={handleClickCancle}
      >
        취소
      </button>
      <button
        type="button"
        onClick={handleClickOrder}
      >
        주문하기
      </button>
    </>
  );
}
