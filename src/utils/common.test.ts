import { normalize, moneyformat } from './common';

test('normalize 함수는 정수 값을 받아, 화폐 형식의 문자열 값을 리턴', () => {
  expect(normalize('')).toBe('');
  expect(normalize(' ')).toBe('');
  expect(normalize('  ')).toBe('');
  expect(normalize('Abc ')).toBe('abc');
  expect(normalize(' Abc')).toBe('abc');
  expect(normalize(' Abc ')).toBe('abc');
  expect(normalize(' A bc ')).toBe('a bc');
  expect(normalize(' 한글로 검색 ')).toBe('한글로 검색');
});

test('moneyformat 함수는 정수 값을 받아, 화폐 형식의 문자열 값을 리턴', () => {
  expect(moneyformat(0)).toBe('0');
  expect(moneyformat(10)).toBe('10');
  expect(moneyformat(100)).toBe('100');
  expect(moneyformat(1000)).toBe('1,000');
  expect(moneyformat(10000)).toBe('10,000');
  expect(moneyformat(100000)).toBe('100,000');
  expect(moneyformat(1000000)).toBe('1,000,000');
});
