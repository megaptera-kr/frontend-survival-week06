import { render, screen } from '@testing-library/react';
import ReceiptPrinter from './ReceiptPrinter';
import fixtures from '../fixtures';

import type Receipt from '../types/Receipt';

const context = describe;

describe('ReceiptPrinter', () => {
  context('with receipt', () => {
    const { receipt } = fixtures;

    it('renders receipt', () => {
      render(<ReceiptPrinter receipt={receipt} />);

      screen.getByText(/주문번호/);
      screen.getByText(/주문목록/);
      screen.getByText(/짜장면/);
    });
  });

  context('without receipt', () => {
    const receipt = {} as Receipt;
    it('renders message', () => {
      render(<ReceiptPrinter receipt={receipt} />);

      screen.getByText(/영수증 나오는 곳/);
    });
  });
});
