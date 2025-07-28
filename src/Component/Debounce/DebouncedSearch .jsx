import React, { useState } from "react";
import UseDebounce from "./UseDebounce";

const DebouncedSearch = () => {
  const [search, setSearch] = useState("");
  const data = [
    "anjali",
    "raja",
    "anurag",
    "siddhi",
    "rajesh",
    "sumit",
    "bipin",
  ];

  const DebounceSearchValue = UseDebounce(search , 500)

  const FilteredData = data.filter((item)=> 
    item.toLowerCase().includes(DebounceSearchValue.toLowerCase())
  )
  return (
    <div>
      <input
        placeholder="search here..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {FilteredData.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
};

export default DebouncedSearch;
