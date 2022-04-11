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
      <AmountFilter onAmountChange={onAmountChange} аmountState={аmountState} />
      <AirlineFilter onAirlineChange={onAirlineChange} />
    </div>
  );
};

export default Filters;
