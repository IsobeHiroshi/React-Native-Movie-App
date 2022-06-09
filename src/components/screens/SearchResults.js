import React, { useState } from "react";
import { Center, Box, Text, Button, Flex } from 'native-base';
import { FontAwesome } from "@expo/vector-icons";

import SearchBar from '../forms/SearchBar';
import SearchTypeSelector from '../forms/SearchTypeSelector';

const SearchResults = ({options, defaultOptionIndex}) => {

  let [type, setType] = useState(options[defaultOptionIndex].searchBy);
  let [keyword, setKeyword] = useState('')

  return (
    <Center width="85%">
      <Box height="30%" mt={2}>
        <SearchBar setKeyword={setKeyword} />
        <Flex
          direction="row"
          justify="space-between"
          align="flex-end"
          width='60%'>
          <SearchTypeSelector
            type={type}
            setType={setType}
            options={options}/>
          <Button
            width="50%"
            onPress={()=>console.log(`type: ${type}, keyword: ${keyword}`)}>
            <Flex direction="row" >
              <FontAwesome name="search" size={20} color="white" />
              <Text ml={2} color="white">
                Search
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Box>
      <Box height="67%" width="100%" mt={2}>
        <Center>
          <Text mt={5} fontSize={22} fontWeight="bold">
            Please Initiate A Search.
          </Text>
        </Center>
      </Box>
    </Center>
  );
};
export default SearchResults;
