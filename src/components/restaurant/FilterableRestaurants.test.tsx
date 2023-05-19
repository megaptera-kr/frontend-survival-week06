import {
  render, waitFor, screen, act,
} from '@testing-library/react';
import { container } from 'tsyringe';
import userEvent from '@testing-library/user-event';
import FilterableRestaurants from './FilterableRestaurants';

const context = describe;

describe('FilterableRestaurants', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  function renderFilterableRestaurants() {
    render(<FilterableRestaurants />);
  }
  context('렌더링 되었을 때', () => {
    it('검색바와 식당 테이블이 나온다', async () => {
      renderFilterableRestaurants();

      await waitFor(() => {
        expect(screen.getByText('메가반점')).toBeInTheDocument();
        expect(screen.getByText('메리김밥')).toBeInTheDocument();
        expect(screen.getByText('혹등고래카레')).toBeInTheDocument();
      });
    });
  });

  context('사용자가 메가를 입력했을 때', () => {
    it('메가반점이 화면에 출력된다.', async () => {
      renderFilterableRestaurants();

      const input = screen.getByLabelText('검색');

      act(() => {
        userEvent.type(input, '메가');
      });

      await waitFor(() => {
        expect(screen.getByText('메가반점')).toBeInTheDocument();
      });
    });
  });
  context('사용자가 한식 버튼을 클릭했을 때', () => {
    it('메리김밥이 화면에 출력된다.', async () => {
      renderFilterableRestaurants();

      await waitFor(() => {
        const button = screen.getByRole('button', { name: '한식' });
        act(() => {
          userEvent.click(button);
        });
      });
      await waitFor(() => {
        expect(screen.getByText('메리김밥')).toBeInTheDocument();
      });
    });
  });
});
