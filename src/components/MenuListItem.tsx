import { Menu } from '../types/restaurant';

import priceToLocal from '../utils/priceToLocal';

type MenuListItemProps = {
  menu: Menu;
} & React.PropsWithChildren<any>;

export default function MenuListItem({ menu, children }: MenuListItemProps) {
  return (
    <li
      style={{
        display: 'flex',
        paddingBlock: '0.5em',
      }}
    >
      <span>{`${menu.name}(${priceToLocal(menu.price)}원)`}</span>
      {children}
    </li>
  );
}
