import React from "react";
import FilterBox from "./FilterBox";
import SearchInput from "./searchInput";

const Filters = () => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "4px",
        alignItems: "center",
      }}
    >
      <FilterBox />
      <SearchInput />
    </div>
  );
};

export default Filters;
