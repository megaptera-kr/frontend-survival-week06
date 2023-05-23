import useFetchRestaurant from '../hooks/__mocks__/useFetchRestaurants';
import Restaurant from '../types/restaurant';
import filterCategories from './filterCategories';

const context = describe;

describe('filterCategories ', () => {
  context('when filter array get', () => {
    it('restaurant not have data', () => {
      const restaurants = [] as Restaurant[];
      const filterCategoriesArr = filterCategories(restaurants);

      expect(filterCategoriesArr).toEqual(['전체']);
    });

    it('restaurant have 한식 category', () => {
      const restaurants = [{
        id: '1', name: 'test', category: '한식', menu: [],
      }];
      const filterCategoriesArr = filterCategories(restaurants);

      expect(filterCategoriesArr).toEqual(['전체', '한식']);
    });

    it('restaurant have 중식 category', () => {
      const restaurants = [{
        id: '1', name: 'test', category: '중식', menu: [],
      }];
      const filterCategoriesArr = filterCategories(restaurants);

      expect(filterCategoriesArr).toEqual(['전체', '중식']);
    });

    it('restaurant have 한식, 중식 category', () => {
      const restaurants = [
        {
          id: '1', name: 'test', category: '중식', menu: [],
        },
        {
          id: '2', name: 'test', category: '한식', menu: [],
        },
      ];
      const filterCategoriesArr = filterCategories(restaurants);

      expect(filterCategoriesArr).toEqual(['전체', '중식', '한식']);
    });
  });
});
