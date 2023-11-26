import { fireEvent, screen, waitFor } from '@testing-library/react';

import { container } from 'tsyringe';

import useRender from '../utils';

import context from '../../src/foodkioskApp/utils/test_config';

import Order from '../../src/foodkioskApp/components/Order';

import Cart from '../../src/foodkioskApp/components/Cart';

import Menus from '../../src/foodkioskApp/components/Menus';

import FetchController from '../../src/foodkioskApp/components/FetchController';

jest.setTimeout(10000);

describe('주문하기', () => {
  context('음식을 담고 주문을 하면', () => {
    beforeEach(() => {
      container.clearInstances();
    });

    it('영수증이 보이고 7초안에 영수증이 사라지고 초기상태로 돌아간다.', async () => {
      useRender(
        <>
          <Order />
          <Cart title='점심 바구니' />
          <Menus />
          <FetchController />
        </>
      );

      await waitFor(() => {
        const foods = ['짬뽕', '갈비탕', '돈까스', '기본초밥', '밥추가'];

        foods.forEach((ele) => {
          const button = screen.getByRole('button', { name: ele });
          fireEvent.click(button);
        });

        screen.findByText(/주문내역 5개/);

        const button = screen.getByRole('button', { name: '주문하기' });

        fireEvent.click(button);
      });

      await waitFor(
        () => {
          expect(screen.getByText(/주문내역 0개/)).toBeInTheDocument();
          expect(screen.getByText(/주문목록/)).toBeInTheDocument();
        },
        { timeout: 1000 }
      );

      await waitFor(
        () => {
          expect(screen.getByText(/영수증 나오는 곳/)).toBeInTheDocument();
        },
        { timeout: 7000 }
      );
    });
  });
});
