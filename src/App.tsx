import React from "react";

import { useStore } from "./store/Store";
// import { CounterReducerComponent } from "./CounterReducerComponent";
import "./App.css";

const App = (): JSX.Element => {
  const store = useStore();
  console.log(store);
  return (
    <div className="App">
      {/* <CounterReducerComponent /> */}
      <h1>GI</h1>
    </div>
  );
};

export default App;
