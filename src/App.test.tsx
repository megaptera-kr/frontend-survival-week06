import {
  fireEvent, render, screen, waitFor,
} from '@testing-library/react';

import App from './App';

const context = describe;

test('App', () => {
  render(<App />);
});

describe('App', () => {
  context('when press increase button twice', () => {
    test('counter', () => {
      render(<App />);

      fireEvent.click(screen.getByText('Increase'));
      fireEvent.click(screen.getByText('Increase'));

      waitFor(() => {
        expect(screen.getAllByText('Count: 2')).toHaveLength(2);
      });
    });
  });
});
