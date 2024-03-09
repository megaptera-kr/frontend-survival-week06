Feature('과제 테스트');

Scenario('메뉴판 필터링', ({ I }) => {
  I.amOnPage('/');

  I.see('푸드코트 키오스크');
  I.see('점심 바구니');
  I.see('선택한 메뉴가 없습니다.');
  I.see('합계: 0원 주문');
  I.see('검색');

  I.see('메가반점');
  I.see('메리김밥');
  I.see('데브부엌');
  I.see('로드스시');
  I.see('혹등고래카레');
  I.see('메가김치찌개');

  I.see('전체');
  I.see('한식');
  I.see('중식');
  I.see('일식');

  I.click('중식');
  I.see('탕수육');
  I.dontSee('김밥');

  I.click('한식');
  I.see('메리김밥');
  I.see('데브부엌');
  I.see('메가김치찌개');
  I.see('김밥');
  I.see('제육덮밥');
  I.see('김치찌개1인');

  I.click('일식');
  I.see('로드스시');
  I.see('스페셜초밥');

  I.click('전체');

  I.fillField('검색', 'a');
  I.dontSee('0원)');

  I.fillField('검색', '스');
  I.see('모듬초밥');
  I.see('특선초밥');
  I.dontSee('제육김밥');

  I.fillField('검색', ' ');
  I.see('메가반점');
  I.see('메리김밥');
  I.see('데브부엌');
  I.see('로드스시');
  I.see('혹등고래카레');
  I.see('메가김치찌개');
});

Scenario('메뉴 선택하기', ({ I }) => {
  I.amOnPage('/');

  I.click({ name: '#짜장면' });
  I.click({ name: '#탕수육' });
  I.click({ name: '#김밥' });
  I.see('합계: 25,500원 주문');
});

Scenario('메뉴 선택한 후 취소하기', ({ I }) => {
  I.amOnPage('/');

  I.click({ name: '#짜장면' });
  I.click({ name: '#탕수육' });
  I.click({ name: '#김밥' });

  I.click({ name: '#cancel-cartitem-1' });

  I.see('합계: 17,500원 주문');
});

Scenario('음식 주문하기', ({ I }) => {
  I.amOnPage('/');

  I.see('푸드코트 키오스크');

  I.click({ name: '#짜장면' });
  I.click({ name: '#탕수육' });
  I.click({ name: '#김밥' });
  I.click('합계: 25,500원 주문');

  I.waitForText('주문번호');
  I.see('총 가격: 25,500원');
});
