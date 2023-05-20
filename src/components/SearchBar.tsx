import React, { useState } from 'react';
import FilterButtons from './FilterButtons';
import FilterKeyword from './FilterKeyword';

type Props = {
  categories: string [];
  keyword: string;
  setKeyword: (value: string) => void;
  setSelectedCategory: (value: string) => void;
}

export default function SearchBar({ categories, keyword, setKeyword, setSelectedCategory }: Props) {

  return (
    <section>
      <FilterKeyword keyword={keyword} setKeyword={setKeyword} />
      <FilterButtons categories={categories} setSelectedCategory={setSelectedCategory} />
    </section>
  );
}
