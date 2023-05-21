import useCartStore from '../hooks/useCartStore';
import CartList from './CartList';
import Button from './atoms/button/Button';

export default function Cart() {
  const [, cartStore] = useCartStore();
  const { snapshot } = cartStore;

  const handleCancel = () => {
    cartStore.clearAllItems();
  };

  const handleSubmit = () => {
    cartStore.clearAllItems();
  };
  return (
    <div style={{ marginLeft: '3rem' }}>
      <h3>{`메가 장바구니(주문내역${cartStore.items.length}개)`}</h3>
      <CartList />
      <p>{`총 합계: ${snapshot.totalPrice.toLocaleString('ko-kr')}원`}</p>
      <Button
        onClick={handleSubmit}
      >
        주문하기
      </Button>
      <Button
        onClick={handleCancel}
      >
        취소
      </Button>
    </div>
  );
}
