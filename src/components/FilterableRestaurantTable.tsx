import { fromPairs } from "lodash";
import React, { useState } from "react";
import useFetchRestaurants from "../hooks/useFetchRestaurants";
import filterRestaurants from "../utils/filterRestaurants";
import selectCategories from "../utils/selectCategories";
import RestaurantTable from "./RestaurantTable";
import SearchBar from "./SearchBar";

export default function FilterableRestaurantTable(){
    const restaurants = useFetchRestaurants();
    const [filterText, setFilterText] = useState<string>('');
    const [filterCategory, setFilterCategory] = useState<string>('전체');
    const categories = selectCategories(restaurants);
    const filteredRestaurants = filterRestaurants(restaurants, {
        filterText, filterCategory,
    });

    return (
        <div>
          <SearchBar
            categories={categories}
            filterText={filterText}
            setFilterText={setFilterText}
            setFilterCategory={setFilterCategory}
          />
          <RestaurantTable restaurants={filteredRestaurants} />
        </div>
      );
}