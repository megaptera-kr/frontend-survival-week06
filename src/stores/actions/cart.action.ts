import type { Menu } from '../../types/restaurants';

export function addItem(menu: Menu) {
  return {
    type: 'addItem',
    payload: menu,
  };
}

export function removeItem(index: number) {
  return {
    type: 'removeItem',
    payload: index,
  };
}

export function clearItem() {
  return {
    type: 'clearItem',
  };
}
