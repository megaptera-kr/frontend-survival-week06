import { Menu } from '../types/restaurant';
import AddBasketButton from './AddBasketButton';
import MenuListItem from './MenuListItem';

type MenuListProps = {
  menuList: Menu[];
};

export default function MenuList({ menuList }: MenuListProps) {
  if (!menuList.length) {
    return <p>메뉴가 존재하지 않습니다</p>;
  }

  return (
    <ul>
      {menuList.map((menu) => (
        <MenuListItem key={menu.id} menu={menu}>
          <AddBasketButton
            name={`#${menu.name}`}
            title="선택"
            onClick={() => console.log(menu)}
          />
        </MenuListItem>
      ))}
    </ul>
  );
}
