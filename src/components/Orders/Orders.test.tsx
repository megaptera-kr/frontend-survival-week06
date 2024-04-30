import { fireEvent, render, screen } from '@testing-library/react';
import Orders from '.';

const context = describe;
describe('Orders 컴포넌트', () => {
  context('로컬스토리지에 orders의 menu가 빈배열 이라면', () => {
    beforeEach(() => {
      localStorage.clear();
      render(<Orders />);
    });

    it('주문내역0개, 총 결제 예상 금액 0원, 주문하기 버튼, 취소하기 버튼을 렌더링합니다.', () => {
      expect(screen.getByText(/주문내역/)).toBeInTheDocument();
      expect(screen.getByText(/총 결제 예상 금액 0원/)).toBeInTheDocument();
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
      expect(screen.getByText(/총 결제 예상 금액 8,000원/)).toBeInTheDocument();
    });
  });

  context('메뉴의 X 버튼을 선택하면', () => {
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
      fireEvent.click(screen.getByText('X'));
    });

    it('로컬스토리지 orders의 menu에 제거된다.', () => {
      expect(screen.queryByText(/짜장면/)).toBeNull();
    });

    it('로컬스토리지 orders의 totalPrice에서 금액만큼 뺀다.', () => {
      expect(screen.getByText(/총 결제 예상 금액 0원/)).toBeInTheDocument();
    });
  });

  context('주문하기 버튼을 클릭하면', () => {
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
      fireEvent.click(screen.getByText('주문하기'));
    });

    it('주문내역을 초기화한다.', () => {
      expect(screen.getByText(/총 결제 예상 금액 0원/));
      expect(screen.queryByRole('listitem')).toBeNull();
    });
  });

  context('취소 버튼을 클릭하면', () => {
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

    it('주문내역을 초기화한다.', () => {
      expect(screen.getByText(/총 결제 예상 금액 0원/));
      expect(screen.queryByRole('listitem')).toBeNull();
    });
  });
});
