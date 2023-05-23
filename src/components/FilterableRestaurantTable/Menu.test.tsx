import { screen, render } from '@testing-library/react';
import fixtures from '../../../fixtures';
import { Food } from '../../types/Restaurant';
import Foods from './Menu';

const context = describe;
describe('Foods', () => {
  context('with Menu', () => {
    it('Foods Components Render', () => {
      const { foods } = fixtures;
      render(<Foods menu={foods} />);
      screen.getByText(/짬뽕/);
      screen.getByText(/짜장면/);
    });
  });

  context('without Menu', () => {
    it('Foods Components Render', () => {
      const foods: Food[] = [];
      render(<Foods menu={foods} />);
      screen.getByText('메뉴가 존재하지 않습니다');
    });
  });
});
