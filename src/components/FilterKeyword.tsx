import React from 'react';

type Props = {
  keyword: string;
  setKeyword: (value: string) => void;
}

function FilterKeyword({ keyword, setKeyword }: Props) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setKeyword(value);
  };

  return (
    <section>
      <label htmlFor="keyword">검색</label>
      <input id="keyword" type="text" placeholder="식당 이름을 입력하세요" value={keyword} onChange={handleChange} />
    </section>
  );
}

export default FilterKeyword;
