import { render, screen } from '@testing-library/react';

import Cart from './Cart';

describe('<Cart />', () => {
  it('render cart', () => {
    render(<Cart />);

    screen.getByText(/주문내역/);
    screen.getByText(/총 합계/);

    screen.getByRole('button', { name: '주문하기' });
  });
});
