import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from '../screens/Home'
import ShowDetail from '../screens/ShowDetail';


const Stack = createNativeStackNavigator();

const AppStack = () => (
  <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: "Movies App",
          headerStyle: {
            backgroundColor: "#2c3e50",
          },
          headerTitleStyle: {
            color: "#fff",
          },
        }}
      />
      <Stack.Screen
        name="showDetail"
        component={ShowDetail}
        options={({ route }) => ({
          title: route.params.title,
          headerBackTitle: "Back to List",
        })}
      />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppStack;
