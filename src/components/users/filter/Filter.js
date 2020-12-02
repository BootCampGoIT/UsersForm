import React from "react";

const Filter = ({ filter, onHandleChangeFilter }) => {
  return <input type='text' value={filter} onChange={onHandleChangeFilter} />;
};

export default Filter;
