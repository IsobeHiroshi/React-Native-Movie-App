import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import AppStack from "./src/components/stacks/AppStack";

const App = () => {
  return (
    <NativeBaseProvider>
      <AppStack />
      <StatusBar style="light" />
    </NativeBaseProvider>
  );
};

export default App;
