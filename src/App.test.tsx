import { render, screen } from '@testing-library/react';
import App from './App';
import { getRestaurants } from './services/getRestaurants';

const context = describe;

describe('App을 준비한다.', () => {
  context('App에 텍스트가 나온다.', () => {
    it('메가테라 푸드코트 키오스크이다.', () => {
      render(<App />);
      expect(screen.findAllByText('메가테라 푸드코트 키오스크')).toBeTruthy();
    });
  });
});

describe('레스토랑 리스트를 가져올 API가 필요하다.', () => {
  context('레스토랑 리스트를 가져온다.', () => {
    it('레스토랑 리스트가 조회된다.', async () => {
      const { restaurants } = await getRestaurants();
      expect(restaurants.length > 0).toBeTruthy();
    });
  });
});
