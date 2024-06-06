import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/components/HomeScreen';
import MorningAdhkar from './src/components/MorningAdhkar';
import EveningAdhkar from './src/components/EveningAdhkar';
// hi
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Morning Adhkar" component={MorningAdhkar} />
        <Stack.Screen name="Evening Adhkar" component={EveningAdhkar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
