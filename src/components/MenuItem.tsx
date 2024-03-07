import { HTMLAttributes } from 'react';

import { moneyformat } from '../utils/common';

import Food from '../types/FoodType';

type MenuItemProps = {
  menuItem: Food;
} & HTMLAttributes<Element>;

export default function MenuItem({ menuItem, children }: MenuItemProps) {
  const { name, price } = menuItem;

  return (
    <li
      style={{
        display: 'flex',
        paddingBlock: '.5rem',
      }}
    >
      <span style={{ margin: '0 auto' }}>
        {name}
        <span>({moneyformat(price)}원)</span>
      </span>
      {children}
    </li>
  );
}
