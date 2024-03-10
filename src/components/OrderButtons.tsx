import useCartStore from '../hooks/useCartStore';

export default function OrderButtons() {
  const store = useCartStore();

  const removeItems = () => {
    // TODO: CartStore 얻기
    store.removeAllItems();
  };

  return (
    <div>
      <button type="button" onClick={() => removeItems()}>
        취소
      </button>
      <button type="button">주문하기</button>
    </div>
  );
}
