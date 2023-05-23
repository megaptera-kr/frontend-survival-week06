import Menu from './Menu';
import Food from '../types/Food';
import useCartStore from '../hooks/useCartStore';

export default function Cart() {
  const [{ menu }, store] = useCartStore();

  const handleClickRemove = (index: number) => {
    store.removeMenu(index);
  };

  return (
    <div>
      <h2>점심 바구니</h2>
      <ul>
        {menu.map((food: Food, index: number) => (
          <Menu
            key={food.id}
            food={food}
          >
            <button
              type="button"
              onClick={() => handleClickRemove(index)}
            >
              취소

            </button>
          </Menu>
        ))}
      </ul>
    </div>
  );
}
