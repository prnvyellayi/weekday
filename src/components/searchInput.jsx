import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useDebounceValue } from "../utils/use-debouce";

const SearchInput = () => {
  const [inputValue, setInputValue] = useState("");
  const debounceSearch = useDebounceValue(inputValue, 500);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (debounceSearch.length > 0) {
      params.set("search", debounceSearch);
    } else {
      params.delete("search");
    }
    setSearchParams(params);
  }, [debounceSearch]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "4px",
        alignItems: "start",
      }}
    >
      <span
        style={{
          visibility: inputValue !== "" ? "visible" : "hidden",
          fontWeight: "500",
          fontSize: "13px",
        }}
      >
        Company
      </span>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Search Company Name"
        style={{
          width: "180px",
          height: "30px",
          borderRadius: "4px",
          padding: "5px 8px",
          border: "1px solid #ccc",
          fontSize: "13px",
        }}
      />
    </div>
  );
};

export default SearchInput;
