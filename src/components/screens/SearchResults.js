import { Text } from "native-base";

import Selector from "../forms/Selector.js";

const SearchResults = () => {
  const selectOptions = [
    {
      key: 1,
      option: "movie",
    },
    {
      key: 2,
      option: "multi",
    },
    {
      key: 3,
      option: "tv",
    },
  ];
  
  return (
    <>
      <Text>Search Results page</Text>
      <Selector options={selectOptions} />
    </>
  );

};

export default SearchResults;
