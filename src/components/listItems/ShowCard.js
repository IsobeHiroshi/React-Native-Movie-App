import React from 'react';
import { Box, Text, Image, Button, Flex } from 'native-base';

const ShowCard = ({ title, img, popularity, releaseDate, id, navigation, category }) => {

  const imgUrl = `https://image.tmdb.org/t/p/original${img}`

  return (
    <Flex direction='row' mb={4}>
      {img ? (
        <Image
          source={{
            uri: imgUrl,
          }}
          alt={title}
          width='30%'
          height='auto'
          mr={3}
        />
      ) : (
        <Flex
          width='30%'
          height='auto'
          mr={3}
          justify='center'
          align='center'
          bg='#919191'
        >
          <Text color='white'>Image not available</Text>
        </Flex>
      )}
      <Box width='65%'>
        <Text fontWeight='bold'>{title}</Text>
        <Text>Popularity: {popularity}</Text>
        <Text>Release Data: {releaseDate}</Text>
        <Button
          onPress={() => {
            navigation.navigate('showDetail', {
              title: title,
              category: category,
              id: id
            });
          }}
        >
          <Text color='white'>More Details</Text>
        </Button>
      </Box>
    </Flex>
  );
};

export default ShowCard;