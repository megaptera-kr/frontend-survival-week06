import { MenuType } from '../../types/menu';

function getTotalPrice(menu:MenuType[]) {
  return menu.reduce((acc:number, food) => acc + food.price, 0);
}

export default getTotalPrice;
