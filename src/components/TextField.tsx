import { ChangeEvent } from 'react';

interface TextFieldProps {
    filterText: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export default function TextField({ filterText, onChange }: TextFieldProps) {
  return (
    <>
      <label
        htmlFor="restaurantName"
        style={{ marginRight: 10 }}
      >
        검색
      </label>
      <input
        id="restaurantName"
        name="검색"
        placeholder="식당 이름"
        value={filterText}
        onChange={onChange}
      />
    </>
  );
}
