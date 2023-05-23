import {
  render, renderHook, waitFor, screen,
} from '@testing-library/react';
import { container } from 'tsyringe';
import useRestaurantsStore from '../../hooks/useRestaurantsStore';
import RestaurantTable from './RestaurantTable';

const context = describe;

describe('RestaurantTable', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  function renderRestaurantTable() {
    render(<RestaurantTable />);
  }
  context('데이터 불러오기 전 렌더링 되었을 때', () => {
    it('"식당이 존재하지 않습니다." 문구가 화면에 출력된다.', () => {
      renderRestaurantTable();

      expect(screen.getByText('식당 이름')).toBeInTheDocument();
      expect(screen.getByText('종류')).toBeInTheDocument();
      expect(screen.getByText('메뉴')).toBeInTheDocument();
      expect(screen.getByText('식당이 존재하지 않습니다.')).toBeInTheDocument();
    });
  });
  context('데이터 불러온 후 랜더링 되었을 때', () => {
    it('전체, 중식, 한식, 일식 버튼이 화면에 출력된다.', async () => {
      const { result } = renderHook(() => useRestaurantsStore());
      renderHook(() => result.current[1].fetchRestaurants());
      renderHook(() => result.current[1].filterRestaurants(result.current[0].restaurants));

      renderRestaurantTable();
      await waitFor(() => {
        expect(screen.getByText('메가반점')).toBeInTheDocument();
        expect(screen.getByText('메리김밥')).toBeInTheDocument();
        expect(screen.getByText('혹등고래카레')).toBeInTheDocument();
      });
    });
  });
});
