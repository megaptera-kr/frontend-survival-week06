import { screen } from '@testing-library/react';

import useRender from '../../../tests/utils';

import context from '../utils/test_config';

import Order from './Order';

import { Order as OrderType } from '../types';

import fixtures from '../../../fixtures';

const state: { order: Partial<OrderType>; isExistOrder: boolean } = {
  order: {},
  isExistOrder: false,
};

jest.mock('../hooks/useOrder', () => () => state);

describe('Order Render', () => {
  context('view', () => {
    beforeEach(() => {
      state.order = {};
      state.isExistOrder = false;
    });

    it('order empty case', () => {
      useRender(<Order />);

      const text = screen.getByText(/영수증 나오는 곳/);

      expect(text).toBeInTheDocument();
    });
  });

  context('view', () => {
    beforeEach(() => {
      state.order = fixtures.receipt;
      state.isExistOrder = true;
    });

    it('order exist case', () => {
      useRender(<Order />);

      const orderListTitle = screen.getByText(/주문목록/);
      const totalPrice = screen.getByText(/총 가격: 30,000원/);

      expect(orderListTitle).toBeInTheDocument();
      expect(totalPrice).toBeInTheDocument();
    });
  });
});
