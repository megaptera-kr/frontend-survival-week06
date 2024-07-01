import convertKRW from './convertKRW';

const context = describe;

describe('convertKRW func', () => {
  context('1 ~ 999 사이의 숫자가 주어지면', () => {
    it('마지막에 "원"만 붙여 반환한다.', () => {
      expect(convertKRW(1)).toBe('1원');
      expect(convertKRW(999)).toBe('999원');
    });
  });

  context('1000 ~ 10000 사이의 숫자가 주어지면', () => {
    it('천단위마다 쉼표로 구분하고 마지막에 "원"을 붙여 반환한다.', () => {
      expect(convertKRW(1000)).toBe('1,000원');
      expect(convertKRW(9999)).toBe('9,999원');
      expect(convertKRW(10000)).toBe('10,000원');
    });
  });
});
