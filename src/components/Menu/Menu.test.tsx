import { useStore } from 'usestore-ts';
import cartStore from '../../store/cartStore';

const context = describe;

describe('카트 전역 저장소를 준비한다.', () => {
  context('상품을 담는다.', () => {
    it('상품이 담긴다.', () => {
      const [{ cart }, store] = useStore(cartStore);
    });
  });
});

describe('테스트를 위한 테스트', () => {
  context('테스트를 위한 테스트', () => {
    it('테스트를 위한 테스트', () => {
    });
  });
});
