import { waitFor, screen } from '@testing-library/react';

import App from './App';

import useRender from '../tests/utils';

describe('Menu Filtering Scenario', () => {
  beforeEach(() => {
    useRender(<App />);
  });

  it('render FoodKiosk', async () => {
    await waitFor(() => {
      screen.getByText(/푸드코트 키오스크/);
    });
  });
});
