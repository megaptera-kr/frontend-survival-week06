import MenuItem from './MenuItem';

import type Food from '../types/Food';

type CartItemType = {
  item: Food;
  index: number;
  onClickCancel: (index: number) => void;
}

export default function CartItem({ item, index, onClickCancel }: CartItemType) {
  return (
    <MenuItem food={item}>
      <button
        style={{ marginLeft: '.5rem' }}
        name={`#${item.name}`}
        type="button"
        onClick={() => onClickCancel(index)}
      >
        취소
      </button>
    </MenuItem>
  );
}
