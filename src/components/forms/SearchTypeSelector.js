import React from 'react';
import { FormControl, Flex, Select, Button, Text, CheckIcon } from "native-base";
import { FontAwesome } from "@expo/vector-icons";


const SearchTypeSelector = ({type, setType, options})=> {

  return (
    <FormControl width="85%" isRequired mt={3}>
        <FormControl.Label>Choose Search Type</FormControl.Label>
        <Flex direction="row" justify="space-between" align='center'>
          <Select
            selectedValue={type}
            minWidth="60%"
            accessibilityLabel="Choose Search Type"
            placeholder="Choose Service"
            _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size="5" color="#fff" />,
              _text: { color: "white" },
            }}
            mr={2}
            onValueChange={(typeValue) => setType(typeValue)}
          >
            {options.map((option) => {
              return (
                <Select.Item
                  key={option.key}
                  label={option.searchType}
                  value={option.searchType}
                />
              );
            })}
          </Select>
          <Button width="38%">
            <Flex direction="row">
              <FontAwesome name="search" size={20} color="white" />
              <Text ml={2} color="white">
                Search
              </Text>
            </Flex>
          </Button>
        </Flex>
    </FormControl>
  );
}

export default SearchTypeSelector;