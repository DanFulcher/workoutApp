import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Store from './store/workoutStore';

import Archive from './pages/Archive';
import NewWorkout from './pages/NewWorkout';
import WorkoutDetails from './pages/WorkoutDetails';

const App = () => {
  const Stack =  createStackNavigator();
  return (
    <Store>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false
          }}
        >
          <Stack.Screen name="Home" component={Archive} />
          <Stack.Screen name="New Workout" component={NewWorkout} />
          <Stack.Screen name="Workout Details" component={WorkoutDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Store>
  );
};

export default App;
