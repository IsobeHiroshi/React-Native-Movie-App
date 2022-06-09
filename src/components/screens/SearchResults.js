import React, { useState } from "react";
import { Center, Box, Text } from 'native-base';

import SearchBar from '../forms/SearchBar';
import SearchTypeSelector from '../forms/SearchTypeSelector';

const SearchResults = ({options, defaultOptionIndex}) => {

  let [type, setType] = useState(options[defaultOptionIndex].searchBy);
  let [keyword, setKeyword] = useState('')

  return (
    <Center width="85%">
      <Box height="30%" mt={2}>
        <SearchBar
          setKeyword={setKeyword}
        />
        <SearchTypeSelector
          type={type}
          setType={setType}
          options={options}
        />
      </Box>
      <Box height="67%" width="100%" mt={2}>
        <Center>
          <Text mt={5} fontSize={22} fontWeight='bold'>Please Initiate A Search.</Text>
        </Center>
      </Box>
    </Center>
  );
};
export default SearchResults;
