import { fireEvent, render, screen } from '@testing-library/react';
import Orders from '.';

const context = describe;
describe('Orders 컴포넌트', () => {
  context('로컬스토리지에 orders의 menu가 빈배열 이라면', () => {
    beforeEach(() => {
      localStorage.clear();
      render(<Orders />);
    });

    it('점심 바구니, 합계: 0원 주문 버튼을 렌더링합니다.', () => {
      expect(screen.getByText(/점심 바구니/)).toBeInTheDocument();
      expect(screen.getByText(/합계: 0원 주문/)).toBeInTheDocument();
    });
  });

  context('로컬스토리지에 orders의 menu가 빈배열이 아니면', () => {
    beforeEach(() => {
      localStorage.setItem(
        'orders'
        , JSON.stringify(
          {
            menu: [{ id: '1', name: '짜장면', price: 8000 }],
            totalPrice: 8000,
          },
        ),
      );
      render(<Orders />);
    });

    it('menu 리스트를 렌더링한다.', () => {
      expect(screen.getByText(/짜장면/)).toBeInTheDocument();
    });

    it('menu리스트들의 총합계(totalPrice)를 렌더링한다.', () => {
      expect(screen.getByText(/8,000원 주문/)).toBeInTheDocument();
    });
  });

  context('메뉴의 취소 버튼을 선택하면', () => {
    beforeEach(() => {
      localStorage.setItem(
        'orders'
        , JSON.stringify(
          {
            menu: [{ id: '1', name: '짜장면', price: 8000 }],
            totalPrice: 8000,
          },
        ),
      );
      render(<Orders />);
      fireEvent.click(screen.getByText('취소'));
    });

    it('로컬스토리지 orders의 menu에 제거된다.', () => {
      expect(screen.queryByText(/짜장면/)).toBeNull();
    });

    it('로컬스토리지 orders의 totalPrice에서 금액만큼 뺀다.', () => {
      expect(screen.getByText(/합계: 0원 주문/)).toBeInTheDocument();
    });
  });
});
