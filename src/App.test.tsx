import { render, screen } from '@testing-library/react';
import App from './App';

const context = describe;

describe('App ', () => {
  function renderApp() {
    return render(<App />);
  }
  context('when component render', () => {
    // it('show restaurants table', () => {
    //   renderApp();

    // });

    it('show cart data', () => {
      renderApp();

      expect(screen.getByText(/메가 장바구니/)).toBeInTheDocument();
    });
  });
});
