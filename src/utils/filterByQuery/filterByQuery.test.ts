import fixture from '../../../fixtures';
import filterByQuery from './filterByQuery';

const context = describe;

describe('filterByQuery func', () => {
  const { restaurants } = fixture;

  context('카테고리가 "전체"이면', () => {
    it('이름으로만 필터링을 해준다.', () => {
      expect(filterByQuery(restaurants, { text: '메', category: '전체' }))
        .toEqual(restaurants);
    });
  });

  context('카테고리가 "한식"이면', () => {
    it('한식 카테고리 중에서 식당 이름으로 필터링 해준다.', () => {
      expect(filterByQuery(restaurants, { text: '메', category: '한식' }))
        .toEqual([{
          id: '2',
          category: '한식',
          name: '메리김밥',
          menu: [
            {
              id: '4',
              name: '김밥',
              price: 3500,
            },
            {
              id: '5',
              name: '제육김밥',
              price: 5500,
            },
            {
              id: '6',
              name: '컵라면',
              price: 2000,
            },
          ],
        }]);
    });
  });
});
