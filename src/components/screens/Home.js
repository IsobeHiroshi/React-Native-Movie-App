import React from "react";
import {
  Dimensions,
  StatusBar,
  Animated,
  Pressable,
} from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import {
  NativeBaseProvider,
  Box,
  Center,
  useColorModeValue,
} from "native-base";

/* ==================================================
    Components import
================================================== */

import Movies from "./Movies";
import SearchResults from './SearchResults';
import TVShows from './TVShows';


const FirstRoute = () => (
  <Center flex={1} my="4">
    <Movies/>
  </Center>
);

const SecondRoute = () => (
  <Center flex={1} my="4">
    <SearchResults />
  </Center>
);

const ThirdRoute = () => (
  <Center flex={1} my="4">
    <TVShows />
  </Center>
);


const initialLayout = {
  width: Dimensions.get("window").width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
});

function TabBar() {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      title: "Movies",
    },
    {
      key: "second",
      title: "Search Results",
    },
    {
      key: "third",
      title: "TV Shows",
    },
  ]);

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row">
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
              inputIndex === i ? 1 : 0.5
            ),
          });
          const color =
            index === i
              ? useColorModeValue("#000", "#e5e5e5")
              : useColorModeValue("#a1a1aa", "#a1a1aa");
          const borderColor =
            index === i
              ? "#2c3e50"
              : useColorModeValue("coolGray.200", "gray.400");
          return (
            <Box
              key={i}
              borderBottomWidth="3"
              borderColor={borderColor}
              flex={1}
              alignItems="center"
              p="3"
              cursor="pointer"
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

const Home = () => {
  return (
    <NativeBaseProvider>
      <TabBar />
    </NativeBaseProvider>
  );
};

export default Home;