import React from "react";
import {Input} from "./Filter.styled"

const Filter = ({ value, changeFilter }) => {
  return (
    <label>
      <p>Find contacts by name</p>
      <Input type="text" value={value} onChange={changeFilter} />
    </label>
  );
};

export default Filter;
