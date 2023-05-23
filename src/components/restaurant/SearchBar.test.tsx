import {
  act,
  render, renderHook, screen, waitFor,
} from '@testing-library/react';
import { container } from 'tsyringe';
import useRestaurantsStore from '../../hooks/useRestaurantsStore';
import SearchBar from './SearchBar';

const context = describe;

describe('SearchBar', () => {
  beforeEach(() => {
    container.clearInstances();

    const { result } = renderHook(() => useRestaurantsStore());
    renderHook(() => act(() => {
      result.current[1].fetchRestaurants();
    }));
    renderHook(() => result.current[1].categories());
  });

  function renderSearchBar() {
    render(<SearchBar />);
  }
  context('데이터 불러오기 전 랜더링', () => {
    it('검색, 인풋, 전체 버튼만 화면에 출력된다.', () => {
      renderSearchBar();

      expect(screen.getByLabelText('검색')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('식당 이름')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '전체' })).toBeInTheDocument();
    });
  });
  context('데이터 불러온 후 랜더링 되었을 때', () => {
    it('검색, 인풋, 전체, 중식, 한식, 일식 버튼이 화면에 출력된다.', async () => {
      renderSearchBar();

      expect(screen.getByLabelText('검색')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('식당 이름')).toBeInTheDocument();
      expect(screen.getByRole('button', { name: '전체' })).toBeInTheDocument();

      await waitFor(() => {
        expect(screen.getByRole('button', { name: '중식' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '한식' })).toBeInTheDocument();
        expect(screen.getByRole('button', { name: '일식' })).toBeInTheDocument();
      });
    });
  });
});
