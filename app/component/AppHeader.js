import React from "react";
import { View, StyleSheet, Text } from "react-native";

function AppHeader(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.hText}>Bhagwat Geeta</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 80,
    backgroundColor: "orange",
    justifyContent: "center",
    alignItems: "center",
  },
  hText: {
    fontSize: 40,
    color: "white",
    fontStyle: "italic",
  },
});
export default AppHeader;
