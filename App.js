import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Homescreen from './screens/Home';
import ISSscreen from './screens/ISSlocation';
import Meteorscreen from './screens/Meteor';
import Updatescreen from './screens/Update';
import { NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack=createStackNavigator()
export default function App() {
  return (
     <NavigationContainer>
       <Stack.Navigator initialRouteName= "Home" screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home"component={Homescreen}/>
    <Stack.Screen name="ISSlocation"component={ISSscreen}/>
    <Stack.Screen name="Meteor"component={Meteorscreen}/>
    <Stack.Screen name="Update"component={Updatescreen}/>
    </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
