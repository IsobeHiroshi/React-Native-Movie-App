import React from 'react';
import { Select, Center, Box, CheckIcon, FlatList } from 'native-base';

const Selector = ({options, sortBy, setSortBy}) => {
  return (
    <Center>
      <Box w='3/4' maxW='300'>
        <Select
          selectedValue={sortBy}
          minWidth='200'
          accessibilityLabel='Choose Service'
          placeholder='Choose Service'
          _selectedItem={{
            bg: 'teal.600',
            endIcon: <CheckIcon size='5' color='#fff' />,
            _text: { color: 'white' },
          }}
          mt={1}
          onValueChange={(sortByValue) => setSortBy(sortByValue)}
        >
          {options.map((option) => {
            return (
              <Select.Item
                key={option.key}
                label={option.sortBy}
                value={option.sortBy}
              />
            );
          })}
        </Select>
      </Box>
    </Center>
  );
};

export default Selector;
