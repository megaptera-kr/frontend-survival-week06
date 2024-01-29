import { render, screen, waitFor } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('render restaurant', () => {
    render(<App />);

    waitFor(() => {
      screen.getByText(/메가반점/);
      screen.getByText(/메리분식/);
    });
  });
});
