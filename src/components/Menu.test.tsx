import { render, screen } from '@testing-library/react';

import fixtures from '../../fixtures';

import Menu from './Menu';

const { foods } = fixtures;

describe('<Menu />', () => {
  it('render menu items', () => {
    render(<Menu foods={foods} />);

    screen.getByRole('button', { name: /Menu-01/ });
    screen.getByRole('button', { name: /8,000원/ });
    screen.getByRole('button', { name: /Menu-02/ });
    screen.getByRole('button', { name: /10,000원/ });
  });
});
