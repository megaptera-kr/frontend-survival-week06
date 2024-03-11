/* eslint-disable comma-dangle */
import { render, screen } from '@testing-library/react';

import MenuItem from './MenuItem';

import foods from '../../fixtures/foods';

describe('MenuItem', () => {
  it('renders food information', () => {
    render(<MenuItem food={foods[0]} />);

    screen.getByText('짜장면(8,000원)');
  });

  it('renders children', () => {
    render(
      <MenuItem food={foods[1]}>
        <button type="button">담기</button>
      </MenuItem>
    );

    screen.getByText('담기');
  });
});
