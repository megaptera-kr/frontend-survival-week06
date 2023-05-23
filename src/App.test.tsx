import { render, screen } from '@testing-library/react';

import App from './App';

test('App', async () => {
  const { asFragment } = render(<App />);

  await screen.findByText('짜장면');

  expect(asFragment()).toMatchSnapshot();
});
