import foods from '../../fixtures/foods';
import receipt from '../../fixtures/receipt';
import restaurants from '../../fixtures/restaurants';
import { getRestaurant, postOrders } from './restaurant';

describe('restaurant apis', () => {
  it('getRestaurants() - 함수 호출 시, 레스토랑 목록을 받아와야 합니다.', async () => {
    // Given, When
    const result = await getRestaurant();

    // Then
    expect(result).toEqual(restaurants);
  });

  it('postOrders() - 함수 호출 시, 영수증을 받아와야 합니다.', async () => {
    // Given, When
    const result = await postOrders({
      menu: foods,
      totalPrice: foods.reduce((acc, cur) => acc + cur.price, 0),
    });

    // Then
    expect(result).toEqual(receipt);
  });
});
