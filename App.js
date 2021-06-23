// react library imports
import React from 'react';

// native library imports
import { SafeAreaView, StyleSheet, Text, useColorScheme, View } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

// navigation imports
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

// vector icons import
import Ionicons from 'react-native-vector-icons/Ionicons';


// project imports
import HomeScreen from './src/screens/homeScreen';
import SettingsScreen from './src/screens/settingsScreen';

const BottomTab = createMaterialBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <BottomTab.Navigator
        initialRouteName="Home"
        activeColor="black"
        inactiveColor="white"
        labeled={true}
        shifting={true}
        barStyle={{ backgroundColor: 'tomato' }}>
        <BottomTab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ focused, color }) => (
              <Ionicons name="home" color={color} size={26} />
            ),
          }}
        />
        <BottomTab.Screen
          name="Info"
          component={SettingsScreen}
          options={{
            tabBarLabel: 'Info',
            tabBarIcon: ({ focused, color }) => (
              <Ionicons name={focused ? "ios-information-circle" : "ios-information-circle-outline"} color={color} size={26} />
            ),
          }}
        />
      </BottomTab.Navigator>
    </NavigationContainer>
  );
}

export default App;
