import { render, screen } from '@testing-library/react';
import Summary from './Summary';
import fixtures from '../../fixtures';

describe('Summary', () => {
  const selectedMenu = fixtures.foods;

  it('renders Summary', () => {
    render((
      <Summary selectedMenu={selectedMenu} />
    ));

    screen.getByText(/주문내역/);
    screen.getByText(/2개/);
    screen.getByText(/13,000/);
  });
});
