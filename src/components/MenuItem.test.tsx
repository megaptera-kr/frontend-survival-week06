import { screen, render } from '@testing-library/react';

import fixtures from '../../fixtures';

import MenuItem from './MenuItem';

describe('ComponentTest: MenuItem', () => {
  const { foods } = fixtures;
  const menuItem = foods[0];

  it('rendering correctly', () => {
    render(<MenuItem menuItem={menuItem} />);

    screen.getByText('짜장면');
    screen.getByText(/(8,000원)/);
  });

  it('rendering correctly with chilren', () => {
    render(
      <MenuItem menuItem={menuItem}>
        <button type='button'>선택</button>
      </MenuItem>,
    );

    screen.getByRole('button', { name: '선택' });
  });
});
