import React from "react";
import { Text, StyleSheet, ImageBackground, Image, View } from "react-native";
import AppButton from "../component/AppButton";
import db from "../api/db";
import { useEffect } from "react";

import firebase from "firebase/app";
import "firebase/database";
import Dropdown from "../component/DropDown";

function WelcomeScreen({ navigation }) {
  const fetchData = async () => {
    try {
      const data = await db.getChapter();
      const verse = await db.getVerse();
      // console.log(verse);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchData();
    // return () => {
    //   DB.ref("/CHAPTERS").off("value");
    // };
  }, []);
  return (
    <ImageBackground
      style={styles.container}
      blurRadius={2}
      source={require("../../assets/background.jpg")}
    >
      <Text style={styles.text}>|| JAY SHREE KRISHNA ||</Text>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../../assets/welcome.png")}
        />
      </View>
      <Dropdown></Dropdown>
      <AppButton
        style={styles.btn}
        onPress={() => navigation.navigate("Chapter")}
      >
        Start Reading
      </AppButton>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "flex-end", alignItems: "center" },
  btn: {
    backgroundColor: "orange",
    position: "relative",
    marginBottom: 90,
  },
  imageContainer: {
    backgroundColor: "transparent", // Set a background color for the container
    borderRadius: 10, // Adjust as needed
    shadowColor: "orange",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5, // for Android
  },
  image: {
    height: 400,
    width: 300,
    borderRadius: 10, // Make sure to match the container's borderRadius
  },
  text: {
    color: "#FEE715",
    padding: 10,
  },
});

export default WelcomeScreen;
