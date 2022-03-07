import React from "react";

const SegmentFooter = ({ airlineCaption }) => {
  return (
    <div className="ticket-segment_signature p-2">
      <p>Рейс выполняет: {airlineCaption}</p>
    </div>
  );
};

export default SegmentFooter;
