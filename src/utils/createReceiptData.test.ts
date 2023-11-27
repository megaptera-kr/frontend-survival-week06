import fixtures from '../../fixtures';
import createReceiptData from './createReceiptData';

describe('createReceiptData', () => {
  test('메뉴 목록을 받으면 메뉴를 그룹화 하고, 총액을 구한다.', () => {
    const receipt = createReceiptData(fixtures.foods);

    expect(receipt).toEqual({
      menu: [
        {
          id: 'FOOD_01',
          name: '짜장면',
          price: 8000,
        },
        {
          id: 'FOOD_02',
          name: '짬뽕',
          price: 5000,
        },
      ],
      totalPrice: 13000,
    });
  });
});
