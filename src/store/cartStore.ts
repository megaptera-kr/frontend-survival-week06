import { Store, Action, useStore } from 'usestore-ts';
import { Menu } from '../components/Restaurants/Restaurants.interface';

@Store()
class CartStore {
  cart : Menu[] = [];

  @Action()
  addCart(addMenuList : Menu[]) {
    const addMenues = [this.cart, ...addMenuList];
    if(addMenues.length > 1) {
      this.cart = [this.cart, ...addMenues];
    }
    // this.menu = [...addMenues];
  }

  deleteMenu(id : string) {
    const containMenu = this.menu.filter((menu : Menu) => menu.id !== id);
    this.cart = [...containMenu];
  }
}

export default CartStore;
