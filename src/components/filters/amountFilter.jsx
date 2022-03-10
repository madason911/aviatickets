import React from "react";

const AmountFilter = ({ defaultAmountState, onAmountChange, isValidInput }) => {
  return (
    <div className="amountFilter">
      <h5 className="fw-bold">Цена</h5>
      <div className="lowerLimit d-flex m-2">
        <span>От </span>
        <input
          type="text"
          name="lower"
          value={defaultAmountState.lower}
          onChange={onAmountChange}
        />
      </div>
      <div className="higherLimit d-flex m-2">
        <span>До </span>
        <input
          type="text"
          name="upper"
          value={defaultAmountState.upper}
          onChange={onAmountChange}
        />
      </div>
      {isValidInput ? "" : <p className="text-danger">Данные некорректны!</p>}
    </div>
  );
};

export default AmountFilter;
