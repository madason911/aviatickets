import React from "react";
import SegmentBody from "./ticketSegments/segmentBody";
import SegmentFooter from "./ticketSegments/segmentFooter";
import SegmentHeader from "./ticketSegments/segmentHeader";
import styles from "./ticketLegs.module.css";
import { getLegData } from "../../utils/getLegData";

const TicketLegs = ({ legs }) => {
  return (
    <div className={styles.ticket_legs}>
      {legs.map((leg, index) => {
        const {
          departureCity,
          departureAirport,
          arrivalCity,
          arrivalAirport,
          departureDate,
          arrivalDate,
          legDuration,
          transferCount,
          airlineCaption,
        } = getLegData(leg);
        return (
          <div
            className={styles.ticket_leg}
            key={departureCity + departureDate}
          >
            <div
              className={
                "ticket-leg__segments " +
                (index === 0 ? styles.leg_border_bottom : null)
              }
            >
              <SegmentHeader
                departureCity={departureCity}
                departureAirport={departureAirport}
                arrivalCity={arrivalCity}
                arrivalAirport={arrivalAirport}
              />
              <SegmentBody
                departureDate={departureDate}
                legDuration={legDuration}
                arrivalDate={arrivalDate}
                transferCount={transferCount}
              />
              <SegmentFooter airlineCaption={airlineCaption} />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TicketLegs;
