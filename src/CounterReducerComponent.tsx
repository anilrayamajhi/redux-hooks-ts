import React, { useReducer } from "react";

interface IAction {
  type: string;
  payload: any;
}

export function CounterReducerComponent(): JSX.Element {
  const initialState: number = 0,
    reducer = (state: number, action: IAction): number => {
      switch (action.type) {
        case "ADD":
          return state + 1;
        case "SUB":
          return state - 1;
        case "RES":
          return 0;
        default:
          return state;
      }
    };
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <div>{count}</div>
      <br />
      <div>
        <button onClick={() => dispatch({ type: "ADD", payload: 0 })}>+</button>
        <button onClick={() => dispatch({ type: "SUB", payload: 0 })}>-</button>
        <button onClick={() => dispatch({ type: "RES", payload: 0 })}>x</button>
      </div>
    </>
  );
}
