import Menu from './Menu';
import Food from '../types/Food';
import useCartStore from '../hooks/useCartStore';
import OperationButtons from './OperationButtons';

export default function Cart() {
  const [{ menu }, store] = useCartStore();

  const handleClickRemove = (index: number) => {
    store.removeMenu(index);
  };

  const handleClickCancle = () => {
    store.clear();
  };

  const handleClickOrder = () => {
    store.clear();
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
              X
            </button>
          </Menu>
        ))}
      </ul>
      <p>
        주문 갯수:
        {' '}
        {menu.length}
        개
      </p>
      <p>
        예상 금액:
        {' '}
        {menu.reduce((acc, food) => acc + food.price, 0).toLocaleString()}
      </p>
      <OperationButtons
        handleClickCancle={handleClickCancle}
        handleClickOrder={handleClickOrder}
      />
    </div>
  );
}
