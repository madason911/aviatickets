import React from "react";
import CheckBoxField from "../common/checkBoxField";

const AirlineFilter = ({ airlineState, onAirlineChange }) => {
  return (
    <div className="airlineFilter">
      <h5 className="fw-bold">Авиакомпании</h5>
      {Object.keys(airlineState).map((item) => {
        return (
          <CheckBoxField
            key={item}
            onChange={onAirlineChange}
            name={item}
            amount={airlineState[item]}
          />
        );
      })}
    </div>
  );
};

export default AirlineFilter;
