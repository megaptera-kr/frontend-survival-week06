import useDispatch from '../hooks/useDispatch';
import { inputCategory } from '../stores/Stores';

type ButtonField = {
  category : string
}

export default function ButtonField({ category }:ButtonField) {
  const dispatch = useDispatch();
  function handleClick() {
    dispatch(inputCategory(category));
  }
  return (
    <button type="button" onClick={handleClick}>{category}</button>
  );
}
