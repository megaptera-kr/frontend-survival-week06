import { singleton } from 'tsyringe';
import { Action, Store } from 'usestore-ts';
import { MenuType } from '../types/menu';
import { OrdersType } from '../types/ordersType';

const initCart: OrdersType = { menu: [], totalPrice: 0 };

@singleton()
@Store()
class CartStore {
  cart:OrdersType = initCart;

  @Action()
  addCart(food:MenuType) {
    this.cart = {
      ...this.cart,
      menu: [...this.cart.menu, food],
      totalPrice: this.cart.totalPrice + food.price,
    };
  }

  @Action()
  removeCart(id:string) {
    const filteredMenu = this.cart.menu.filter((food) => food.id !== id);
    const newTotalPrice = filteredMenu.reduce((acc, food) => acc + food.price, 0);

    this.cart = { ...this.cart, menu: filteredMenu, totalPrice: newTotalPrice };
  }

  @Action()
  clearCart() {
    this.cart = initCart;
  }
}

export default CartStore;
