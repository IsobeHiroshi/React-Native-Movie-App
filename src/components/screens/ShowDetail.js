import React, { useEffect, useState } from 'react';
import { Text, Center, Image, Box, Flex } from 'native-base';
import axios from 'axios';

import { API_KEY, BASE_URL } from "../../config/api_config";

const ShowDetail = ({route})=> {
  const { id, category } = route.params;

  const [showDetail, setShowDetail] = useState()

  const loadShowDetail = ()=> {
    axios.get(
      `${BASE_URL}/${category}/${id}?api_key=${API_KEY}&language=en-US`
    ).then((result)=>{
      setShowDetail(result.data);
    }).catch(error=>console.log(error));
  }

  useEffect(loadShowDetail, [])

  return (
    <Center>
      {showDetail && (
        <>
          <Text fontWeight="bold" fontSize={20} mb={10} mt={10}>
            {showDetail.title ? showDetail.title : showDetail.name}
          </Text>
          {showDetail.poster_path ? (
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/original${showDetail.poster_path}`,
              }}
              height={250}
              width={250}
              alt={showDetail.title ? showDetail.title : showDetail.name}
              mb={8}
            />
          ) : (
            <Flex
              height={250}
              width={250}
              mb={8}
              justify="center"
              align="center"
              bg="#919191"
            >
              <Text color="white">Image not available</Text>
            </Flex>
          )}
          <Box width="75%" mb={5}>
            <Text>{showDetail.overview}</Text>
          </Box>
          <Box width="75%">
            <Text fontSize={12}>
              Popularity: {showDetail.popularity} | Release Date:{" "}
              {showDetail.releaseDate}
            </Text>
          </Box>
        </>
      )}
    </Center>
  );
}

export default ShowDetail;

{
  /* <Center>
      <Text fontWeight='bold' fontSize={20} mb={10} mt={10}>
        {title}
      </Text>
      <Image
        source={{ uri: imgUrl }}
        height={250}
        width={250}
        alt={title}
        mb={8}
      />
      <Box width='75%' mb={5}>
        <Text>{overview}</Text>
      </Box>
      <Box width='75%'>
        <Text fontSize={12}>
          Popularity: {popularity} | Release Date: {releaseDate}
        </Text>
      </Box>
    </Center> */
}