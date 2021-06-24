// react library imports
import React from 'react';

// native library imports
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

// navigation imports
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// vector icons import
import Icon from 'react-native-vector-icons/FontAwesome';

// project imports
import HomeScreen from '../screens/homeScreen';
import SettingsScreen from '../screens/settingsScreen';


const BottomTab = createBottomTabNavigator();

const BottomTabNavigatorCenterButton = ({ children, onPress }) => (
    <TouchableOpacity
        style={{
            top: -30,
            justifyContent: 'center',
            alignItems: 'center',
            ...Style.shadow,
        }}
        onPress={onPress}
    >
        <View style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            backgroundColor: '#e32f45',
        }}>
            {children}
        </View>
    </TouchableOpacity>
)

const BottomTabNavigator = () => {
    return (
        <BottomTab.Navigator
            tabBarOptions={{
                showLabel: false,
                style: {
                    position: 'absolute',
                    bottom: 25,
                    left: 20,
                    right: 20,
                    elevation: 0,
                    backgroundColor: '#fff',
                    borderRadius: 15,
                    height: 90,
                    ...Style.shadow
                }
            }}
        >
            <BottomTab.Screen name='Home1' component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={Style.tabBarIconContainer}>
                                <Icon name='home' size={25} color={focused ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)'} />
                                <Text style={Style.tabBarIconText} color={focused ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)'}>Home</Text>
                            </View>
                        )
                    }
                }}
            />
            <BottomTab.Screen name='Settings1' component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={Style.tabBarIconContainer}>
                                <Icon name='music' size={25} color={focused ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)'} />
                                <Text style={Style.tabBarIconText} color={focused ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)'}>Home</Text>
                            </View>
                        )
                    }
                }}
            />
            <BottomTab.Screen name='Home2' component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <Icon name='android' size={30} color={'#fff'} />
                    ),
                    tabBarButton: (props) => (
                        <BottomTabNavigatorCenterButton {...props} />
                    )
                }}
            />
            <BottomTab.Screen name='Settings2' component={SettingsScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={Style.tabBarIconContainer}>
                                <Icon name='book' size={25} color={focused ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)'} />
                                <Text style={Style.tabBarIconText} color={focused ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)'}>Home</Text>
                            </View>
                        )
                    }
                }}
            />
            <BottomTab.Screen name='Home3' component={HomeScreen}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={Style.tabBarIconContainer}>
                                <Icon name='car' size={25} color={focused ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)'} />
                                <Text style={Style.tabBarIconText} color={focused ? 'rgba(0, 0, 0, 1)' : 'rgba(0, 0, 0, 0.6)'}>Home</Text>
                            </View>
                        )
                    }
                }}
            />
        </BottomTab.Navigator>
    );
}

const Style = StyleSheet.create({
    shadow: {
        shadowColor: '#75fdf0',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.5,
        elevation: 5,
    },
    tabBarIconContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        top: 10
    },
    tabBarIconText: {
        fontSize: 12,
    },
});

export default BottomTabNavigator;