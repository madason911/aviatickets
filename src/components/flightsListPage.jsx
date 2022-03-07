import React, { useEffect, useState } from "react";
import flights from "../db/flights.json";
import Filters from "./filters";
import TicketList from "./ticketList";
import _, { parseInt } from "lodash";

const FlightsListPage = () => {
  const [selectedTransferCount, setSelectedTransferCount] = useState(2);
  const [sortBy, setSortBy] = useState({ path: "amount", order: "asc" });
  const [amountState, setAmountState] = useState({
    lower: "0",
    upper: "1000000",
  });
  const [flightList, setFlightList] = useState(
    flights.result.flights.slice(0, 5)
  );

  function filterFlightsByTransferCount() {
    const filteredFlights =
      selectedTransferCount === 1
        ? flightList.filter((item) => {
            const { flight } = item;
            console.log(
              flight.legs[0].segments.length === 1 &&
                flight.legs[1].segments.length === 1
            );
            return (
              flight.legs[0].segments.length === 1 &&
              flight.legs[1].segments.length === 1
            );
          })
        : flightList.filter((item) => {
            const { flight } = item;
            console.log("HERE2");
            return (
              flight.legs[0].segments.length === 2 ||
              flight.legs[1].segments.length === 2
            );
          });
    return filteredFlights;
  }

  const filterFlightsByAmount = (data) => {
    return data.filter((item) => {
      const { flight } = item;
      const amount = +flight.price.total.amount;
      return amount > +amountState.lower && amount < +amountState.upper;
    });
  };

  const flightsSorting = (array, path, order) => {
    if (path === "amount") {
      if (order === "asc") {
        return [
          ...array.sort(
            (a, b) =>
              +a.flight.price.total.amount - +b.flight.price.total.amount
          ),
        ];
      }
      if (order === "desc") {
        return [
          ...array.sort(
            (a, b) =>
              +b.flight.price.total.amount - +a.flight.price.total.amount
          ),
        ];
      }
    }
    if (path === "duration") {
      return [
        ...array.sort(
          (a, b) =>
            a.flight.legs[0].duration +
            a.flight.legs[1].duration -
            (b.flight.legs[0].duration + b.flight.legs[1].duration)
        ),
      ];
    }
    return [...array];
  };

  useEffect(() => {
    const newList = flightsSorting(flightList, sortBy.path, sortBy.order);
    setFlightList(newList);
  }, [sortBy]);

  const handleSort = (item) => {
    setSortBy(item);
  };

  // const filteredFlights = filterFlightsByTransferCount(flightList);
  const filteredFlights = filterFlightsByAmount(flightList);
  console.log(flightList);

  const wrapper = {
    width: "max-content",
    fontFamily: "Roboto",
    background: "#f0f1f4",
  };
  console.log(filteredFlights);

  const handleChange = (e) => {
    setAmountState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="container p-3 d-flex" style={wrapper}>
      <Filters
        onSort={handleSort}
        onChange={handleChange}
        defaultAmountState={amountState}
      />
      <TicketList flights={filteredFlights} />
    </div>
  );
};

export default FlightsListPage;
