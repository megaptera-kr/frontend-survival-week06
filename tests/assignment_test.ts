Feature('과제 테스트');

Scenario('메뉴 주문', ({ I }) => {
  I.amOnPage('/');

  I.see('푸드코트 키오스크');

  I.see('메가반점');
  I.see('메리김밥');
  I.see('혹등고래카레');

  I.click('중식');
  I.see('짜장면');
  I.dontSee('김밥');

  I.click('한식');
  I.see('메리김밥');
  I.see('김밥');
  I.see('제육김밥');

  I.click('전체');

  I.fillField('검색', '혹등');
  I.see('기본카레');
  I.dontSee('메리김밥');

  I.fillField('검색', ' ');

  I.see('메가반점');
  I.see('메리김밥');
  I.see('혹등고래카레');


});
