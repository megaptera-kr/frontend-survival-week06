import { render, screen } from '@testing-library/react';

import MenuList from './MenuList';

import fixtures from '../../fixtures';

const context = describe;

describe('MenuList', () => {
  it('menuList를 렌더링한다.', () => {
    const { getByText } = render((
      <MenuList
        menuList={fixtures.foods}
      />
    ));

    expect(getByText(/짜장면/)).not.toBeNull();
  });

  context('menuList가 있으면', () => {
    it('menuList를 렌더링 한다.', () => {
      render(<MenuList menuList={fixtures.foods} />);

      screen.getByText(/짜장면/);
      screen.getByText(/짬뽕/);
    });
  });

  context('menuList가 없으면', () => {
    it('메뉴가 없다는 메시지를 노출한다.', () => {
      render(<MenuList menuList={[]} />);

      screen.getByText(/메뉴가 존재하지 않습니다/);
    });
  });
});
