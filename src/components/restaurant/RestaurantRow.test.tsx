import { render, screen } from '@testing-library/react';
import fixtures from '../../../fixtures';
import RestaurantRow from './RestaurantRow';

const context = describe;

describe('RestaurantRow', () => {
  function renderRestaurantRow() {
    render(
      <table>
        <tbody>
          <RestaurantRow restaurant={fixtures.restaurants[0]} />
        </tbody>
      </table>,
    );
  }

  context('레스토랑 데이터를 전달해주면', () => {
    it('해당 식당 이름, 종류, 메뉴가 렌더링 된다.', () => {
      renderRestaurantRow();

      expect(screen.getByText('메가반점')).toBeInTheDocument();
      expect(screen.getByText('중식')).toBeInTheDocument();
      expect(screen.getByText('짜장면(8,000원)')).toBeInTheDocument();
      expect(screen.getByText('짬뽕(5,000원)')).toBeInTheDocument();
    });
  });
});
