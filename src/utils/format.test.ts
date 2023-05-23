import toLocaleCurrency from './format';

describe('format', () => {
  it('toLocaleCurrency() - 입력받은 숫자를 한화로 바꾸어 반환해야 합니다.', () => {
    // Given, When
    const res = toLocaleCurrency(5000);

    // Then
    expect(res).toBe('5,000');
  });

  it('toLocaleCurrency() - 입력받은 파라미터가 숫자 아닌 경우, 빈 문자열을 반환해야 합니다.', () => {
    // Given, When
    const res = toLocaleCurrency(undefined);

    // Then
    expect(res).toBe('');
  });
});
