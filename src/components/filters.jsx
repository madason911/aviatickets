import React from "react";
import AirlineFilter from "./airlineFilter";
import AmountFilter from "./amountFilter";
import Sortings from "./sortings";
import TransfersCountFilter from "./transfersCountFilter";

const Filters = ({ onSort, onChange, defaultAmountState }) => {
  return (
    <div className="filters-sortings p-3 mt-5">
      <Sortings onSort={onSort} />
      <TransfersCountFilter />
      <AmountFilter
        onChange={onChange}
        defaultAmountState={defaultAmountState}
      />
      <AirlineFilter />
    </div>
  );
};

export default Filters;
