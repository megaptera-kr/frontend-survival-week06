import MenuListItem from './MenuListItem';

import useBasketStore from '../hooks/useBasketStore';

import { Menu } from '../types/restaurant';
import BasketButton from './BasketButton';

type MenuListProps = {
  menuList: Menu[];
};

export default function MenuList({ menuList }: MenuListProps) {
  const [, store] = useBasketStore();

  if (!menuList.length) {
    return <p>메뉴가 존재하지 않습니다</p>;
  }

  return (
    <ul>
      {menuList.map((menu) => (
        <MenuListItem key={menu.id} menu={menu}>
          <BasketButton
            name={menu.name}
            text="선택"
            onClick={() => store.addMenu(menu)}
          />
        </MenuListItem>
      ))}
    </ul>
  );
}
