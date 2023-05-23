import {
  act,
  render, renderHook, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { container } from 'tsyringe';
import fixtures from '../../../fixtures';
import useCartStore from '../../hooks/useCartStore';
import Cart from './Cart';

const context = describe;

describe('Cart', () => {
  beforeEach(() => {
    container.clearInstances();
  });
  function renderCart() {
    render(<Cart />);
  }
  context('선택된 아이템이 없이 렌더링 되면', () => {
    it('빈 화면이 출력된다', async () => {
      renderCart();
      await waitFor(() => {
        expect(screen.queryByText(/짜장면/)).not.toBeInTheDocument();
      });
    });
  });

  context('선택된 아이템 2개 있을 때 렌더링 되면', () => {
    beforeEach(() => {
      const { result } = renderHook(() => useCartStore());
      renderHook(() => result.current[1].addMenu(fixtures.foods[0]));
      renderHook(() => result.current[1].addMenu(fixtures.foods[0]));
    });
    it('짜장면이 2개 출력된다', async () => {
      renderCart();
      await waitFor(() => {
        expect(screen.getAllByText(/짜장면/)).toHaveLength(2);
      });
    });
  });

  context('선택된 아이템 2개가 있고 사용자가 취소 버튼을 클릭하면', () => {
    beforeEach(() => {
      const { result } = renderHook(() => useCartStore());
      renderHook(() => result.current[1].addMenu(fixtures.foods[0]));
      renderHook(() => result.current[1].addMenu(fixtures.foods[0]));
    });
    it('짜장면이 1개 출력된다', async () => {
      renderCart();

      await waitFor(() => {
        const button = screen.getByTestId('취소-0');
        act(() => {
          userEvent.click(button);
        });
      });

      await waitFor(() => {
        expect(screen.getAllByText(/짜장면/)).toHaveLength(1);
      });
    });
  });
});
