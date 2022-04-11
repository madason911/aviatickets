import { createSlice } from "@reduxjs/toolkit";
import flights from "../db/flights.json";

const ticketsSlice = createSlice({
  name: "tickets",
  initialState: {
    entities: null,
    isLoading: true,
    error: null,
  },
  reducers: {
    ticketsRequested: (state) => {
      state.isLoading = true;
    },
    ticketsReceved: (state, action) => {
      state.entities = action.payload;
      state.isLoading = false;
    },
    ticketsRequestFailed: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

const { reducer: ticketsReducer, actions } = ticketsSlice;
const { ticketsRequested, ticketsReceved, ticketsRequestFailed } = actions;

export const laodTicketsList = () => (dispatch) => {
  dispatch(ticketsRequested());
  try {
    dispatch(ticketsReceved(flights.result.flights));
  } catch (error) {
    dispatch(ticketsRequestFailed(error.message));
  }
};

export const getTickets = () => (state) => state.tickets.entities;

export const getTicketsStatus = () => (state) => state.tickets.isLoading;

export const getAirlines = () => (state) => {
  const result = {};

  state.tickets.entities.forEach((item) => {
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
};

export default ticketsReducer;
