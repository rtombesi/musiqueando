import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TopVinilosCds from "../screens/TopVinilosCds";

const Stack = createStackNavigator();

export default function TopStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="topvinilosscds"
        component={TopVinilosCds}
        options={{ title: "Los Mejores Vinilos y Cds" }}
      />
    </Stack.Navigator>
  );
}
