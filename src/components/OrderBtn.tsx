type OrderBtnProps = {
    clearMenu: () => void
}
export default function OrderBtn({ clearMenu }:OrderBtnProps) {
  return (
    <div>
      <button type="button" onClick={clearMenu}>
        취소
      </button>
      <button type="button">주문하기</button>
    </div>
  );
}
