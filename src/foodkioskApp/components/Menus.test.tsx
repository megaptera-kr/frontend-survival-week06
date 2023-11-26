import { screen, fireEvent, waitFor } from '@testing-library/react';

import { container } from 'tsyringe';

import useRender from '../../../tests/utils';

import Menus from './Menus';

import Cart from './Cart';

import FetchController from './FetchController';

describe('Menus Render', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  it('renders tableHead and restaurants', async () => {
    useRender(
      <>
        <Menus />
        <FetchController />
      </>,
    );

    const head = ['식당 이름', '종류', '메뉴'];

    head.forEach((ele) => screen.getByText(ele));

    await waitFor(() => {
      const textList = [/짬뽕/, /기본카레/, /제육김밥/, /짜장면/];

      textList.forEach((text) => {
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    });
  });
});

describe('Menu Click Event', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  it('calls addMenu when a menu is clicked', async () => {
    useRender(
      <>
        <Cart title='점심 바구니' />
        <Menus />
        <FetchController />
      </>,
    );

    await waitFor(() => {
      const menuButton = screen.getByRole('button', { name: '짬뽕' });
      fireEvent.click(menuButton);
      fireEvent.click(menuButton);
    });

    await screen.findByText(/주문내역 2개/, {});
  });
});
