import { render, screen } from '@testing-library/react';

import Menu from './Menu';

import foods from '../../fixtures/foods';

import Food from '../types/Food';

const context = describe;

describe('Menu', () => {
  context('without menu', () => {
    const menu: Food[] = [];
    it('renders foods list', () => {
      render(<Menu menu={menu} />);

      expect(screen.getByText('메뉴가 존재하지 않습니다.'));
    });
  });

  context('with menu', () => {
    const menu = foods;
    it('renders foods list', () => {
      render(<Menu menu={menu} />);

      expect(screen.getByText('짜장면(8,000원)'));
      expect(screen.getByText('짬뽕(5,000원)'));
    });
  });
});
