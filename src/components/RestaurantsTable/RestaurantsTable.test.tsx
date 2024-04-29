import { render, screen } from '@testing-library/react';
import RestaurantsTable from '.';
import fixture from '../../../fixtures';

const context = describe;

describe('RestaurantsTable 컴포넌트', () => {
  const { restaurants } = fixture;

  beforeEach(() => {
    render(<RestaurantsTable restaurants={restaurants} />);
  });

  context('restaurants를 props로 전달받으면', () => {
    it('식당 이름, 종류, 메뉴를 렌더링한다.', () => {
      expect(screen.getByText(/메가반점/)).toBeInTheDocument();
      expect(screen.getByText(/중식/)).toBeInTheDocument();
      expect(screen.getByText(/탕수육/)).toBeInTheDocument();
    });
  });

  context('restaurants를 props로 전달받으면', () => {
    it('restaurants 배열 길이만큼 행 길이를 렌더링한다.', () => {
      const rows = screen.getAllByRole('row');
      expect(rows).toHaveLength(restaurants.length + 1);
    });
  });
});
