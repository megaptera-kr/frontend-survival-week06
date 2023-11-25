const context = describe;

const getRestaurants = async () => {
  try {
    const response = await fetch('http://localhost:3000/restaurants');
    if (response.ok) {
      return await response.json();
    }
  } catch (err) {
    throw Error('레스토랑 목록 조회에 실패하였습니다.');
  }
};

describe('레스토랑 리스트를 가져올 API가 필요하다.', () => {
  context('레스토랑 리스트를 가져온다.', () => {
    it('레스토랑 리스트가 조회된다.', async () => {
      const { restaurants } = await getRestaurants();
      expect(restaurants.length > 0).toBeTruthy();
    });
  });
});
