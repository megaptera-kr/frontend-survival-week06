import { moneyformat } from './common';

test('moneyformat 함수는 정수 값을 받아, 화폐 형식의 문자열 값을 리턴', () => {
  expect(moneyformat(0)).toBe('0');
  expect(moneyformat(10)).toBe('10');
  expect(moneyformat(100)).toBe('100');
  expect(moneyformat(1000)).toBe('1,000');
  expect(moneyformat(10000)).toBe('10,000');
  expect(moneyformat(100000)).toBe('100,000');
  expect(moneyformat(1000000)).toBe('1,000,000');
});
