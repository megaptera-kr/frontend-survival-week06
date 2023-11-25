import { fireEvent, render, screen } from '@testing-library/react';
import Input from './Input';

describe('Input Component', () => {
  test('Input에 onChange 이벤트를 주입 했을 때 입력된 값을 받아온다.', () => {
    const mockFn = jest.fn();
    render(<Input onChange={mockFn} />);

    const element = screen.getByTestId('Input');

    fireEvent.change(element, { target: { value: 'test' } });

    expect(mockFn).toHaveBeenCalledWith('test');
  });

  test('Input에 label을 주입 하면 Input과 같이 그려진다.', () => {
    render(<Input label="label" onChange={jest.fn()} />);

    const element = screen.getByText(/label/);

    expect(element).toBeInTheDocument();
  });
});
