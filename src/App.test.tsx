import { render, screen } from '@testing-library/react';
import App from './App';

const context = describe;

describe('App을 준비한다.', () => {
  context('App에 텍스트가 나온다.', () => {
    it('메가테라 푸드코트 키오스크이다.', () => {
      render(<App />);
      expect(screen.findAllByText('메가테라 푸드코트 키오스크')).toBeTruthy();
    });
  });
});
