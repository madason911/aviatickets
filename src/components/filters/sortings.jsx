import React from "react";
import AmountSorting from "./amountSorting";
import TimeSorting from "./timeSorting";

const Sortings = ({ onSort }) => {
  return (
    <div className="sortings">
      <h5 className="fw-bold">Сортировать</h5>
      <AmountSorting onSort={onSort} />
      <TimeSorting onSort={onSort} />
    </div>
  );
};

export default Sortings;
