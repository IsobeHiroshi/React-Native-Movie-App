import React from 'react';
import { FormControl, Select, CheckIcon, Text } from 'native-base';


const SearchTypeSelector = ({type, setType, options, errors})=> {

  return (
    <FormControl isRequired mt={3}>
      <FormControl.Label>Choose Search Type</FormControl.Label>
      <Select
        selectedValue={type}
        accessibilityLabel='Choose Search Type'
        placeholder='Choose Service'
        _selectedItem={{
          bg: 'teal.600',
          endIcon: <CheckIcon size='5' color='#fff' />,
          _text: { color: 'white' },
        }}
        mr={2}
        onValueChange={(typeValue) => setType(typeValue)}
        borderColor={errors.name ? '#f01111' : '#969595'}
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
    </FormControl>
  );
}

export default SearchTypeSelector;