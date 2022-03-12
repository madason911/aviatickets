import React from "react";
import TextField from "../common/textField";

const AmountFilter = ({ аmountState, onAmountChange, isValidInput }) => {
  return (
    <div className="amountFilter">
      <h5 className="fw-bold">Цена</h5>
      <div className="lowerLimit d-flex m-2">
        <TextField
          label={"От"}
          name={"lower"}
          value={аmountState.lower}
          error={isValidInput}
          onChange={onAmountChange}
        />
      </div>

      <div className="higherLimit d-flex m-2">
        <TextField
          label={"До"}
          name={"upper"}
          value={аmountState.upper}
          error={isValidInput}
          onChange={onAmountChange}
        />
      </div>
      {isValidInput ? "" : <p className="text-danger">Данные некорректны!</p>}
    </div>
  );
};

export default AmountFilter;
