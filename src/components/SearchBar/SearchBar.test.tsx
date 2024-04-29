import { fireEvent, render, screen } from '@testing-library/react';
import SearchBar from '.';

const context = describe;

describe('SearchBar 컴포넌트', () => {
  const filterText = '';
  const setFilterText = jest.fn();
  beforeEach(() => {
    jest.clearAllMocks();
    render(<SearchBar filterText={filterText} setFilterText={setFilterText} />);
  });

  context('올바르게 렌더링되면', () => {
    it('"검색" label과 "식당 이름" placeholder input이 렌더링된다.', () => {
      expect(screen.getByLabelText(/검색/)).toBeInTheDocument();
      expect(screen.getByPlaceholderText(/식당 이름/)).toBeInTheDocument();
    });
  });

  context('사용자가 input에 입력하면', () => {
    it('setFilterText를 호출한다.', () => {
      fireEvent.change(screen.getByLabelText('검색'), {
        target: { value: '메' },
      });
      expect(setFilterText).toHaveBeenCalledWith('메');
    });
  });

  // TODO: label 클릭시 input 포커싱 테스트 코드 작성하기
  // context('label을 클릭하면', () => {
  //   it('input에 포커싱이 적용된다.', () => {
  //     fireEvent.click(screen.getByLabelText('검색'));
  //     const input = screen.getByRole('textbox');
  //     expect(input).toHaveFocus();
  //   });
  // });
});
