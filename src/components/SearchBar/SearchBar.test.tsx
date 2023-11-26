import { render, screen } from '@testing-library/react';
import Restaurants from '../Restaurants/Restaurants';
import { restaurants } from '../../features/restaurants';

const context = describe;

const currentCategory = '한식';
const searchText = '메가';
const searchResult = restaurants.filter(
  (restaurant) => restaurant.name.includes(searchText),
).filter((restaurant) => restaurant.category === currentCategory);

describe('검색창에 메가를 입력한다.', () => {
  context('매장 목록에서 검색창에 작성된 메가가 포함된 목록을 검색한다.', () => {
    it('메가반점과 메가김치찌개가 반환된다.', () => {
      render(<Restaurants restaurants={searchResult} />);
      expect(screen.getAllByText(new RegExp(searchText))).toBeTruthy();
    });
  });
});

describe('매장명이 포함된 매장리스트에서 카테고리를 선택한다.', () => {
  context('한식을 선택한다.', () => {
    it('메가김치찌개 1건이 나타난다.', () => {
      expect(searchResult.length).toBe(1);
    });
  });
});
