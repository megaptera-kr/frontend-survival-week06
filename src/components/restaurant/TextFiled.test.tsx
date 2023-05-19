import {
  act, render, screen, waitFor,
} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { container } from 'tsyringe';
import TextFiled from './TextFiled';

const context = describe;

describe('TextFiled', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  const handleChange = jest.fn();
  function renderTextFiled() {
    render(<TextFiled label="검색" placeholder="식당 이름" handleChange={handleChange} />);
  }

  context('렌더링 되었을 때', () => {
    it('검색 라벨과 placeholder에 식당 이름이 나오는 인풋이 화면에 출력된다.', () => {
      renderTextFiled();

      expect(screen.getByLabelText('검색')).toBeInTheDocument();
      expect(screen.getByPlaceholderText('식당 이름')).toBeInTheDocument();
    });
  });

  context('사용자가 텍스트를 입력하면', () => {
    it('인풋에 텍스트를 입력하면 화면에 잘 출력이 된다.', async () => {
      renderTextFiled();

      const input = screen.getByLabelText('검색');

      act(() => {
        userEvent.type(input, '메가');
      });

      await waitFor(() => {
        expect(screen.getByDisplayValue('메가')).toBeInTheDocument();
      });
    });
  });
});
