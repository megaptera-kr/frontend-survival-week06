import useCartStore from '../../hooks/useCartStore';

export default function CancelButton() {
  const [, store] = useCartStore();

  return (
    <button
      type="button"
      style={{ marginLeft: '10px' }}
      onClick={() => store.clearOrder()}
    >
      취소
    </button>
  );
}
