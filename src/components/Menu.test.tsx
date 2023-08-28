import { render, screen } from '@testing-library/react';

import fixtures from '../../fixtures';
import Menu from './Menu';

const context = describe;

describe('Menu', () => {
  context('with menu', () => {
    const menu = fixtures.foods;

    it('renders foods list', () => {
      render(<Menu menu={menu} />);

      screen.getByText(/짜장면/);
      screen.getByText(/짬뽕/);
    });
  });
});
