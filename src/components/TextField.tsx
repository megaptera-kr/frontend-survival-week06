import React from 'react';
import useDispatch from '../hooks/useDispatch';
import useStore from '../hooks/useStore';
import { inputText } from '../stores/Stores';

export default function TextField() {
  const dispatch = useDispatch();
  const store = useStore();
  function handleInput(e:React.ChangeEvent<HTMLInputElement>) {
    dispatch(inputText(e.target.value));
  }
  return (
    <label>
      검색
      <input type="text" value={store.state.inputText} placeholder="식당 검색" onChange={handleInput} />
    </label>
  );
}
