import React from "react";
import AirlineFilter from "./airlineFilter";
import AmountFilter from "./amountFilter";
import Sortings from "./sortings";
import TransfersCountFilter from "./transfersCountFilter";
import styles from "./filters.module.css";

const Filters = ({
  onSort,
  onAmountChange,
  аmountState,
  airlineState,
  onAirlineChange,
  onTransferChange,
  isValidInput,
}) => {
  return (
    <div
      className={"filters-sortings p-3 mt-5 h-100 bg-white " + styles.filters}
    >
      <Sortings onSort={onSort} />
      <TransfersCountFilter onTransferChange={onTransferChange} />
      <AmountFilter
        isValidInput={isValidInput}
        onAmountChange={onAmountChange}
        аmountState={аmountState}
      />
      <AirlineFilter
        airlineState={airlineState}
        onAirlineChange={onAirlineChange}
      />
    </div>
  );
};

export default Filters;
