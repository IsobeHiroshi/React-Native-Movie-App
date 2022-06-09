import React, { useState, useEffect } from 'react';
import { Text, Spinner, Center, Flex } from 'native-base';
import axios from 'axios'

import Selector from '../forms/Selector';
import ShowLists from '../lists/ShowLists';

import { API_KEY, BASE_URL } from '../../config/api_config';

const Shows = ({ options, defaultOptionIndex, category }) => {

  const [showArr, setShowArr] = useState([]);
  const [sortBy, setSortBy] = useState(options[defaultOptionIndex].sortBy);
  const [isLoading, setIsLoading] = useState(false)

  const loadShows = ()=> {
    setIsLoading(true)
    axios
      .get(
        `${BASE_URL}/${category}/${sortBy}?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((result) => {
        setShowArr(result.data.results);
      })
      .then((result) => setIsLoading(false))
      .catch((error) => console.log(error));
  }

  useEffect(loadShows, [sortBy]);

  if (isLoading) {
    return (
      <Flex direction='row'>
        <Spinner accessibilityLabel='loading shows'/>
        <Text ml={2}>Loading...</Text>
      </Flex>
    );
  } else {
    return (
      <>
        <Center mb={10}>
          <Selector options={options} sortBy={sortBy} setSortBy={setSortBy} />
        </Center>
        <Center width='85%' height='85%'>
          <ShowLists showArr={showArr} category={category} />
        </Center>
      </>
    );
  }
};

export default Shows;
