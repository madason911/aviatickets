import React from "react";
import AirlineFilter from "./airlineFilter";
import AmountFilter from "./amountFilter";
import Sortings from "./sortings";
import TransfersCountFilter from "./transfersCountFilter";

const Filters = ({
  onSort,
  onAmountChange,
  defaultAmountState,
  airlineState,
  onAirlineChange,
  onTransferChange,
  isValidInput,
}) => {
  const filters = {
    width: "20%",
  };
  return (
    <div className="filters-sortings p-3 mt-5" style={filters}>
      <Sortings onSort={onSort} />
      <TransfersCountFilter onTransferChange={onTransferChange} />
      <AmountFilter
        isValidInput={isValidInput}
        onAmountChange={onAmountChange}
        defaultAmountState={defaultAmountState}
      />
      <AirlineFilter
        airlineState={airlineState}
        onAirlineChange={onAirlineChange}
      />
    </div>
  );
};

export default Filters;
