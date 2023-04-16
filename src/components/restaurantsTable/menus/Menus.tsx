import useCartStore from '../../../hooks/useCartStore';
import { Food } from '../../../types/food';

interface MenusProps {
  menus: Food[]
}

export default function Menus({ menus }: MenusProps) {
  const { addCartItem } = useCartStore();

  const handleAddCart = (food: Food) => () => {
    addCartItem(food);
  };
  return (
    <ul>
      {menus.map((menu) => (
        <li key={menu.id}>
          <span>{menu.name}</span>
          <span>{menu.price}</span>
          <button type="button" aria-label={`${menu.name} 추가`} onClick={handleAddCart(menu)}>장바구니 추가</button>
        </li>
      ))}
    </ul>
  );
}
