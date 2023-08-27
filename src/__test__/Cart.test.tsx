import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';

describe('<Cart />', () => {
  it('Render without error', () => {
    render(<Cart />);
    screen.getByText('점심 바구니');
    screen.getByRole('button', { name: /주문/ });
    screen.getByRole('button', { name: '취소' });
    screen.getByText('1');
  });
});
