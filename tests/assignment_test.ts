Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');

  I.see('푸드코트 키오스크');
  I.see('점심 바구니');

  I.see('메가반점');
  I.see('메리김밥');
  I.see('혹등고래카레');

  I.click('중식');
  I.see('메가반점');
  I.dontSee('메리김밥');
  I.dontSee('혹등고래카레');

  I.click('한식');
  I.see('메리김밥');
  I.dontSee('메가반점');
  I.dontSee('혹등고래카레');

  I.click('전체');

  I.fillField('검색', '메가');
  I.see('메가반점');
  I.dontSee('메리김밥');
  I.dontSee('혹등고래카레');

  I.fillField('검색', ' ');

  I.see('메가반점');
  I.see('메리김밥');
  I.see('혹등고래카레');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/');

  I.see('푸드코트 키오스크');
  I.see('점심 바구니');

  I.click({ name: '#짜장면' });
  I.click({ name: '#참치김밥' });
  I.click({ name: '#가라아게카레' });

  I.click('합계: 26,500원 주문');

  I.waitForText('주문번호');
  I.see('총 가격: 26,500원');

  I.wait(7);

  I.see('영수증 나오는 곳');
});
