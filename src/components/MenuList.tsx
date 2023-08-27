import type { Menu } from '../types/restaurants';

type MenuProps = {
  food: Menu
  onClickBtn: (item: Menu) => void;
}

function MenuList({ food, onClickBtn }: MenuProps) {
  return (
    <li style={{ marginBottom: '1rem' }}>
      <span>{`${food.name}(${food.price.toLocaleString()}원)`}</span>
      <button
        type="button"
        name={`#${food.name}`}
        style={{ float: 'right' }}
        onClick={() => onClickBtn(food)}
      >
        선택
      </button>
    </li>
  );
}

export default MenuList;
