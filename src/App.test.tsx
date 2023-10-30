import { render, screen, waitFor } from '@testing-library/react';

import App from './App';

describe('App', () => {
  it('renders app', async () => {
    render(<App />);

    await waitFor(() => {
      screen.getByText(/메가반점/);
      screen.getByText(/메리김밥/);
    });
  });
});
