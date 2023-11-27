import { fireEvent, render, screen } from '@testing-library/react';
import Select from './Select';

describe('Select Component', () => {
  test('"한식" 을 클릭 하면 onChange 이벤트로 "한식" 을 받아온다.', () => {
    const mockFn = jest.fn();
    render(
      <Select
        options={[
          { label: '전체', value: '' },
          { label: '중식', value: '중식' },
          { label: '한식', value: '한식' },
          { label: '일식', value: '일식' },
        ]}
        onClick={mockFn}
      />,
    );

    const element = screen.getByTestId('SelectItem한식');

    fireEvent.click(element);

    expect(mockFn).toHaveBeenCalledWith('한식');
  });
});
