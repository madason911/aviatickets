import React, { useState } from "react";
import { useSelector } from "react-redux";
import { isValidAmountState } from "../../store/amountState";
import { getTickets } from "../../store/tickets";
import { paginate } from "../../utils/paginate";
import Pagination from "../common/pagination";
import Filters from "../filters/filters";
import TicketList from "../ui/ticketList";
import styles from "./flightsListPage.module.css";

const FlightsListPage = () => {
  const [selectedAirlines, setSelectedAirlines] = useState([]);
  const [selectedTransfer, setSelectedTransfer] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState({ path: "amount", order: "asc" });
  const isValid = useSelector(isValidAmountState());
  const amountState = useSelector((state) => state.amountState);
  const flightList = useSelector(getTickets());
  const pageSize = 8;

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
    if (selectedTransfer === "oneTransfer") {
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

  // const isValidInput =
  //   +amountState.lower < +amountState.upper &&
  //   !isNaN(Number(amountState.lower)) &&
  //   !isNaN(Number(amountState.upper));

  const filterAmount = (data) => {
    if (isValid) {
      return data.filter((item) => {
        const { flight } = item;
        const amount = +flight.price.total.amount;
        return amount > +amountState.lower && amount < +amountState.upper;
      });
    }
    return data;
  };

  const flightsSorting = (array, path, order) => {
    const newArr = [...array];
    if (newArr.length) {
      if (path === "amount") {
        if (order === "asc") {
          return [
            ...newArr.sort(
              (a, b) =>
                +a.flight.price.total.amount - +b.flight.price.total.amount
            ),
          ];
        }
        if (order === "desc") {
          return [
            ...newArr.sort(
              (a, b) =>
                +b.flight.price.total.amount - +a.flight.price.total.amount
            ),
          ];
        }
      }
      if (path === "duration") {
        return [
          ...newArr.sort((a, b) => {
            return (
              a.flight.legs[0].duration +
              a.flight.legs[1].duration -
              (b.flight.legs[0].duration + b.flight.legs[1].duration)
            );
          }),
        ];
      }
    }

    return newArr;
  };

  const handleSort = (item) => {
    setSortBy(item);
  };

  const handleAirlineChange = (e) => {
    if (e.target.checked) {
      setSelectedAirlines((prev) => [...prev, e.target.name]);
    } else {
      setSelectedAirlines((prev) =>
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

  function filterFlights(data) {
    let filteredFlights = data;
    if (selectedTransfer) {
      filteredFlights = filterTransfer(filteredFlights);
    }
    if (selectedAirlines.length !== 0) {
      filteredFlights = filterAirlines(filteredFlights, selectedAirlines);
    }
    if (amountState.lower !== "0" || amountState.upper !== "1000000") {
      filteredFlights = filterAmount(filteredFlights);
    }

    return filteredFlights;
  }

  const filteredFlightsList = filterFlights(flightList);
  const sortedFlights = flightsSorting(
    filteredFlightsList,
    sortBy.path,
    sortBy.order
  );

  const flightsCount = sortedFlights.length;
  const flightsCrop = paginate(sortedFlights, currentPage, pageSize);

  return (
    <div
      className={`container p-3 d-flex justify-content-around ${styles.wrapper}`}
    >
      <Filters
        onSort={handleSort}
        onAirlineChange={handleAirlineChange}
        onTransferChange={handleTransferChange}
        ??mountState={amountState}
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
