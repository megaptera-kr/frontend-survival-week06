import {
  render, renderHook, screen, waitFor,
} from '@testing-library/react';
import { container } from 'tsyringe';
import useRestaurantsStore from '../../hooks/useRestaurantsStore';
import Categories from './Categories';

const context = describe;

describe('Categories Component', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  function renderCategories() {
    render(<Categories />);
  }
  context('데이터 불러오기 전 랜더링 되었을 때', () => {
    it('전체 버튼 하나만 화면에 출력된다.', () => {
      renderCategories();

      expect(screen.getByRole('button', { name: '전체' })).toBeInTheDocument();
    });
  });

  context('데이터 불러온 후 랜더링 되었을 때', () => {
    it('전체, 중식, 한식, 일식 버튼이 화면에 출력된다.', async () => {
      const { result } = renderHook(() => useRestaurantsStore());
      renderHook(() => result.current[1].fetchRestaurants());
      renderHook(() => result.current[1].categories());

      renderCategories();

      expect(screen.getByRole('button', { name: '전체' })).toBeInTheDocument();
      await waitFor(() => {
        expect(screen.getByRole('button', { name: '중식' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '한식' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '일식' })).toBeInTheDocument();
      });
    });
  });
});
