import React, { useState } from 'react';
import FilterButtons from './FilterButtons';
import FilterKeyword from './FilterKeyword';

type Props = {
  keyword: string;
  setKeyword: (value: string) => void;
}

function SearchBar({ keyword, setKeyword }: Props) {
  return (
    <section>
      <FilterKeyword keyword={keyword} setKeyword={setKeyword} />
    </section>
  );
}

export default SearchBar;
