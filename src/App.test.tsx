import { render, screen, waitFor } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('renders app', async () => {
    render(<App />);

    screen.getByText(/키오스크/);

    screen.getByRole('button', { name: '주문하기' });
    screen.getByRole('button', { name: '취소' });

    screen.getByLabelText(/검색/);

    screen.getByRole('button', { name: '전체' });

    await waitFor(() => {
      expect(screen.getByRole('button', { name: /Category-01/ })).toBeInTheDocument();

      screen.getByText(/Restaurant-01/);
      screen.getByText(/Menu-03/);
    });
  });
});
