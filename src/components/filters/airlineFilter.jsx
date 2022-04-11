import React from "react";
import { useSelector } from "react-redux";
import { getAirlines } from "../../store/tickets";
import CheckBoxField from "../common/checkBoxField";

const AirlineFilter = ({ onAirlineChange }) => {
  const airlineState = useSelector(getAirlines());
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
