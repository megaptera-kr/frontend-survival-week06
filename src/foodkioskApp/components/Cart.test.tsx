import { screen, fireEvent } from '@testing-library/react';

import useRender from '../../../tests/utils';

import context from '../utils/test_config';

import foods from '../../../fixtures/foods';
import Cart from './Cart';
import { Food } from '../types';

const state: { addedFoods: Food[]; disabled: boolean; totalPrice: number } = {
  addedFoods: [],
  disabled: false,
  totalPrice: 0,
};

const deleteFood = jest.fn();
const resetFoods = jest.fn();
const orderMenus = jest.fn();

jest.mock('../hooks/useCart', () => () => ({
  ...state,
  deleteFood,
  resetFoods,
  orderMenus,
}));

describe('Categories Render', () => {
  context('view', () => {
    beforeEach(() => {
      state.addedFoods = [];
      state.disabled = true;
      state.totalPrice = 0;
    });

    it('empty case', () => {
      useRender(<Cart title='점심 바구니' />);

      const count = screen.getByText(/주문내역 0개/);

      expect(count).toBeInTheDocument();
    });
  });

  context('view', () => {
    beforeEach(() => {
      state.addedFoods = foods;
      state.disabled = false;
      state.totalPrice = 30000;
    });

    it('exist case', () => {
      useRender(<Cart title='점심 바구니' />);

      const count = screen.getByText(/주문내역 3개/);
      const price = screen.getByText(/30,000원/);

      expect(count).toBeInTheDocument();
      expect(price).toBeInTheDocument();
    });
  });

  context('deleteFood event', () => {
    beforeEach(() => {
      state.addedFoods = foods;
      state.disabled = false;
      state.totalPrice = 30000;
      deleteFood.mockClear();
    });

    it('calls event when a button is foodButton clicked', () => {
      useRender(<Cart title='점심 바구니' />);

      const button = screen.getByText('짜장면(8,000원)')
        .nextSibling as HTMLButtonElement;

      fireEvent.click(button);

      expect(deleteFood).toHaveBeenCalled();
    });
  });

  context('resetFoods event', () => {
    beforeEach(() => {
      state.addedFoods = foods;
      state.disabled = false;
      state.totalPrice = 30000;
      resetFoods.mockClear();
    });

    it('calls event when a button is cancelButton clicked', () => {
      useRender(<Cart title='점심 바구니' />);

      const button = screen.getByText('전체 취소');

      fireEvent.click(button);

      expect(resetFoods).toHaveBeenCalled();
    });
  });

  context('orderMenus event', () => {
    beforeEach(() => {
      state.addedFoods = foods;
      state.disabled = false;
      state.totalPrice = 30000;
      orderMenus.mockClear();
    });

    it('calls event when a button is orderButton clicked', () => {
      useRender(<Cart title='점심 바구니' />);

      const button = screen.getByText('주문하기');

      fireEvent.click(button);

      expect(orderMenus).toHaveBeenCalled();
    });
  });
});
