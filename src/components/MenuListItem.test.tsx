import { render, screen } from '@testing-library/react';

import fixtures from '../../fixtures';

import MenuListItem from './MenuListItem';

const context = describe;

describe('MenuListItem', () => {
  it('menu를 렌더링 한다.', () => {
    render(<MenuListItem menu={fixtures.foods[0]} />);

    screen.getByText('짜장면(8,000원)');
  });

  context('children이 있으면', () => {
    it('renders children', () => {
      render((
        <MenuListItem menu={fixtures.foods[0]}>
          <p>자식 요소!</p>
        </MenuListItem>
      ));

      screen.getByText(/자식 요소!/);
    });
  });
});
