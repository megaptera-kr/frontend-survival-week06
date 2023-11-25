import * as api from './apiService';

describe('fetchGetRestaurants', () => {
  test('요청이 성공 했을 경우 식당 목록을 반환한다.', async () => {
    const res = await api.fetchGetRestaurants();

    expect(res.status).toBe(200);
  });
});

describe('fetctPostOrders', () => {
  test('장바구니에 담긴 메뉴를 담아 주문을 접수할 경우 영수증을 반환한다.', async () => {
    const res = await api.fetchPostOrders({
      menu: [
        { id: '1', name: '짜장면', price: 8000 },
        { id: '1', name: '짜장면', price: 8000 },
      ],
      totalPrice: 16000,
    });

    expect(res.data.id).toBeTruthy();
  });
});
