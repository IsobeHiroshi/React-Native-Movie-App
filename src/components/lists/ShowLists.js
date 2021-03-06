import React from 'react';
import { FlatList } from 'native-base';

import ShowCard from '../listItems/ShowCard';


const ShowLists = ({showArr, navigation, category})=> {

  return(
    <FlatList
      data={showArr}
      keyExtractor={(show) => show.id}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => {
        return (
          <ShowCard
            title={item.title ? item.title : item.name}
            img={item.poster_path}
            popularity={item.popularity}
            releaseDate={item.release_date}
            overview={item.overview}
            id={item.id}
            navigation={navigation}
            category={category === 'multi' ? item.media_type : category}
          />
        );
      }}
    />
  );
}

export default ShowLists;