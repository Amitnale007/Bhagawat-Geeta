import React from "react";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

function LoadingANimation({ loading }) {
  if (!loading) return null;
  return (
    <LottieView
      autoPlay
      loop
      style={{
        width: "100%",
        height: "100%",
        justifyContent: "center",
      }}
      source={require("../animations/loading.json")}
    ></LottieView>
  );
}

export default LoadingANimation;
