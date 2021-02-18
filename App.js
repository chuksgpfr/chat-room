import { NavigationContainer } from "@react-navigation/native";
import { createSwitchNavigator } from "@react-navigation/compat";
import * as React from "react";
import { View, Text } from "react-native";
import Auth from "./navigation/Auth";
import User from "./navigation/User";



const AppNavigator = createSwitchNavigator({
  "home": Auth,
  "user": User,
},
{
  initialRouteName: "home",
}
);

export default function App() {
  return (
      <NavigationContainer>
          <AppNavigator/>
      </NavigationContainer>
  );
}
