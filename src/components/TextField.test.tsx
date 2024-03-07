import { render, screen } from '@testing-library/react';

import TextField from './TextField';

describe('ComponentTest: TextField', () => {
  const rendering = (label: string, placeholder = '') => {
    render(<TextField label={label} placeholder={placeholder} />);
  };

  it('Rendering collectly: 라벨, 플레이스홀더 값 존재', () => {
    const mockLabelContent = '검색';
    const mockPlaceHolder = '식당 이름...';
    rendering(mockLabelContent, mockPlaceHolder);

    screen.getByLabelText(mockLabelContent);
    screen.getByPlaceholderText(mockPlaceHolder);
  });

  it('Rendering collectly: 플레이스홀더 값이 빈 문자열', () => {
    const mockLabelContent = '검색';
    render(<TextField label={mockLabelContent} />);

    screen.getByLabelText(mockLabelContent);
    screen.getByPlaceholderText('');
  });
});
