import { renderHook } from '@testing-library/react';
import useStorage from './useStorage';

describe('useStorageHook test', () => {
  test('데이터 key와 기본 값을 전달하면 현재 로컬 스토리지의 값과 setter를 준다', () => {
    const { result: { current: cart } } = renderHook(() => useStorage('cart', []));
    const { result: { current: receipt } } = renderHook(() => useStorage('receipt', []));

    expect(cart.data).toBeTruthy();
    expect(cart.setData).toBeTruthy();

    expect(receipt.data).toBeTruthy();
    expect(receipt.setData).toBeTruthy();
  });
});
