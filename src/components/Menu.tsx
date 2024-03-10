import MenuItem from './MenuItem';

import Food from '../types/Food';

import useCartStore from '../hooks/useCartStore';

type MenuProps = {
  menu: Food[];
};

export default function Menu({ menu }: MenuProps) {
  const store = useCartStore();

  const AddItem = (food: Food) => {
    // TODO: CartStore 얻기
    store.addItem({ ...food, quantity: 1 });
  };

  if (!menu.length) {
    return <p>메뉴가 존재하지 않습니다.</p>;
  }

  return (
    <ul>
      {menu.map((food, index) => {
        const key = `${food.id}_${index}`;

        return (
          <MenuItem key={key} food={food}>
            <button type="button" onClick={() => AddItem(food)}>
              장바구니 담기
            </button>
          </MenuItem>
        );
      })}
    </ul>
  );
}
