import { waitFor, fireEvent, screen } from '@testing-library/react';

import { container } from 'tsyringe';

import useRender from '../utils';

import context from '../../src/foodkioskApp/utils/test_config';

import Cart from '../../src/foodkioskApp/components/Cart';

import Menus from '../../src/foodkioskApp/components/Menus';

import Order from '../../src/foodkioskApp/components/Order';

import FetchController from '../../src/foodkioskApp/components/FetchController';

describe('음식담기', () => {
  context('매뉴를 클릭했을때', () => {
    beforeEach(() => {
      container.clearInstances();
    });

    it('두개의 메뉴가 담겨야한다.', async () => {
      useRender(
        <>
          <Cart title='점심 바구니' />
          <Menus />
          <FetchController />
        </>
      );

      await waitFor(() => {
        const menuButton = screen.getByRole('button', { name: '짬뽕' });
        fireEvent.click(menuButton);
        fireEvent.click(menuButton);
      });

      await screen.findByText(/주문내역 2개/, {});
    });
  });
});

describe('메뉴 취소', () => {
  context('음식을 담고 전체를 취소하면', () => {
    beforeEach(() => {
      container.clearInstances();
    });

    it('초기상태로 돌아간다.', async () => {
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
      });

      await waitFor(() => {
        const firstCancel = screen.getAllByText('취소');

        fireEvent.click(firstCancel[0]);

        const secondCancel = screen.getAllByText('취소');

        fireEvent.click(secondCancel[0]);
      });

      await screen.findByText(/주문내역 3개/);
    });
  });
});

describe('전체취소', () => {
  context('음식을 담고 전체를 취소하면', () => {
    beforeEach(() => {
      container.clearInstances();
    });

    it('초기상태로 돌아간다.', async () => {
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

        const button = screen.getByRole('button', { name: '전체 취소' });

        fireEvent.click(button);
      });

      await screen.findByText(/주문내역 0개/);
    });
  });
});
