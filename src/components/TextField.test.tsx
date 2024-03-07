import { render, screen, fireEvent } from '@testing-library/react';

import TextField from './TextField';

describe('ComponentTest: TextField', () => {
  const label = '검색';
  let placeholder = '식당 이름...';
  const text = '메가김밥';
  const setText = jest.fn();

  it('Rendering collectly: 라벨, 플레이스홀더 값 존재', () => {
    render(
      <TextField
        label={label}
        placeholder={placeholder}
        text={text}
        setText={setText}
      />,
    );

    screen.getByLabelText(label);
    screen.getByPlaceholderText(placeholder);
    const inputElement = screen.getByRole('textbox');
    expect(inputElement).toHaveValue(text);
  });

  it('Rendering collectly: 플레이스홀더 값이 빈 문자열', () => {
    placeholder = '';
    render(
      <TextField
        label={label}
        placeholder={placeholder}
        text={text}
        setText={setText}
      />,
    );

    screen.getByPlaceholderText('');
  });

  it('Rendering collectly: Input onChange 이벤트 정상 작동 확인', () => {
    render(
      <TextField
        label={label}
        placeholder={placeholder}
        text={text}
        setText={setText}
      />,
    );

    const newInput = 'newInput';
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: newInput } });
    expect(setText).toHaveBeenCalledWith(newInput);
  });
});
