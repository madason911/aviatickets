import React from "react";
import styles from "./segmentBody.module.css";
import { getDateFormat } from "../../../utils/getDateFormat";
import { getDurationFormat } from "../../../utils/getDurationFormat";

const SegmentBody = ({
  departureDate,
  legDuration,
  arrivalDate,
  transferCount,
}) => {
  const { depDate, depTime, arrDate, arrTime } = getDateFormat(
    departureDate,
    arrivalDate
  );

  return (
    <>
      <div className="ticket-segment_body d-flex justify-content-between p-2">
        <div className="segment-body_endpoint origin d-flex">
          <p>
            {depTime}
            <span className="text-primary ms-1">{depDate}</span>
          </p>
        </div>
        <div className="segment-body_route-time">
          <span>&#128338; {getDurationFormat(legDuration)}</span>
        </div>
        <div className="segment-body_endpoint destination d-flex">
          <p>
            <span className="text-primary me-1">{arrDate}</span>
            {arrTime}
          </p>
        </div>
      </div>

      <div className={styles.separator}>
        {transferCount === 1 ? (
          ""
        ) : (
          <p className={styles.transfer}>{`${transferCount - 1} пересадка`}</p>
        )}
      </div>
    </>
  );
};

export default SegmentBody;
