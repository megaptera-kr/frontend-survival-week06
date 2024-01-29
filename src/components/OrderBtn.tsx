type OrderBtnProps = {
    clearMenu: () => void
    orderMenu: () => void
}
export default function OrderBtn({ clearMenu, orderMenu }:OrderBtnProps) {
  return (
    <div>
      <button type="button" onClick={clearMenu}>
        취소
      </button>
      <button type="button" onClick={orderMenu}>주문하기</button>
    </div>
  );
}
