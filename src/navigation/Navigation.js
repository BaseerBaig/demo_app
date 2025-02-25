import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '../../screens/HomeScreen';
import DetailsScreen from '../../screens/DetailsScreen';
import Copy from '../../screens/Copy';
import APIScreen from '../../screens/APIScreen';


const Stack = createStackNavigator();


const Navigation = () => {
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName = "Home" screenOptions={{headerShown:false}}>
    <Stack.Screen name="Home" component={HomeScreen} />
    <Stack.Screen name="Details" component={DetailsScreen} />
    <Stack.Screen name='Copy' component={Copy}/>
    <Stack.Screen name= 'apiScreen' component={APIScreen}/>

    </Stack.Navigator>
  </NavigationContainer>
  )
}

export default Navigation