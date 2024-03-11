/* eslint-disable comma-dangle */
import { fireEvent, render, screen } from '@testing-library/react';

import TextField from './TextField';

const context = describe;

describe('TextField', () => {
  const label = '검색';
  const text = '메가반점';
  const setText = jest.fn();

  beforeEach(() => {
    setText.mockClear();
  });

  function renderTextFiled() {
    render(
      <TextField
        label={label}
        placeholder="식당 이름을 입력해주세요."
        text={text}
        setText={setText}
      />
    );
  }

  context('render TextFiled', () => {
    it('renders elements', () => {
      renderTextFiled();

      screen.getByLabelText(/검색/);
      screen.getByPlaceholderText('식당 이름을 입력해주세요.');
      screen.getByDisplayValue(text);
    });
  });

  context('when user enters nam', () => {
    it('calls setText handler', () => {
      renderTextFiled();

      fireEvent.change(screen.getByLabelText(/검색/), {
        target: { value: 'New Name' },
      });

      expect(setText).toBeCalledWith('New Name');
    });
  });
});
