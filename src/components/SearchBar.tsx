import React from 'react';
import Categories from './Categories';
import FilterTextField from './FilterTextField';

type SearchBarProps = {
    categories: string[];
    filterText: string;
    setFilterText: (text: string) => void;
    setFilterCategory: (text: string) => void;
}

export default function SearchBar({
    categories, filterText, setFilterText, setFilterCategory,
}: SearchBarProps) {
    return (
        <div>
            <FilterTextField
                text={filterText}
                setText={setFilterText}
            />
            <Categories
                categories={categories}
                setFilterCategory={setFilterCategory}
            />
        </div>
    );
}