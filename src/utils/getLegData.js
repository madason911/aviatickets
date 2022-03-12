export function getLegData(leg) {
  const firstSegment = leg.segments[0];
  const lastSegment = leg.segments[leg.segments.length - 1];
  //Данные для SegmentHeader
  const { departureCity } = firstSegment;
  const { departureAirport } = firstSegment;
  const { arrivalCity } = lastSegment;
  const { arrivalAirport } = lastSegment;
  //Данные для SegmentBody
  const { departureDate } = firstSegment;
  const { arrivalDate } = lastSegment;
  const legDuration = leg.duration;
  const transferCount = leg.segments.length;
  //Данные для SegmentFooter
  const airlineCaption = leg.segments[0].airline.caption;

  return {
    departureCity,
    departureAirport,
    arrivalCity,
    arrivalAirport,
    departureDate,
    arrivalDate,
    legDuration,
    transferCount,
    airlineCaption,
  };
}
