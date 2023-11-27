import { screen, render } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  const type = 'button';
  const title = '검색';
  const buttonStyle = { color: 'red' };
  const onClick = jest.fn();

  it('Button Component', () => {
    render(<Button
      type={type}
      title={title}
      name=""
      buttonStyle={buttonStyle}
      onClick={onClick}
    />);

    screen.getByText('검색');
  });
});
