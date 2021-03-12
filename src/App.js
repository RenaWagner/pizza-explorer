import AddPizzaForm from "./components/AddPizzaForm";
import PizzaList from "./components/PizzaList";
import "./App.scss";
import RestaurantList from "./components/RestaurantList";
import Ingredients from "./components/Ingredients";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { modeChangeDark, modeChangeLight } from "./store/modes/action";
import { selectMode } from "./store/modes/selectors";

function App() {
  const [mode, setMode] = useState("light");
  const dispatch = useDispatch();
  const darkmode = useSelector(selectMode);

  function modeButtonClicked() {
    if (mode === "light") {
      setMode("dark");
      dispatch(modeChangeDark("dark"));
    } else {
      setMode("light");
      dispatch(modeChangeLight("light"));
    }
  }

  return (
    <div className={darkmode ? "AppDark" : "AppLight"}>
      <div>
        <button onClick={modeButtonClicked}>
          {darkmode ? "Dark Mode" : "Light Mode"}
        </button>
        <PizzaList />
        <AddPizzaForm />
        <RestaurantList />
        <Ingredients />
      </div>
    </div>
  );
}

export default App;
