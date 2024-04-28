import { screen, render } from '@testing-library/react';
import Receipt from '.';

describe('Receipt 컴포넌트', () => {
  it('Receipt 렌더링합니다.', () => {
    render(<Receipt />);
    expect(screen.getByText('Receipt')).toBeInTheDocument();
  });
});
