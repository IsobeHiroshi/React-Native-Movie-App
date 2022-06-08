import React, { useState, useEffect } from 'react';
import { Text, Spinner, FlatList, Flex } from 'native-base';
import axios from 'axios'

import Selector from '../forms/Selector';
import MovieCard from '../listItems/MovieCard';

import { API_KEY, BASE_URL } from '../../config/api_config';

const Movies = () => {

  const selectOptions = [
    {
      key: 1,
      sortBy: 'now_playing',
    },
    {
      key: 2,
      sortBy: 'popular',
    },
    {
      key: 3,
      sortBy: 'top_rated',
    },
    {
      key: 3,
      sortBy: 'upcoming',
    },
  ];

  const [movieArr, setMovieArr] = useState([]);
  const [sortBy, setSortBy] = useState(selectOptions[1].sortBy);
  const [isLoading, setIsLoading] = useState(false)

  const loadMovies = ()=> {
    setIsLoading(true)
    axios
      .get(
        `${BASE_URL}/${sortBy}?api_key=${API_KEY}&language=en-US&page=1`
      )
      .then((result) => {
        setMovieArr(result.data.results);
      }).then((result) => setIsLoading(false))
      .catch((error) => console.log(error));
  }

  useEffect(loadMovies, [sortBy]);

  if (isLoading) {
    return (
      <Flex direction='row'>
        <Spinner accessibilityLabel='loading movies'/>
        <Text ml={2}>Loading...</Text>
      </Flex>
    );
  } else {
    return (
      <>
        <Selector
          options={selectOptions}
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
        <FlatList
          data={movieArr}
          width='85%'
          mt={8}
          keyExtractor={(movie) => movie.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => {
            return (
              <MovieCard
                title={item.original_title}
                img={item.poster_path}
                popularity={item.popularity}
                releaseDate={item.release_date}
              />
            );
          }}
        />
      </>
    );
  }
};

export default Movies;
