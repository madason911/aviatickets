import React from "react";
import TicketHeader from "./ticketHeader";
import TicketLegs from "./ticketLegs";

const Ticket = ({ flight }) => {
  const styleForTicket = {
    background: "#fff",
  };
  return (
    <div className="ticket m-5" style={styleForTicket}>
      <TicketHeader carrier={flight.carrier} total={flight.price.total} />
      <TicketLegs legs={flight.legs} />
      <button className="btn btn-warning w-100 mt-1">Выбрать</button>
    </div>
  );
};

export default Ticket;
