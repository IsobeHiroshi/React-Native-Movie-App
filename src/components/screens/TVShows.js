import React from "react";
import { Text } from "native-base";

import Selector from "../forms/Selector";

const TVShows = () => {
  const selectOptions = [
    {
      key: 1,
      option: "airing_today",
    },
    {
      key: 2,
      option: "on_the_air",
    },
    {
      key: 3,
      option: "popular",
    },
    {
      key: 4,
      option: "top_rated",
    },
  ];
  return (
    <>
      <Text>TV Shows page</Text>
      <Selector options={selectOptions} />
    </>
  );
};

export default TVShows;
