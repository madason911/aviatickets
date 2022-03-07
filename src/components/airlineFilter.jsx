import React from "react";

const AirlineFilter = () => {
  return (
    <div className="airlineFilter">
      <h5 className="fw-bold">Авиакомпании</h5>
      <div className="d-flex align-items-center">
        <input type="checkbox" />
        <p className="ms-1"> - Аэрофл... от </p>
        <span>9999 р</span>
      </div>
      <div className="d-flex align-items-center">
        <input type="checkbox" />
        <p className="ms-1"> - Аэрофл... от </p>
        <span>9999 р</span>
      </div>
    </div>
  );
};

export default AirlineFilter;
