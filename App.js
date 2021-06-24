// react library imports
import React from 'react';

// native library imports
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// navigation imports
import { NavigationContainer } from '@react-navigation/native';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// project imports
// import HomeScreen from './src/screens/homeScreen';
// import SettingsScreen from './src/screens/settingsScreen';
import BottomTabNavigator from './src/navigation/bottomTabNavigator';


const App = () => {
  return (
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
  );
}

export default App;
