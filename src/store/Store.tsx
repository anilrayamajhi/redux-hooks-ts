import React, { createContext, useContext } from "react";

interface IState {
  episodes: [];
  favorites: [];
}

interface IAction {
  type: string;
  payload: any;
}

const initialState: IState = { episodes: [], favorites: [] };

const Store = createContext<IState>(initialState);

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case "FETCH_DATA":
      return { ...state, episodes: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props: any): JSX.Element {
  return <Store.Provider value={initialState}>{props.children}</Store.Provider>;
}

export const useStore = () => useContext<IState>(Store);
