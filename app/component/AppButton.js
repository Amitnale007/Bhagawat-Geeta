import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function AppButton({ onPress, children, style }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, style]}>
      <Text style={styles.text}>{children}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    height: 50,
    width: "95%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CDCF29",
    borderRadius: 20,
    margin: 10,
  },
  text: {
    fontSize: 25,
    color: "white",
  },
});
export default AppButton;
