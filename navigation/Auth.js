import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Welcome from '../screens/Welcome';
import SignUp from '../screens/SignUp';
import Login from '../screens/Login';



const Stack = createStackNavigator();

const Auth = () => {
    return (
       <Stack.Navigator>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ title: 'Welcome' , headerShown:false}}
            />
            <Stack.Screen
                name="SignUp"
                component={SignUp}
                options={{ title: 'SignUp' , headerShown:false}}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ title: 'Login' , headerShown:false}}
            />
       </Stack.Navigator>
    )
}

export default Auth

const styles = StyleSheet.create({})
