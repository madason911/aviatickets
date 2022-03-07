import React from "react";

const SegmentHeader = ({
  departureCity,
  departureAirport,
  arrivalCity,
  arrivalAirport,
}) => {
  const styleForSpan = {
    color: "#1e7cd0",
  };

  return (
    <div className="ticket-segment_header p-2">
      <p>
        {`${departureCity.caption}, ${departureAirport.caption} `}
        <span style={styleForSpan}>{`(${departureAirport.uid})`} &#8594; </span>
        {`${arrivalCity.caption}, ${arrivalAirport.caption} `}
        <span style={styleForSpan}>{`(${arrivalAirport.uid})`}</span>
      </p>
      <hr />
    </div>
  );
};

export default SegmentHeader;
