import React from "react";
import styles from "./ticketHeader.module.css";

const TicketHeader = ({ carrier, total }) => {
  return (
    <div
      className={
        "ticket_header d-flex justify-content-between " + styles.header
      }
    >
      <span
        className={styles.carrier}
      >{`${carrier.caption}, ${carrier.uid}`}</span>
      <div className="text-end">
        <p className={styles.header_text}>
          <span className={styles.amount}>{`${total.amount} `}</span>{" "}
          {total.currencyCode}
        </p>
        <p className={styles.header_text}>
          Стоимость для одного взрослого пассажира
        </p>
      </div>
    </div>
  );
};

export default TicketHeader;
