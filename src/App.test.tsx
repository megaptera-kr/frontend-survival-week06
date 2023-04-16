import { render, screen, fireEvent } from '@testing-library/react';

import App from './App';

const context = describe;

test('App', () => {
  render(<App />);
});

describe('App', () => {
  context('when press increase button twice', () => {
    test('counter', () => {
      render(<App />);

      //fireEvent.click(screen.getByText('Increase'));


      expect(screen.getAllByText('푸드코트 키오스크')).toHaveLength(1);
    });
  });
});
