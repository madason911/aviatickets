import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  isValidAmountState,
  setLower,
  setUpper,
} from "../../store/amountState";
import TextField from "../common/textField";

const AmountFilter = ({ аmountState }) => {
  const dispatch = useDispatch();
  const isValid = useSelector(isValidAmountState());
  return (
    <div className="amountFilter">
      <h5 className="fw-bold">Цена</h5>
      <div className="lowerLimit d-flex m-2">
        <TextField
          label={"От"}
          name={"lower"}
          value={аmountState.lower}
          error={isValid}
          onChange={(e) => dispatch(setLower(e.target.value))}
        />
      </div>

      <div className="higherLimit d-flex m-2">
        <TextField
          label={"До"}
          name={"upper"}
          value={аmountState.upper}
          error={isValid}
          onChange={(e) => dispatch(setUpper(e.target.value))}
        />
      </div>
      {isValid ? "" : <p className="text-danger">Данные некорректны!</p>}
    </div>
  );
};

export default AmountFilter;
