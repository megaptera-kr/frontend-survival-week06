import { fireEvent, screen, waitFor } from '@testing-library/react';

import { container } from 'tsyringe';
import useRender from '../../../tests/utils';

import Order from './Order';

import Cart from './Cart';

import Menus from './Menus';

import FetchController from './FetchController';

describe('Receipt Render', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  it('render 영수증이 존재하지 않을때', () => {
    useRender(<Order />);

    const text = screen.getByText(/영수증 나오는 곳/);

    expect(text).toBeInTheDocument();
  });
});

describe('Receipt Render', () => {
  beforeEach(() => {
    container.clearInstances();
    jest.clearAllMocks();
  });

  it('render 영수증이 존재할때', async () => {
    useRender(
      <>
        <Order />
        <Cart title='점심 바구니' />
        <Menus />
        <FetchController />
      </>
    );

    await waitFor(() => {
      const menu1 = screen.getByRole('button', { name: '짬뽕' });
      const menu2 = screen.getByRole('button', { name: '갈비탕' });
      const menu3 = screen.getByRole('button', { name: '돈까스' });
      const menu4 = screen.getByRole('button', { name: '기본초밥' });
      const menu5 = screen.getByRole('button', { name: '밥추가' });
      fireEvent.click(menu1);
      fireEvent.click(menu2);
      fireEvent.click(menu3);
      fireEvent.click(menu4);
      fireEvent.click(menu5);
    });

    await screen.findByText(/주문내역 5개/);
    await screen.findByText(/47,000원/);

    await waitFor(() => {
      const orderButton = screen.getByRole('button', {
        name: '메뉴를 선택해주세요.',
      });
      fireEvent.click(orderButton);
    });
  });
});
