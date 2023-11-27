import { HTMLAttributes } from 'react';

import type Food from '../types/Food';

type MenuItemProps = {
  food: Food;
  onClick?: () => void;
} & HTMLAttributes<Element>;

export default function MenuItem({ food, onClick, children }: MenuItemProps) {
  const { name } = food;

  return (
    <li
      style={{
        display: 'flex',
        paddingBlock: '.5rem',
        cursor: 'pointer',
      }}
    >
      <button style={{ margin: '0 auto', border: 'none', background: 'none' }} onClick={onClick}>
        {name}
      </button>
      {children}
    </li>
  );
}
