import React from 'react';
import { Text, Center, Image, Box } from 'native-base';

const ShowDetail = ({route})=> {
  const { title, imgUrl, popularity, releaseDate, overview } = route.params;
  return (
    <Center>
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
    </Center>
  );
}

export default ShowDetail;