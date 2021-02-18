import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Explore from '../screens/Explore';
import MainTab from '../screens/MainTab';


const Stack = createStackNavigator();

const User = () => {
    return (
       <Stack.Navigator>
            <Stack.Screen
                name="Explore"
                component={MainTab}
                options={{ title: 'Explore' , headerShown:false}}
            />
       </Stack.Navigator>
    )
}

export default User

const styles = StyleSheet.create({})
