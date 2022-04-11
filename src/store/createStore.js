import amountStateReducer from "./amountState";
import ticketsReducer from "./tickets";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  tickets: ticketsReducer,
  amountState: amountStateReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
