import { container } from 'tsyringe';

import Store from '../stores/Store';

import { Action } from '../stores/BaseStore';

export default function useDispatch<Payload>() {
  const store = container.resolve(Store);

  return (action: Action<Payload>) => {
    store.dispatch(action);
  };
}
