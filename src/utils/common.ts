/**
 * 문자열의 처음과 끝의 공백을 제거하고, 소문자로 변환하여 새로운 문자열 값을 리턴한다.
 * @param value: 문자열
 * @returns 처음과 끝에 공백이 없는 소문자 문자열
 */
export function normalize(value: string) {
  return value;
}

/**
 * 정수형태의 문자열을 화페형식의 문자열 값으로 리턴한다.
 * @param value number 형식의 문자열
 * @returns 화폐형식의 문자열 값을 리턴한다. 예) 9000 -> 9,000
 */
export function moneyformat(value: number) {
  return new Intl.NumberFormat().format(value);
}

/**
 * 정수 배열 안의 모든 원소의 합을 리턴한다.
 * @param nums 정수 배열
 * @returns 정수 배열 안의 합인 정수 값
 */
export function sum(nums: number[]): number {
  return 0;
}

/**
 * 메뉴아이템 리스트에서 각 메뉴의 가격의 합을 계산하여 리턴한다.
 * @returns 메뉴의 총합
 */
export function calculateTotalPrice() {
  return 0;
}
