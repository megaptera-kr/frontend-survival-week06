import priceToLocal from './priceToLocal';

describe('priceToLocal', () => {
  it('price가 주어지면 세자리마다 콤마를 추가하여 문자열로 리턴한다.', () => {
    expect(priceToLocal(1000)).toBe('1,000');
    expect(priceToLocal(10000)).toBe('10,000');
    expect(priceToLocal(123456)).toBe('123,456');
    expect(priceToLocal(100)).toBe('100');
  });
});
