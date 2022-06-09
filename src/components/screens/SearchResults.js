import React, { useState } from 'react';
import axios from 'axios';
import { Center, Box, Text, Button, Flex, FormControl } from 'native-base';
import { FontAwesome } from '@expo/vector-icons';

import { API_KEY, BASE_URL } from '../../config/api_config';

import SearchBar from '../forms/SearchBar';
import SearchTypeSelector from '../forms/SearchTypeSelector';
import ShowLists from '../lists/ShowLists'

const SearchResults = ({options, defaultOptionIndex, navigation}) => {

  const [type, setType] = useState(options[defaultOptionIndex].searchBy);
  const [keyword, setKeyword] = useState();
  const [showArr, setShowArr] = useState();
  const [errors, setErrors] = useState({});

  const validateForm = ()=> {
    if(!type){
      setErrors({
        ...errors, name: 'Movie/TV show name is required'
      })
      return false;
    }
    return true;
  }

  const loadSearchShows = ()=> {
    validateForm() ?
    axios.get(
    `${BASE_URL}/search/${type}?api_key=${API_KEY}&language=en-US&page=1&query=${keyword}`)
    .then((result)=>{
      setShowArr(result.data.results)
      setErrors({})
    })
    .catch(error=>console.log(error))
    :
    console.log('Search form validation error');
  }

  return (
    <Center width='85%'>
      <Box height='20%' mt={2}>
        <SearchBar setKeyword={setKeyword} errors={errors} />
        <Flex
          direction='row'
          justify='space-between'
          align='flex-end'
          width='60%'
        >
          <SearchTypeSelector
            type={type}
            setType={setType}
            options={options}
            errors={errors}
          />
          <Button width='50%' onPress={() => loadSearchShows()}>
            <Flex direction='row'>
              <FontAwesome name='search' size={20} color='white' />
              <Text ml={2} color='white'>
                Search
              </Text>
            </Flex>
          </Button>
        </Flex>
      </Box>
      <Flex justify='flex-start' width='90%' height='2%'>
        {errors.name && (
          <Text color='#f01111' fontSize={11}>
            {errors.name}
          </Text>
        )}
      </Flex>
      <Box height='69%' width='100%' mb={5} mt={8}>
        <Center>
          {showArr ? (
            <ShowLists showArr={showArr} category={type} navigation={navigation}/>
          ) : (
            <Text mt={5} fontSize={22} fontWeight='bold'>
              Please Initiate A Search.
            </Text>
          )}
        </Center>
      </Box>
    </Center>
  );
};
export default SearchResults;
