import React from "react";
import { Select, Center, Box, CheckIcon, FlatList } from "native-base";

const Selector = ({options}) => {
  let [service, setService] = React.useState("");
  return (
    <Center>
      <Box w="3/4" maxW="300">
        <Select
          selectedValue={service}
          minWidth="200"
          accessibilityLabel="Choose Service"
          placeholder="Choose Service"
          _selectedItem={{
            bg: "teal.600",
            endIcon: <CheckIcon size="5" color="#fff"/>,
            _text: {color:"white"}
          }}
          mt={1}
          onValueChange={(itemValue) => setService(itemValue)}
        >
          {options.map(option=>{
            return (
              <Select.Item
                key={option.key}
                label={option.option}
                value={option.option}
              />
            );
          })}
        </Select>
      </Box>
    </Center>
  );
};

export default Selector;
