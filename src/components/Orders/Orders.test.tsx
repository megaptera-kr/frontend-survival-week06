import { render, screen } from '@testing-library/react';
import Orders from '.';

describe('Orders 컴포넌트', () => {
  it('Orders 렌더링합니다.', () => {
    render(<Orders />);
    expect(screen.getByText('점심 바구니')).toBeInTheDocument();
  });
});
