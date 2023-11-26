import { waitFor } from '@testing-library/react';
import fixtures from '../../fixtures';
import { Menu } from '../../types';
import createReceiptData from '../utils/createReceiptData';
import ordersStore from './ordersStore';

describe('orderStore', () => {
  beforeEach(() => {
    ordersStore.cleanup();
  });
  test('fetchOrders 액션은 주문 접수 API를 요청한다', async () => {
    await ordersStore.fetchOrders(createReceiptData(fixtures.foods));

    waitFor(() => {
      expect(ordersStore.state.orderId).toBeTruthy();
      expect(ordersStore.state.apiStatus).toBe('SUCCESS');
    });
  });

  test('gerOrders 액션은 접수된 주문 정보 조회 API를 요청한다', async () => {
    await ordersStore.getOrders(fixtures.receipt.id);

    waitFor(() => {
      expect(ordersStore.state.receipt).toBeTruthy();
      expect(ordersStore.state.apiStatus).toBe('SUCCESS');
    });
  });

  test('payment 액션은 주문을 접수한다.', async () => {
    await ordersStore.payment(createReceiptData(fixtures.foods));

    waitFor(() => {
      expect(ordersStore.state.orderId).toBeTruthy();
      expect(ordersStore.state.receipt).toBeTruthy();
      expect(ordersStore.state.apiStatus).toBe('SUCCESS');
    });
  });
});
