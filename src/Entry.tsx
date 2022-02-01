import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import HomeScreen from "./screens/HomeScreen";
import DefaultScreen from "./App";

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
    Home: undefined;
    Default: undefined;
};

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Default" component={DefaultScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;