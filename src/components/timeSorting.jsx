import React from "react";

const TimeSorting = ({ onSort }) => {
  const handleSort = (item) => {
    onSort(item);
  };
  return (
    <div className="d-flex align-items-center p-1">
      <input
        type="radio"
        name="Sorting"
        onChange={() => handleSort({ path: "duration", order: "asc" })}
      />
      <p className="ms-1"> - по времени в пути</p>
    </div>
  );
};

export default TimeSorting;
