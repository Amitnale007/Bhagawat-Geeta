import React from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  TouchableWithoutFeedback,
} from "react-native";

function AppList({ title, subTitle, onPress }) {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://www.bhagavad-gita.us/wp-content/uploads/2012/10/gita-02.jpg",
          }}
        />
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{title}</Text>

          <Text style={styles.subTitle} numberOfLines={2}>
            {subTitle}
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flexDirection: "row",
    padding: 10,
    backgroundColor: "lightyellow",
  },
  detailsContainer: {
    flex: 1,
    marginLeft: 10,
    justifyContent: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  subTitle: {
    color: "tomato",
  },
  title: {
    fontSize: 25,
  },
});
export default AppList;
