import MenuListItem from './MenuListItem';

import useBasketStorage from '../hooks/useBasketStorage';

import { Menu } from '../types/restaurant';
import BasketButton from './BasketButton';

type MenuListProps = {
  menuList: Menu[];
};

export default function MenuList({ menuList }: MenuListProps) {
  const { addMenu } = useBasketStorage();

  if (!menuList.length) {
    return <p>메뉴가 존재하지 않습니다</p>;
  }

  return (
    <ul>
      {menuList.map((menu) => (
        <MenuListItem key={menu.id} menu={menu}>
          <BasketButton
            name={`#${menu.name}`}
            text="선택"
            onClick={() => addMenu(menu)}
          />
        </MenuListItem>
      ))}
    </ul>
  );
}
