import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

const context = describe;

test('App', () => {
  render(<App />);
});
