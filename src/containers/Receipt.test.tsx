import {
  act, render, renderHook, screen,
} from '@testing-library/react';
import Receipt from './Receipt';
import { useReceiptStorage } from '../hooks/useStorage';
import fixtures from '../../fixtures';

describe('Receipt', () => {
  test('로컬 스토리지에 영수증 데이터가 있으면, 화면에 영수증을 그린다.', () => {
    render(<Receipt />);
    const { result: { current } } = renderHook(() => useReceiptStorage());

    act(() => current.setReceipt(fixtures.receipt));

    const element = screen.getByText(fixtures.receipt.id);

    expect(element).toBeInTheDocument();
  });
});
