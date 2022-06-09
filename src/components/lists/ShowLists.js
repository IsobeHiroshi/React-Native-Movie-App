import React from 'react';
import { FlatList } from 'native-base';

import ShowCard from "../listItems/ShowCard";


const ShowLists = ({showArr, category})=> {
  return(
    <FlatList
      data={showArr}
      width="85%"
      mt={8}
      keyExtractor={(show) => show.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <ShowCard
            title={category == 'movie' ? item.original_title : item.name}
            img={item.poster_path}
            popularity={item.popularity}
            releaseDate={item.release_date}
          />
        );
      }}
    />
  );
}

export default ShowLists;