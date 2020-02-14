import React, { useEffect } from "react";

import { useStore } from "./store/Store";
// import { CounterReducerComponent } from "./CounterReducerComponent";
import { EpisodeTileComponent } from "./EpisodeTileComponent";
import { IEpisode } from "./interfaces";
import "./App.css";

const App = (): JSX.Element => {
  const { state, dispatch } = useStore(),
    URL: any = process.env.REACT_APP_END_POINT;

  const fetchDataAction = async () => {
    let payload, type;
    try {
      const response = await fetch(URL);
      const json = await response.json();
      payload = json._embedded.episodes;
      type = "FETCH_DATA";
    } catch (e) {
      console.log("ERR N: ", e);
      type = "ERROR";
      payload = [];
    }

    return dispatch({
      type,
      payload
    });
  };

  useEffect(() => {
    state.episodes.length === 0 && fetchDataAction();
  }, []);

  return (
    <div>
      {console.log(state)}
      {/* <CounterReducerComponent /> */}
      <h1>GI</h1>
      <div>
        {state.episodes.map((el: IEpisode) => (
          <EpisodeTileComponent key={el.id} {...el} />
        ))}
      </div>
    </div>
  );
};

export default App;
