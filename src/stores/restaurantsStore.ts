import { Action, Store } from 'usestore-ts';
import { RestaurantList } from '../../types';
import { ApiError } from '../../api';
import { fetchGetRestaurants } from '../utils/apiService';

const API_STATUS = {
  READY: 'READY',
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
} as const;

type ApiStatusType = typeof API_STATUS[keyof typeof API_STATUS];

type State = {
  data: RestaurantList;
  error: ApiError | null;
  apiStatus: ApiStatusType;
}

const state: State = {
  data: [],
  error: null,
  apiStatus: API_STATUS.READY,
};

@Store()
class RestaurantsStore {
  state = state;

  async fetch() {
    try {
      this.updateStatus('REQUEST');

      const res = await fetchGetRestaurants();

      this.setData(res.data);

      this.updateStatus('SUCCESS');
    } catch (error: unknown) {
      this.state.error = error as ApiError;
      this.updateStatus('FAIL');
    }
  }

  @Action()
  updateStatus(apiStatus: ApiStatusType) {
    this.state = {
      ...this.state,
      apiStatus,
    };
  }

  @Action()
  setData(data: RestaurantList) {
    this.state = {
      ...this.state,
      data,
    };
  }
}

const restaurantsStore = new RestaurantsStore();

export default restaurantsStore;
