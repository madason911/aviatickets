import React from "react";
import styles from "./segmentHeader.module.css";

const SegmentHeader = ({
  departureCity,
  departureAirport,
  arrivalCity,
  arrivalAirport,
}) => {
  return (
    <div className="ticket-segment_header p-2">
      <p>
        {`${departureCity?.caption}, ${departureAirport?.caption} `}
        <span className={styles.airport_uid}>
          {`(${departureAirport.uid})`} &#8594;{" "}
        </span>
        {`${arrivalCity?.caption}, ${arrivalAirport?.caption} `}
        <span className={styles.airport_uid}>{`(${arrivalAirport.uid})`}</span>
      </p>
      <hr />
    </div>
  );
};

export default SegmentHeader;
