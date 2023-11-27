import { waitFor } from '@testing-library/react';
import restaurantsStore from './restaurantsStore';

describe('restaurantsStore', () => {
  beforeEach(() => {
    restaurantsStore.cleanup();
  });
  test('fetch 액션은, restaurants 조회 API를 요청한다.', async () => {
    expect(restaurantsStore.state.apiStatus).toBe('READY');

    await restaurantsStore.fetch();

    waitFor(() => {
      expect(restaurantsStore.state.data.length).toBeTruthy();
      expect(restaurantsStore.state.apiStatus).toBe('SUCCESS');
    });
  });
});
