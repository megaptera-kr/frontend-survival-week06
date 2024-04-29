function convertKRW(price:number):string {
  return `${price.toLocaleString('ko-KR')}원`;
}

export default convertKRW;
