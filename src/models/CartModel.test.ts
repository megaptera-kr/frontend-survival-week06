import CartModel, { getMaxId } from './CartModel';

import CartItemModel from './CartItemModel';

import fixtures from '../../fixtures';

import Food from '../types/FoodType';

const context = describe;

describe('CartModel', () => {
  let cartModel: CartModel;
  const { foods } = fixtures;
  const theFirstFoodElement: Food = foods[0];

  beforeEach(() => {
    cartModel = new CartModel();
  });

  context('CartModel이 최초 생성되었을 때, ', () => {
    context('생성자에 items의 값이 주어지지 않았을 때, ', () => {
      it('items 배열의 길이는 0이고 [] 과 같다.', () => {
        expect(cartModel.items).toHaveLength(0);
        expect(cartModel.items).toEqual([]);
      });

      it('CartModel의 totalPrice는 0이다.', () => {
        expect(cartModel.totalPrice).toBe(0);
      });
    });

    context('생성자에 items의 값이 주어졌을 때, ', () => {
      it('items 배열의 길이는 0보다 크고 [] 가 아니다.', () => {
        const cartitem: CartItemModel = new CartItemModel({
          id: 1,
          food: theFirstFoodElement,
        });
        cartModel = new CartModel([cartitem]);

        expect(cartModel.items).toHaveLength(1);
        expect(cartModel.items).not.toEqual([]);
      });

      it('CartModel의 totalPrice는 선택한 아이템의 총 합이다.', () => {
        const cartitem: CartItemModel = new CartItemModel({
          id: 1,
          food: theFirstFoodElement,
        });
        cartModel = new CartModel([cartitem]);

        expect(cartModel.totalPrice).toBe(theFirstFoodElement.price);
      });
    });
  });

  context('getMaxId 메서드는, ', () => {
    context('CartModel 의 items 배열의 길이가 0일 때, ', () => {
      it('0 을 리턴한다.', () => {
        expect(getMaxId(cartModel.items)).toBe(0);
      });
    });

    context('CartModel 의 items 배열의 길이가 1일 때, ', () => {
      it('1 을 리턴한다.', () => {
        cartModel = cartModel.addItem({
          ...theFirstFoodElement,
        });
        expect(getMaxId(cartModel.items)).toBe(1);
      });
    });
  });

  context('CartModel addItem 메서드를 사용하여, ', () => {
    context('item을 1개 추가했을 때, ', () => {
      it('CartModel 의 items 배열의 길이는 1이다.', () => {
        cartModel = cartModel.addItem({
          ...theFirstFoodElement,
        });

        expect(cartModel.items).toHaveLength(1);
        expect(getMaxId(cartModel.items)).toBe(1);
      });
    });

    context('item을 2개 추가했을 때, ', () => {
      it('CartModel 의 items 배열의 길이는 2이다.', () => {
        cartModel = cartModel.addItem({
          ...theFirstFoodElement,
        });
        cartModel = cartModel.addItem({
          ...theFirstFoodElement,
        });

        expect(cartModel.items).toHaveLength(2);
        expect(getMaxId(cartModel.items)).toBe(2);
      });
    });
  });

  context('CartModel removeItem 메서드를 사용하여', () => {
    context('items 가 빈 배열이고 특정 id 의 item 을 삭제한다면, ', () => {
      it('빈배열을 리턴한다.', () => {
        cartModel = cartModel.removeItem(1);
        expect(cartModel.items).toEqual([]);
      });
    });

    context(
      'items 배열의 길이가 2이고 아니고, id 1의 아이템을 삭제한다면, ',
      () => {
        it('items 배열의 길이는 1이고, 최대 id 값은 2이다.', () => {
          cartModel = cartModel.addItem({
            ...theFirstFoodElement,
          });
          cartModel = cartModel.addItem({
            ...theFirstFoodElement,
          });
          cartModel = cartModel.removeItem(1);

          expect(cartModel.items).toHaveLength(1);
          expect(getMaxId(cartModel.items)).toBe(2);
        });
      },
    );
  });

  context('CartModel removeAllItem 메서드를 사용하여, ', () => {
    context('빈 배열일 때 items를 삭제한다면, ', () => {
      it('빈배열을 리턴한다.', () => {
        cartModel = cartModel.clear();
        expect(cartModel.items).toHaveLength(0);
        expect(cartModel.items).toEqual([]);
      });
    });

    context('items 배열의 길이가 2이상의 배열을 삭제한다면, ', () => {
      it('빈배열을 리턴한다.', () => {
        cartModel = cartModel.addItem({
          ...theFirstFoodElement,
        });
        cartModel = cartModel.addItem({
          ...theFirstFoodElement,
        });

        cartModel = cartModel.clear();
        expect(cartModel.items).toHaveLength(0);
        expect(cartModel.items).toEqual([]);
      });
    });
  });

  context('CartModel calculateTotalPrice 메서드는, ', () => {
    context('빈 배열의 items에 대하여, ', () => {
      it('0을 리턴한다.', () => {
        expect(cartModel.totalPrice).toBe(0);
      });
    });

    context('빈배열이 아닌 items에 대하여, ', () => {
      it('각 아이템의 price 의 총합을 리턴한다. ', () => {
        foods.forEach((food: Food) => {
          cartModel = cartModel.addItem({
            ...food,
          });
        });

        expect(cartModel.totalPrice).toBe(13000);
      });
    });
  });
});
