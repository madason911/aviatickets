import React from "react";

const AmountSorting = ({ onSort }) => {
  const handleSort = (item) => {
    onSort(item);
  };
  return (
    <>
      <div className="d-flex align-items-center p-1">
        <input
          type="radio"
          name="Sorting"
          onChange={() => handleSort({ path: "amount", order: "asc" })}
        />
        <p className="ms-1"> - по возрастанию цены</p>
      </div>
      <div className="d-flex align-items-center p-1">
        <input
          type="radio"
          name="Sorting"
          onChange={() => handleSort({ path: "amount", order: "desc" })}
        />
        <p className="ms-1"> - по убыванию цены</p>
      </div>
    </>
  );
};

export default AmountSorting;
