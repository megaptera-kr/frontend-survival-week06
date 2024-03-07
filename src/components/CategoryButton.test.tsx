import { render, screen, fireEvent } from '@testing-library/react';

import CategoryButton from './CategoryButton';

describe('ComponentTest: CategoryButton', () => {
  const mockContent = '한식';
  const mockClickButton = jest.fn();

  it('render collectly', () => {
    render(
      <CategoryButton content={mockContent} clickButton={mockClickButton} />,
    );

    screen.getByText(mockContent);
    screen.getByRole('button', { name: mockContent });
  });

  it('button can be clicked with value', () => {
    render(
      <CategoryButton content={mockContent} clickButton={mockClickButton} />,
    );

    const button = screen.getByRole('button', { name: mockContent });

    fireEvent.click(button);
    expect(mockClickButton).toHaveBeenCalledTimes(1);
    expect(mockClickButton).toHaveBeenCalledWith(mockContent);
  });
});
