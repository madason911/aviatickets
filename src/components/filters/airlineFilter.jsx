import React from "react";

const AirlineFilter = ({ airlineState, onAirlineChange }) => {
  const airline = {
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  };

  const amount = {
    width: "50%",
    whiteSpace: "nowrap",
    color: "#0c6efd",
  };
  return (
    <div className="airlineFilter">
      <h5 className="fw-bold">Авиакомпании</h5>
      {Object.keys(airlineState).map((item) => {
        return (
          <div
            className="d-flex justify-content-between p-1 align-items-center"
            key={item}
          >
            <input
              type="checkbox"
              onChange={onAirlineChange}
              name={`${item}`}
            />
            <p className="ms-1" style={airline}>
              {" "}
              {item}{" "}
            </p>
            <span className="ms-1 text-end" style={amount}>
              {" "}
              от {airlineState[item]} р.
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default AirlineFilter;
