import { fireEvent, render, screen } from '@testing-library/react';
import InputText from './InputText';

const context = describe;

describe('InputText  ', () => {
  const inputProps = {
    label: 'inputLabel',
    name: '#Input',
    placeholder: 'placeholderName',
  };

  const renderInputText = () => render(
    <InputText
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...inputProps}
    />,
  );

  it('props에 맞춰 결과 화면 체크', () => {
    renderInputText();

    expect(screen.getByLabelText(inputProps.label)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(inputProps.placeholder)).toBeInTheDocument();
  });

  context('text 수정 시 ', () => {
    it('value 값이 바뀌는지 체크', () => {
      renderInputText();

      const input = screen.getByPlaceholderText(inputProps.placeholder);
      fireEvent.change(input, { target: { value: '바뀐 값' } });
      expect((input as HTMLInputElement).value).toBe('바뀐 값');
    });
  });
});
