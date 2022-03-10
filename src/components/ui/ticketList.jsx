import React from "react";
import Ticket from "./ticket";

const TicketList = React.memo(({ flights }) => {
  return (
    <div className="tickets">
      {flights.length > 0 ? (
        flights.map((flight) => {
          return <Ticket flight={flight.flight} key={flight.flightToken} />;
        })
      ) : (
        <h1>Авиабилетов с заданными фильтрами не найдено!</h1>
      )}
    </div>
  );
});

export default TicketList;
