interface CartButtonsProps {
    resetCart : () => void;
}

export default function CartButtons({ resetCart }
  : CartButtonsProps) {
  return (
    <>
      <button
        type="button"
        onClick={() => resetCart()}
      >
        주문하기
      </button>
      <button
        type="button"
        onClick={() => resetCart()}
      >
        취소
      </button>
    </>
  );
}
