import React from "react";
import AirlineFilter from "./airlineFilter";
import AmountFilter from "./amountFilter";
import Sortings from "./sortings";
import TransfersCountFilter from "./transfersCountFilter";

const Filters = ({
  onSort,
  onChange,
  defaultAmountState,
  airlineState,
  onAirline,
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
        onChange={onChange}
        defaultAmountState={defaultAmountState}
      />
      <AirlineFilter airlineState={airlineState} onAirline={onAirline} />
    </div>
  );
};

export default Filters;
