import { screen } from '@testing-library/react';

import useRender from '../../../tests/utils';

import context from '../utils/test_config';

import Header from './Header';

describe('Header Render', () => {
  useRender(<Header title='메가테라 푸드코트 키오스크' />);

  context('view', () => {
    it('title', () => {
      const text = screen.getByText(/메가테라 푸드코트 키오스크/);
      expect(text).toBeInTheDocument();
    });
  });
});
