import "react-native-gesture-handler";
import React from "react";
import { StyleSheet } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import WelcomeScreen from "../screens/WelcomeScreen";
import AdhyayScreen from "../screens/AdhyayScreen";
import SlokScreen from "../screens/SlokScreen";
import ReadingScreen from "../screens/ReadingScreen";

const stack = createStackNavigator();
function Navigation(props) {
  return (
    <stack.Navigator>
      <stack.Screen
        name="Welcome"
        component={WelcomeScreen}
        options={{ headerShown: false }}
      ></stack.Screen>
      <stack.Screen
        name="Chapter"
        component={AdhyayScreen}
        options={{ headerShown: false }}
      ></stack.Screen>
      <stack.Screen
        name="Slok"
        component={SlokScreen}
        options={{ headerShown: false }}
      ></stack.Screen>
      <stack.Screen
        name="Reading"
        component={ReadingScreen}
        options={{ headerShown: false }}
      ></stack.Screen>
    </stack.Navigator>
  );
}
const styles = StyleSheet.create({
  container: {},
});
export default Navigation;
