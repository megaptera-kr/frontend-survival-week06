import { screen } from '@testing-library/react';

import { container } from 'tsyringe';

import useRender from '../../../tests/utils';

import Header from './Header';

describe('Header Render', () => {
  beforeEach(() => {
    container.clearInstances();
  });

  useRender(<Header title='메가테라 푸드코트 키오스크' />);

  it('render 메가테라 푸드코트 키오스크', () => {
    const text = screen.getByText(/메가테라 푸드코트 키오스크/);
    expect(text).toBeInTheDocument();
  });
});
