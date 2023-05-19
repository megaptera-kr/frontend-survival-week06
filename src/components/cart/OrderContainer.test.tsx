import { render, screen } from '@testing-library/react';
import OrderContainer from './OrderContainer';

const context = describe;

describe('OrderContainer', () => {
  function renderOrderContainer() {
    render(<OrderContainer />);
  }
  context('랜더링 되면', () => {
    it('주문내역 0개, 0원, 주문하기 버튼, 취소하기 버튼이 화면에 출력된다.', () => {
      renderOrderContainer();

      expect(screen.getByText('주문내역 0개')).toBeInTheDocument();
      expect(screen.getByText('0원')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '취소하기' })).toBeInTheDocument();
    });
  });
});
