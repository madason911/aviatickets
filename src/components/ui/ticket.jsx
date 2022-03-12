import React from "react";
import TicketHeader from "./ticketHeader";
import TicketLegs from "./ticketLegs";
import styles from "./ticket.module.css";
import Button from "../common/button";

const Ticket = ({ flight }) => {
  const handleButtonClick = () => {
    console.log(flight);
  };
  return (
    <div className={"ticket m-5 " + styles.ticket_wrapper}>
      <TicketHeader carrier={flight.carrier} total={flight.price.total} />
      <TicketLegs legs={flight.legs} />
      <Button onButtonClick={handleButtonClick}>Выбрать</Button>
    </div>
  );
};

export default Ticket;
