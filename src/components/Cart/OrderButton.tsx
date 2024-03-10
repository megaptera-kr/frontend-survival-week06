import useCart from '../../hooks/useCart';

export default function OrderButton() {
  const { handleOrderInCart } = useCart();

  return (
    <button type="button" onClick={() => handleOrderInCart()}>
      주문하기
    </button>
  );
}
