import React, { useState } from 'react';
import {
  Dimensions,
  StatusBar,
  Animated,
  Pressable,
} from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import {
  NativeBaseProvider,
  Box,
  Center,
  useColorModeValue,
} from 'native-base';

/* ==================================================
    Components import
================================================== */

import Shows from './Shows';
import SearchResults from './SearchResults';

const movieSelectorOptions = [
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

const TVShowSelectorOptions = [
  {
    key: 1,
    sortBy: 'airing_today',
  },
  {
    key: 2,
    sortBy: 'on_the_air',
  },
  {
    key: 3,
    sortBy: 'popular',
  },
];

const SearchSelectorOptions = [
  {
    key: 1,
    searchType: 'movie',
  },
  {
    key: 2,
    searchType: 'multi',
  },
  {
    key: 3,
    searchType: 'tv',
  },
];

const MoviePage = (navigation) => (
  <Center flex={1} mt={5}>
    <Shows
      options={movieSelectorOptions}
      defaultOptionIndex='1'
      category='movie'
      navigation={navigation}
      />
  </Center>
);

const SearchPage = (navigation) => (
  <Center flex={1} mt={2}>
    <SearchResults
      options={SearchSelectorOptions}
      defaultOptionIndex='1'
      navigation={navigation}
    />
  </Center>
);

const TVShowPage = (navigation) => (
  <Center flex={1} mt={2}>
    <Shows
      options={TVShowSelectorOptions}
      defaultOptionIndex='2'
      category='tv'
      navigation={navigation}
    />
  </Center>
);


const initialLayout = {
  width: Dimensions.get('window').width,
};

function TabBar({navigation}) {
  
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {
      key: 'first',
      title: 'Movies',
    },
    {
      key: 'second',
      title: 'Search Results',
    },
    {
      key: 'third',
      title: 'TV Shows',
    },
  ]);

  const renderScene = SceneMap({
    first: ()=>{
      return MoviePage(navigation)
    },
    second: ()=>{
      return SearchPage(navigation)
    },
    third: ()=>{
      return TVShowPage(navigation)
    }
  });

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection='row'>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === i
              ? useColorModeValue('#000', '#e5e5e5')
              : useColorModeValue('#a1a1aa', '#a1a1aa');
          const borderColor =
            index === i
              ? '#2c3e50'
              : useColorModeValue('coolGray.200', 'gray.400');
          return (
            <Box
              key={i}
              borderBottomWidth='3'
              borderColor={borderColor}
              flex={1}
              alignItems='center'
              p='3'
              cursor='pointer'
            >
              <Pressable
                onPress={() => {
                  setIndex(i);
                }}
              >
                <Animated.Text
                  style={{
                    color,
                  }}
                >
                  {route.title}
                </Animated.Text>
              </Pressable>
            </Box>
          );
        })}
      </Box>
    );
  };

  return (
    <TabView
      navigationState={{
        index,
        routes,
      }}
      renderScene={renderScene}
      renderTabBar={renderTabBar}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={{
        marginTop: StatusBar.currentHeight,
      }}
    />
  );
}

const Home = ({navigation}) => {
  return (
    <NativeBaseProvider>
        <TabBar navigation={navigation} />
    </NativeBaseProvider>
  );
};

export default Home;