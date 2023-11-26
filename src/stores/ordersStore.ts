import { Action, Store } from 'usestore-ts';
import { PostOrdersPayload, Receipt } from '../../types';
import { ApiError } from '../../api';
import { fetchGetOrders, fetchPostOrders } from '../utils/apiService';

const API_STATUS = {
  READY: 'READY',
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL',
} as const;

type ApiStatusType = typeof API_STATUS[keyof typeof API_STATUS];

type State = {
  orderId: string;
  receipt: Receipt | null;
  error: ApiError | null;
  apiStatus: ApiStatusType;
}

const state: State = {
  orderId: '',
  receipt: null,
  error: null,
  apiStatus: API_STATUS.READY,
};

@Store()
class OrdersStore {
  state = state;

  async fetchOrders(payload: PostOrdersPayload) {
    try {
      this.updateStatus('REQUEST');
      const res = await fetchPostOrders(payload);

      this.setState({ orderId: res.data.id });

      this.updateStatus('SUCCESS');
    } catch (error: unknown) {
      this.state.error = error as ApiError;
      this.updateStatus('FAIL');
    }
  }

  async getOrders() {
    try {
      this.updateStatus('REQUEST');
      const res = await fetchGetOrders({ id: this.state.orderId });
      this.setState({ receipt: res.data.order });

      this.updateStatus('SUCCESS');
    } catch (error: unknown) {
      this.state.error = error as ApiError;
      this.updateStatus('FAIL');
    }
  }

  async payment(payload: PostOrdersPayload) {
    try {
      this.updateStatus('REQUEST');
      const res = await fetchPostOrders(payload);

      this.setState({ orderId: res.data.id });

      const receiptRes = await fetchGetOrders({ id: res.data.id });

      this.setState({ receipt: receiptRes.data.order });

      this.updateStatus('SUCCESS');

      return receiptRes.data.order;
    } catch (error: unknown) {
      this.state.error = error as ApiError;
      this.updateStatus('FAIL');
    }
  }

  @Action()
  clearReceipt() {
    this.setState({ receipt: null });
  }

  @Action()
  updateStatus(apiStatus: ApiStatusType) {
    this.setState({ apiStatus });
  }

  @Action()
  setState(newState: Partial<State>) {
    this.state = {
      ...state,
      ...newState,
    };
  }
}

const ordersStore = new OrdersStore();

export default ordersStore;
