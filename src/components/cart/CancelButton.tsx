import useCartStore from '../../hooks/useCartStore';

export default function CancelButton() {
  const [, store] = useCartStore();
  return (
    <button
      className="w-1/2 bg-blue-300 rounded-md py-2 px-4 mt-4"
      type="button"
      onClick={() => store.cancel()}
      name="취소하기"
    >
      취소하기
    </button>
  );
}
