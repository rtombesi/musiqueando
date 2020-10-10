import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Vinilos from "../screens/Vinilos";

const Stack = createStackNavigator();

export default function VinilosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="vinilos"
        component={Vinilos}
        options={{ title: "Vinilos" }}
      />
    </Stack.Navigator>
  );
}
