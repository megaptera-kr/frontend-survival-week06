import { setupServer } from 'msw/node';
import handlers from './handlers';

/*
Node 환경에서 미리 준비해둔 handler를 사용하기 위해서는 MSW의 setupServer 메서드를 통해 server를 먼저 만들어 주어야 한다.
*/
const server = setupServer(...handlers);

export default server;
