import React from "react";
import moment from "moment/min/moment-with-locales.min";

const SegmentBody = ({ departureDate, legDuration, arrivalDate }) => {
  moment.locale("ru");
  const depDate = moment(departureDate).format("D MMM ddd");
  const depTime = moment(departureDate).format("hh:mm");
  const arrDate = moment(arrivalDate).format("D MMM ddd");
  const arrTime = moment(arrivalDate).format("hh:mm");
  //   console.log(date.format("hh:mm, D MMM ddd"));

  const separator = {
    borderBottom: "1px solid",
  };
  return (
    <>
      <div className="ticket-segment_body d-flex justify-content-between p-2">
        <div className="segment-body_endpoint origin d-flex">
          {/* <span>20:40 --</span>
                <p>18 авг. вт</p> */}
          <p>
            {depTime}
            <span className="text-primary ms-1">{depDate}</span>
          </p>
        </div>
        <div className="segment-body_route-time">
          <span>
            &#128338;{" "}
            {`${Math.floor(legDuration / 60)} ч ${legDuration % 60} мин`}
          </span>
        </div>
        <div className="segment-body_endpoint destination d-flex">
          {/* <p>19 авг. ср --</p>
                <span> 09:25</span> */}
          <p>
            <span className="text-primary me-1">{arrDate}</span>
            {arrTime}
          </p>
        </div>
      </div>
      <div style={separator}></div>
    </>
  );
};

export default SegmentBody;
