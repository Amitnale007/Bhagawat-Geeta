import React from "react";
import { View, StyleSheet, Text } from "react-native";

function RText({ children, style }) {
  return (
    <View style={[styles.container, style]}>
      <Text style={styles.text}>{children.replace(/\n+/g, "\n")}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    padding: 10,
    fontWeight: "bold",
  },
});
export default RText;
