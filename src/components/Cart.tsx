import useCartStore from '../hooks/useCartStore';

export default function Cart() {
  const [{ cart }, store] = useCartStore();
  return (
    <div>
      <h2>점심 바구니</h2>
      <ul>
        {cart.map((item, idx) => (
          <li key={Math.random()}>
            {item.name}
            <button
              type="button"
              onClick={() => {
                store.removeCartItem(idx);
              }}
            >
              취소
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
