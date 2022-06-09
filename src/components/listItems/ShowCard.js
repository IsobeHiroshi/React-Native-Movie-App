import React from 'react';
import { Box, Text, Image, Button, Flex, Center } from 'native-base';

const ShowCard = ({ title, img, popularity, releaseDate }) => {
  return (
    <Flex direction="row" mb={4}>
      {img ? (
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original${img}`,
          }}
          alt={title}
          width="30%"
          height="auto"
          mr={3}
        />
      ) : (
        <Flex
          width="30%"
          height="auto"
          mr={3}
          justify="center"
          align="center"
          bg="#919191"
        >
          <Text color='white'>Image not available</Text>
        </Flex>
      )}
      <Box width="65%">
        <Text fontWeight="bold">{title}</Text>
        <Text>Popularity: {popularity}</Text>
        <Text>Release Data: {releaseDate}</Text>
        <Button>
          <Text color="white">More Details</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default ShowCard;