import { render, screen } from '@testing-library/react';

import RestaurantsTable from './RestaurantsTable';
import fixtures from '../../fixtures';

const context = describe;

describe('RestaurantsTable', () => {
  context('restaurants가 주어지면', () => {
    it('테이블을 렌더링한다', () => {
      render((
        <RestaurantsTable
          restaurants={fixtures.restaurants}
        />
      ));

      screen.getByText('식당 이름');
      screen.getByText('종류');
      screen.getByText('메뉴');
    });
  });
});
