import React from "react";
import SegmentBody from "./ticketSegments/segmentBody";
import SegmentFooter from "./ticketSegments/segmentFooter";
import SegmentHeader from "./ticketSegments/segmentHeader";

const TicketLegs = ({ legs }) => {
  const styleForText = {
    fontWeight: 700,
  };

  const borderBottomSegment = {
    borderBottom: "3px solid #1e7cd0",
  };
  return (
    <div className="ticket-legs">
      {legs.map((leg, index) => {
        return (
          <div
            className="ticket-leg "
            key={leg.segments[0].departureDate}
            style={styleForText}
          >
            <div
              className="ticket-leg__segments"
              style={index === 0 ? borderBottomSegment : null}
            >
              <SegmentHeader
                departureCity={leg.segments[0].departureCity}
                departureAirport={leg.segments[0].departureAirport}
                arrivalCity={leg.segments[1].arrivalCity}
                arrivalAirport={leg.segments[1].arrivalAirport}
              />
              <SegmentBody
                departureDate={leg.segments[0].departureDate}
                legDuration={leg.duration}
                arrivalDate={leg.segments[0].arrivalDate}
              />
              <SegmentFooter airlineCaption={leg.segments[0].airline.caption} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TicketLegs;
