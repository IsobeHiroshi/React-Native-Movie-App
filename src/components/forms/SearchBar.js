import React from 'react';
import { FormControl, Flex, Input } from 'native-base';
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ setKeyword, errors })=> {
  return (
    <FormControl width="85%" isRequired>
      <FormControl.Label>Search Movie/TV Show Name</FormControl.Label>
      <Flex
        direction="row"
        backgroundColor="#e1e3e1"
        width="100%"
        align="center"
        px={3}
        borderColor="#f01111"
        borderWidth={errors.name ? "1" : "0"}
      >
        <FontAwesome name="search" size={20} color="#919191" />
        <Input
          variant="unstyled"
          placeholder="i.e. James Bond, CSI"
          width="100%"
          onChangeText={(value) => {
            setKeyword(value);
          }}
        />
      </Flex>
    </FormControl>
  );
}

export default SearchBar;