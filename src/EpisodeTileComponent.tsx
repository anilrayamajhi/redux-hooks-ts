import React from "react";
import { IEpisode } from "./interfaces";

const puke = (obj: any) => <pre>{JSON.stringify(obj, null, " ")}</pre>;

export function EpisodeTileComponent({ name, ...prop }: IEpisode): JSX.Element {
  return (
    <div>
      <h4>{name} </h4>
      {puke(prop)}
    </div>
  );
}

// Type can not be specified multiple times.
// export function EpisodeTileComponent(
//   { name }: IEpisode,
//   prop: IEpisode
// ): JSX.Element {
//   return (
//     <div>
//       <h4>{name} </h4>
//       {puke(prop)}
//     </div>
//   );
// }
