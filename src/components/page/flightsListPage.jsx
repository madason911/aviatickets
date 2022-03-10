import React, { useState } from "react";
import flights from "../../db/flights.json";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/pagination";
import Filters from "../filters/filters";
import TicketList from "../ui/ticketList";

const FlightsListPage = () => {
  const [selectedAirline, setSelectedAirline] = useState([]);
  const [selectedTransfer, setSelectedTransfer] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ path: "amount", order: "asc" });
  const [amountState, setAmountState] = useState({
    lower: "0",
    upper: "1000000",
  });
  const [flightList] = useState(flights.result.flights.slice(0, 50));
  const [airlineState] = useState(getAirlines(flights.result.flights));
  const pageSize = 8;

  function getAirlines(data) {
    const result = {};

    data.forEach((item) => {
      const { flight } = item;
      const key = flight.carrier.caption;
      const flightAmount = flight.price.total.amount;
      if (!result[key]) {
        result[key] = +flightAmount;
      } else {
        result[key] = Math.min(+result[key], +flightAmount);
      }
    });

    return result;
  }

  function filterTransfer(data) {
    if (selectedTransfer === "noneTransfer") {
      return data.filter((item) => {
        const { flight } = item;
        return (
          flight.legs[0].segments.length === 1 &&
          flight.legs[1].segments.length === 1
        );
      });
    }
    if (setSelectedTransfer === "oneTrasfer") {
      return data.filter((item) => {
        const { flight } = item;
        return (
          flight.legs[0].segments.length === 2 ||
          flight.legs[1].segments.length === 2
        );
      });
    }
    return data;
  }

  const filterAirlines = (data, airlines) => {
    if (airlines.length) {
      return data.filter((item) => {
        return airlines.includes(item.flight.carrier.caption);
      });
    }
    return data;
  };

  const isValidInput =
    +amountState.lower < +amountState.upper &&
    !isNaN(Number(amountState.lower)) &&
    !isNaN(Number(amountState.upper));

  const filterFlightsByAmount = (data) => {
    if (isValidInput) {
      return data.filter((item) => {
        const { flight } = item;
        const amount = +flight.price.total.amount;
        return amount > +amountState.lower && amount < +amountState.upper;
      });
    }
    return data;
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
        ...array.sort((a, b) => {
          return (
            a.flight.legs[0].duration +
            a.flight.legs[1].duration -
            (b.flight.legs[0].duration + b.flight.legs[1].duration)
          );
        }),
      ];
    }
    return [...array];
  };
  const wrapper = {
    width: "max-content",
    fontFamily: "Roboto",
    background: "#f0f1f4",
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  const handleAmountChange = (e) => {
    setAmountState((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleAirlineChange = (e) => {
    if (e.target.checked) {
      setSelectedAirline((prev) => [...prev, e.target.name]);
    } else {
      setSelectedAirline((prev) =>
        prev.filter((item) => item !== e.target.name)
      );
    }
  };

  const handleTransferChange = (item) => {
    setSelectedTransfer(item);
  };

  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex);
  };

  const filteredFlights = filterFlightsByAmount(flightList);
  const newFilteredFlights = filterAirlines(filteredFlights, selectedAirline);

  const newList = flightsSorting(newFilteredFlights, sortBy.path, sortBy.order);
  const updatedList = filterTransfer(newList);

  const flightsCount = updatedList.length;
  const flightsCrop = paginate(updatedList, currentPage, pageSize);

  return (
    <div
      className="container p-3 d-flex justify-content-around"
      style={wrapper}
    >
      <Filters
        onSort={handleSort}
        onAmountChange={handleAmountChange}
        onAirlineChange={handleAirlineChange}
        onTransferChange={handleTransferChange}
        defaultAmountState={amountState}
        airlineState={airlineState}
        isValidInput={isValidInput}
      />
      <div>
        <TicketList flights={flightsCrop} />
        <div className="d-flex justify-content-center">
          <Pagination
            onPageChange={handlePageChange}
            itemsCount={flightsCount}
            pageSize={pageSize}
            currentPage={currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default FlightsListPage;
