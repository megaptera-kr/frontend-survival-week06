import { render, screen, waitFor } from '@testing-library/react';

import App from './App';

describe('<App />', () => {
  it('Render without errors', async () => {
    render(<App />);

    screen.getByText('메가테라 푸드코트 키오스크');

    await waitFor(() => {
      screen.getByText(/메가반점/);
      screen.getByText(/메리김밥/);
    });
  });
});
