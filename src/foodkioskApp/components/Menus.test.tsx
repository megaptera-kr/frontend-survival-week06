import { screen } from '@testing-library/react';

import context from '../utils/test_config';

import useRender from '../../../tests/utils';

import Menus from './Menus';

import { Restaurant } from '../types';

import restaurants from '../../../fixtures';

const state: { restaurants: Restaurant[] } = restaurants;

jest.mock('../hooks/useFilteredMenu', () => () => state);

describe('Menus Render', () => {
  context('view', () => {
    it('tableHead and restaurants', async () => {
      useRender(<Menus />);

      const head = ['식당 이름', '종류', '메뉴'];

      head.forEach((ele) => screen.getByText(ele));

      const textList = [/짬뽕/, /기본카레/, /제육김밥/, /짜장면/];

      textList.forEach((text) => {
        expect(screen.getByText(text)).toBeInTheDocument();
      });
    });
  });
});
