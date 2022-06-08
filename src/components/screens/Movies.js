import React from "react";
import { Text } from "native-base";

import Selector from "../forms/Selector";

const Movies = () => {

  const selectOptions = [
    {
      key: 1,
      option: "now_playing",
    },
    {
      key: 2,
      option: "popular",
    },
    {
      key: 3,
      option: "top_rated",
    },
    {
      key: 3,
      option: "upcoming",
    },
  ];

  return (
    <>
      <Text>Movie page</Text>
      <Selector options={selectOptions}/>
    </>
  );
};

export default Movies;
