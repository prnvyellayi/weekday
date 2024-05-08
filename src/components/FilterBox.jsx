import React from "react";

const FilterBox = () => {
  return (
    <select
      data-placeholder="Begin typing a name to filter..."
      multiple
      name="test"
    >
      <option value=""></option>
      <option>American Black Bear</option>
      <option>Asiatic Black Bear</option>
      <option>Brown Bear</option>
      <option>Giant Panda</option>
      <option>Sloth Bear</option>
      <option>Sun Bear</option>
      <option>Polar Bear</option>
      <option>Spectacled Bear</option>
    </select>
  );
};

export default FilterBox;