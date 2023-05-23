import { screen, render } from '@testing-library/react';
import ReceiptArea from './ReceiptArea';
import fixtures from '../../../fixtures';
import { ReceiptType } from '../../types/receipt';

const context = describe;
// describe 테스트 케이스를 그룹화 한다.
describe('ReceiptArea', () => {
  context('with receipt', () => {
    it('ReceiptArea Component render', () => {
      const { receipt } = fixtures;
      render(<ReceiptArea receipt={receipt} />);

      expect(screen.getByText('영수증')).toBeInTheDocument();
      expect(screen.getByText('주문번호')).toBeInTheDocument();
      expect(screen.getByText('주문번호')).toBeInTheDocument();
    });
  });
  context('without receipt', () => {
    it('ReceiptArea Component render', () => {
      const receipt = {} as ReceiptType;
      render(<ReceiptArea receipt={receipt} />);
      const compoentElement = screen.getByText('[영수증 나오는 곳]');
      expect(compoentElement).toBeInTheDocument();
    });
  });
});
