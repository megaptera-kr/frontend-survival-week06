import { render, screen, fireEvent } from '@testing-library/react';

import CategoryButton from './CategoryButton';

describe('ComponentTest: CategoryButton', () => {
  const mockCategoryName = '한식';
  const mockSetCategoryName = jest.fn();

  it('render collectly', () => {
    render(
      <CategoryButton
        categoryName={mockCategoryName}
        setCategoryName={mockSetCategoryName}
      />,
    );

    screen.getByText(mockCategoryName);
    screen.getByRole('button', { name: mockCategoryName });
  });

  it('button can be clicked with value', () => {
    render(
      <CategoryButton
        categoryName={mockCategoryName}
        setCategoryName={mockSetCategoryName}
      />,
    );

    const button = screen.getByRole('button', { name: mockCategoryName });

    fireEvent.click(button);
    expect(mockSetCategoryName).toHaveBeenCalledTimes(1);
    expect(mockSetCategoryName).toHaveBeenCalledWith(mockCategoryName);
  });
});
