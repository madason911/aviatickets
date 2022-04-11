import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Flights from "./layouts/flights";
import { getTicketsStatus, laodTicketsList } from "./store/tickets";

function App() {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(getTicketsStatus());
  useEffect(() => {
    dispatch(laodTicketsList());
  }, []);

  return <>{loadingStatus ? <h1>Идет загрузка</h1> : <Flights />};</>;
}

export default App;
