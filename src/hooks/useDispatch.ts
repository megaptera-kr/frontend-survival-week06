import { container } from 'tsyringe';

import Store from '../stores/store';
import { type Action } from '../stores/base.store';

function useDispatch<Payload>() {
  const store = container.resolve(Store);
  return (action: Action<Payload>) => store.dispatch(action);
}

export default useDispatch;
