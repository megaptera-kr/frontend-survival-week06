import fixtures from '../../../fixtures';

const useFetchCategories = jest.fn(() => ({
  categories: fixtures.categories,
}));

export default useFetchCategories;
