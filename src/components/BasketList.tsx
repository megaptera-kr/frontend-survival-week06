import MenuListItem from './MenuListItem';

import { Menu } from '../types/restaurant';
import BasketButton from './BasketButton';

type BasketListProps = {
  basketList: Menu[];
  handleClickRemove: (index: number) => void;
}

export default function BasketList({ basketList, handleClickRemove }: BasketListProps) {
  return (
    <ul>
      {basketList.map((basketItem, index) => {
        const keyId = `${basketItem.id}-${index}`;
        return (
          <MenuListItem
            key={keyId}
            menu={basketItem}
          >
            <BasketButton
              name={basketItem.name}
              text="X"
              onClick={() => handleClickRemove(index)}
            />
          </MenuListItem>
        );
      })}
    </ul>
  );
}
