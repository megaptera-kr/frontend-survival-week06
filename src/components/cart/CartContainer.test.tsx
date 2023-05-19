import { render, screen } from '@testing-library/react';
import CartContainer from './CartContainer';

const context = describe;

describe('CartContainer', () => {
  function renderCartContainer() {
    render(<CartContainer />);
  }
  context('렌더링 되면', () => {
    it('점심 바구니 타이틀이 화면에 출력된다.', () => {
      renderCartContainer();

      expect(screen.getByText('점심 바구니')).toBeInTheDocument();
    });
  });
});
