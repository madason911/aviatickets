import React from "react";

const TicketHeader = ({ carrier, total }) => {
  const Header = {
    background: "#1e7cd0",
    color: "white",
    padding: "5px 15px",
  };

  const Amount = {
    fontWeight: "400",
    fontSize: "30px",
  };

  const Text = {
    margin: 0,
    lineHeight: "normal",
  };

  const Carrier = {
    display: "flex",
    alignItems: "center",
    fontSize: "17px",
    fontWeight: "bold",
  };
  return (
    <div
      className="ticket_header d-flex justify-content-between"
      style={Header}
    >
      <span style={Carrier}>{`${carrier.caption}, ${carrier.uid}`}</span>
      <div className="text-end">
        <p style={Text}>
          <span style={Amount}>{`${total.amount} `}</span> {total.currencyCode}
        </p>
        <p style={Text}>Стоимость для одного взрослого пассажира</p>
      </div>
    </div>
  );
};

export default TicketHeader;
