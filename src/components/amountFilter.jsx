import React, { useState } from "react";

const AmountFilter = ({ defaultAmountState, onChange }) => {
  const handleChange = (event) => {
    onChange(event);
  };
  return (
    <div className="amountFilter">
      <h5 className="fw-bold">Цена</h5>
      <div className="lowerLimit d-flex m-2">
        <span>От </span>
        <input
          type="text"
          name="lower"
          value={defaultAmountState.lower}
          onChange={handleChange}
        />
      </div>
      <div className="higherLimit d-flex m-2">
        <span>До </span>
        <input
          type="text"
          name="upper"
          value={defaultAmountState.upper}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default AmountFilter;
