import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function LoadingANimation({ loading }) {
  if (!loading) return null;
  return (
    <View style={styles.container}>
      <LottieView
        autoPlay
        loop
        style={{
          flex: 1,
        }}
        source={require("../animations/loading.json")}
      ></LottieView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
  },
});

export default LoadingANimation;
