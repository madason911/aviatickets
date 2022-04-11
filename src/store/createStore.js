import ticketsReducer from "./tickets";

const { combineReducers, configureStore } = require("@reduxjs/toolkit");

const rootReducer = combineReducers({
  tickets: ticketsReducer,
});

export function createStore() {
  return configureStore({
    reducer: rootReducer,
  });
}
