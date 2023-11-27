import { waitFor, screen } from '@testing-library/react';

import App from './App';

import useRender from '../tests/utils';

describe('App ', () => {
  it('renders restaurants', async () => {
    useRender(<App />);

    await waitFor(() => {
      screen.getByText(/메가반점/);
      screen.getByText(/메리김밥/);
    });
  });
});
