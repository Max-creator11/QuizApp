import React, {useState, useEffect} from 'react'
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Switch } from 'react-native';
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native';
import AuthStackNavigator from './screens/navigators/AuthStackNavigator';

export default function App() {
 

  return (
   <NavigationContainer>
     <AuthStackNavigator/>
   </NavigationContainer>
  );
}

 

