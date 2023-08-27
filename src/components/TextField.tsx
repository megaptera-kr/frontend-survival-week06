import { ChangeEvent } from 'react';

type TextFieldProps = {
  setQuery: (value: string) => void;
}

function TextField({ setQuery }: TextFieldProps) {
  const handleChangeQuery = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setQuery(value);
  };

  return (
    <div>
      <label htmlFor="text-input">검색</label>
      <input type="text" id="text-input" placeholder="식당 이름" onChange={handleChangeQuery} />
    </div>
  );
}

export default TextField;
