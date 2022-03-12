import moment from "moment/min/moment-with-locales.min";
moment.locale("ru");
export function getDateFormat(departureDate, arrivalDate) {
  const depDate = moment(departureDate).format("D MMM ddd");
  const depTime = moment(departureDate).format("hh:mm");
  const arrDate = moment(arrivalDate).format("D MMM ddd");
  const arrTime = moment(arrivalDate).format("hh:mm");

  return { depDate, depTime, arrDate, arrTime };
}
