import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from "./screens/Home";
import DailyPic from "./screens/DailyPic";
import SpaceCraft from "./screens/SpaceCraft";
import StarMap from "./screens/StarMap";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="DailyPics" component={DailyPic} />
        <Stack.Screen name="Meteors" component={SpaceCraft} />
        <Stack.Screen name="Updates" component={StarMap} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;