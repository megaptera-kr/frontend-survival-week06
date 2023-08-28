import {
  render, screen, fireEvent, waitFor,
} from '@testing-library/react';
import App from './App';

jest.mock('axios');

describe('<App />', () => {
  it('renders app and tests kiosk', async () => {
    render(<App />);

    screen.getByText(/메가테라/);
    screen.getByText(/점심 바구니/);
    screen.getByText(/주문내역/);

    screen.getByRole('button', { name: /주문/ });
    screen.getByRole('button', { name: '취소' });

    screen.getByLabelText(/검색/);

    screen.getByText(/영수증 나오는 곳/);

    await waitFor(() => {
      fireEvent.click(screen.getByRole('button', { name: '전체' }));
    });
  });
});
