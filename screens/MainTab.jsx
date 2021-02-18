import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Explore from './Explore';
import Rooms from './Rooms';
import Messages from './Messages';
import Activity from './Activity';
import Account from './Account';


const Tab = createMaterialBottomTabNavigator();

const MainTab = () => {
    return (
        <Tab.Navigator
            //initialRouteName="Feed"
            activeColor="#42f563"
            barStyle={{ backgroundColor: '#131516' }}
        >
            <Tab.Screen
                name="Rooms"
                component={Rooms}
                options={{
                    tabBarLabel: 'Rooms',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="headphones" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Messages"
                component={Messages}
                options={{
                    tabBarLabel: 'Messages',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="email-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Explore"
                component={Explore}
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="radio-tower" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Activity"
                component={Activity}
                options={{
                    tabBarLabel: 'Activity',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="bell-outline" color={color} size={26} />
                    ),
                }}
            />
            <Tab.Screen
                name="Account"
                component={Account}
                options={{
                    tabBarLabel: 'Account',
                    tabBarIcon: ({ color }) => (
                        <MaterialCommunityIcons name="account" color={color} size={26} />
                    ),
                }}
            />
            
        </Tab.Navigator>
    )
}

export default MainTab

const styles = StyleSheet.create({})
