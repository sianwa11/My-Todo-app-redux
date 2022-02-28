import React from "react";

import { FaFilter } from "react-icons/fa";

const Filter = (props) => {
  return (
    <>
      <div>
        <label>
          <FaFilter />
          <select value={props.filter} onChange={props.onChange}>
            <option value="All">All</option>
            <option value="Complete">Complete</option>
            <option value="Pending">Pending</option>
          </select>
        </label>
      </div>
    </>
  );
};

export default Filter;
