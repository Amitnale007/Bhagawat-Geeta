import React, { useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useContext } from "react";
import langContext from "../context/langContext";
const Dropdown = () => {
  const value = useContext(langContext);
  console.log(value);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Select Langauge</Text>
      <Picker
        style={styles.picker}
        selectedValue={value.lang}
        onValueChange={(itemValue, itemIndex) => value.setLang(itemValue)}
      >
        <Picker.Item label="हिन्दी" value="hindi" />
        <Picker.Item label="English" value="english" />
        {/* Add more Picker.Item components for additional options */}
      </Picker>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    // flex: 1,
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "red",
  },
  picker: {
    backgroundColor: "orange",
    color: "white",
    width: "80%",
    // height: 20,
    // borderColor: "white",
    // borderWidth: 10,
  },
  text: {
    color: "white",
  },
});

export default Dropdown;
