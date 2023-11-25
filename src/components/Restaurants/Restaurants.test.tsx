import { render } from '@testing-library/react';
import { getRestaurants } from '../../services/getRestaurants';
import Restaurants from './Restaurants';

const context = describe;

describe('불러온 레스토랑 리스트가 있다.', () => {
  context('레스토랑 리스트를 화면에 뿌려준다.', () => {
    it('레스토랑 리스트가 화면에 보인다.', async () => {
      const { restaurants } = await getRestaurants();
      render(<Restaurants restaurants={restaurants} />);
    });
  });
});
