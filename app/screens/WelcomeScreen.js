import React from "react";
import { Text, StyleSheet, ImageBackground, Image } from "react-native";
import AppButton from "../component/AppButton";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      style={styles.container}
      blurRadius={2}
      source={require("../../assets/background.jpg")}
    >
      <Text style={styles.text}>|| JAY SHREE KRISHNA ||</Text>
      <Image
        style={styles.image}
        source={require("../../assets/welcome.png")}
      ></Image>

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
  image: {
    height: 400,
    width: 300,
  },
  text: {
    color: "#FEE715",
    padding: 10,
  },
});
export default WelcomeScreen;
