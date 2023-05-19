import {
  act, render, renderHook, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { container } from 'tsyringe';
import fixtures from '../../../fixtures';
import useCartStore from '../../hooks/useCartStore';
import OrderButton from './OrderButton';

const context = describe;

describe('OrderButton', () => {
  beforeEach(() => {
    container.clearInstances();
  });
  function renderOrderButton() {
    render(<OrderButton />);
  }
  context('렌더링 되면', () => {
    it('주문하기 버튼이 화면에 출력된다', () => {
      renderOrderButton();

      expect(screen.getByRole('button', { name: '주문하기' })).toBeInTheDocument();
    });
  });
  context('선택된 아이템 2개가 추가된 상태에서 주문하기 버튼을 클릭하면', () => {
    it('카트 아이템 개수가 0이 된다.', async () => {
      const { result } = renderHook(() => useCartStore());
      renderHook(() => result.current[1].addMenu(fixtures.foods[0]));
      renderHook(() => result.current[1].addMenu(fixtures.foods[0]));

      renderOrderButton();

      const button = screen.getByRole('button', { name: '주문하기' });

      act(() => {
        userEvent.click(button);
      });

      await waitFor(() => {
        expect(result.current[0].cart.length).toEqual(0);
      });
    });
  });
});
