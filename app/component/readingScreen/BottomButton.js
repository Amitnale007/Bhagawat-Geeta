import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";

function BottomButton({ handlePrevious, handleNext }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { borderRightWidth: 1 }]}
        onPress={handlePrevious}
      >
        <Text style={styles.text}>Previous</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.rightButton, styles.button]}
        onPress={handleNext}
      >
        <Text style={styles.text}>Next</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "flex-end",
    // alignItems: "center",
    backgroundColor: "lightyellow",
    borderColor: "black",
    borderWidth: 1,

    height: 80,
    paddingHorizontal: 10,
  },
  button: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  rightButton: {
    borderLeftWidth: 1,
    borderColor: "black",
  },
  text: {
    fontSize: 20,
  },
});
export default BottomButton;
