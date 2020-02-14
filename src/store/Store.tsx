import React, { createContext, useContext, useReducer } from "react";
import { IState, IAction } from "../interfaces";

const initialState: IState = { episodes: [], favorites: [] };

const Store = createContext<IState | any>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    case "ERROR":
      console.log("FMN");
      return state;
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <Store.Provider value={{ state, dispatch }}>
      {props.children}
    </Store.Provider>
  );
}

export const useStore = () => useContext(Store);
