import React from "react";
import Ticket from "./ticket";

const TicketList = React.memo(({ flights }) => {
  return (
    <div className="tickets">
      {flights.map((flight) => {
        return <Ticket flight={flight.flight} key={flight.flightToken} />;
      })}
      {/* <Ticket flight={flight} /> */}
    </div>
  );
});

export default TicketList;
