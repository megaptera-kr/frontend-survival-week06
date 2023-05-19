import {
  render, renderHook, screen, waitFor,
} from '@testing-library/react';
import { container } from 'tsyringe';
import fixtures from '../../../fixtures';
import useCartStore from '../../hooks/useCartStore';
import OrderInfo from './OrderInfo';

const context = describe;

describe('OrderInfo', () => {
  beforeEach(() => {
    container.clearInstances();
  });
  function renderOrderInfo() {
    render(<OrderInfo />);
  }
  context('랜더링 되면', () => {
    it('주문내역 0 개, 0원이 화면에 출력된다.', () => {
      renderOrderInfo();

      expect(screen.getByText('주문내역 0개')).toBeInTheDocument();
      expect(screen.getByText('0원')).toBeInTheDocument();
    });
  });

  context('선택된 아이템 2개가 있으면', () => {
    beforeEach(() => {
      const { result } = renderHook(() => useCartStore());
      renderHook(() => result.current[1].addMenu(fixtures.foods[0]));
      renderHook(() => result.current[1].addMenu(fixtures.foods[0]));
    });
    it('주문내역 2개, 16,000원이 화면에 출력된다.', async () => {
      renderOrderInfo();

      await waitFor(() => {
        expect(screen.getByText('주문내역 2개')).toBeInTheDocument();
        expect(screen.getByText('16,000원')).toBeInTheDocument();
      });
    });
  });
});
