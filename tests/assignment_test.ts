Feature('과제 테스트');

Scenario('필터링', ({ I }) => {
  I.amOnPage('/');

  I.see('Kiosk week 6');

  I.fillField('[name="searchText"]', '메가반점');

  I.dontSee('메리김밥');
  I.dontSee('혹등고래카레');
  I.see('짜장면');
  I.see('짬뽕');

  I.fillField('[name="searchText"]', ' ');

  I.see('메가반점');
  I.see('메리김밥');
  I.see('혹등고래카레');

  I.click('중식');

  I.dontSee('메리김밥');
  I.dontSee('혹등고래카레');
  I.see('메가반점');
  I.see('짜장면');
  I.see('짬뽕');

  I.click('한식');

  I.dontSee('메가반점');
  I.dontSee('혹등고래카레');
  I.see('메리김밥');
  I.see('김밥');

  I.click('일식');

  I.dontSee('메가반점');
  I.dontSee('메리김밥');
  I.see('혹등고래카레');
  I.see('기본카레');

  I.click('전체');

  I.see('메가반점');
  I.see('메리김밥');
  I.see('혹등고래카레');
  I.see('짜장면');
  I.see('김밥');
  I.see('기본카레');
});

Scenario('장바구니 관리', ({ I }) => {
  I.amOnPage('/');

  I.see('장바구니');
  I.see('총 주문 개수: 0개');
  I.see('총 주문 금액: 0원');
  I.see('비우기');
  I.see('주문하기');

  I.click('[aria-label="기본카레 추가"]');

  I.see('총 주문 개수: 1개');
  I.see('총 주문 금액: 9,000원');

  I.click('[aria-label="기본카레 추가"]');
  I.click('[aria-label="짜장면 추가"]');

  I.see('총 주문 개수: 3개');
  I.see('총 주문 금액: 26,000원');

  I.click('[aria-label="기본카레 개수 증가"]');

  I.see('총 주문 개수: 4개');
  I.see('총 주문 금액: 35,000원');

  I.click('[aria-label="짜장면 개수 감소"]');

  I.see('총 주문 개수: 3개');
  I.see('총 주문 금액: 27,000원');

  I.click('비우기');

  I.see('총 주문 개수: 0개');
  I.see('총 주문 금액: 0원');

  I.click('[aria-label="기본카레 추가"]');
  I.click('주문하기');

  I.see('총 주문 개수: 0개');
  I.see('총 주문 금액: 0원');
});
