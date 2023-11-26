import { singleton } from 'tsyringe';
import { Store, Action } from 'usestore-ts';
import { MenuInterface } from '../components/Restaurants/Restaurants.interface';

@singleton()
@Store()
class CartStore {
  cart : MenuInterface[] = [];

  totalPrice = 0;

  @Action()
  addCart(menu : MenuInterface) {
    if (menu) {
      this.cart.push(menu);
      this.totalPrice = this.getTotalPrice();
    }
  }

  @Action()
  deleteCartMenu(cartIdx : number) {
    const containMenu = this.cart.filter((menu, menuIdx) => menuIdx !== cartIdx);
    this.cart = [...containMenu];
    this.totalPrice = this.getTotalPrice();
  }

  @Action()
  clearCart() {
    this.cart = [];
    this.totalPrice = 0;
  }

  getTotalPrice() {
    return this.cart.reduce((acc, cur) => cur.price + acc, 0);
  }
}

export default CartStore;
