import React from 'react';
import { Box, Text, Image, Button, Flex } from 'native-base';

const ShowCard = ({ title, img, popularity, releaseDate }) => {
  return (
    <Flex direction='row' mb={4}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/original/${img}`,
        }}
        alt={title}
        width='30%'
        height='auto'
        mr={3}
      />
      <Box width='70%'>
        <Text fontWeight='bold'>{title}</Text>
        <Text>Popularity: {popularity}</Text>
        <Text>Release Data: {releaseDate}</Text>
        <Button>
          <Text color='white'>More Details</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default ShowCard;