import { render, screen } from '@testing-library/react';
import OrderButtonContainer from './OrderButtonContainer';

const context = describe;

describe('OrderButtonContainer', () => {
  function renderOrderButtonContainer() {
    render(<OrderButtonContainer />);
  }
  context('랜더링 되면', () => {
    it('주문하기, 취소하기 버튼이 화면에 출력된다.', () => {
      renderOrderButtonContainer();

      expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '취소하기' })).toBeInTheDocument();
    });
  });
});
