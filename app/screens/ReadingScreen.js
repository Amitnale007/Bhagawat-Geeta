import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import AppHeader from "../component/AppHeader";
import RText from "../component/readingScreen/RText";
import BottomButton from "../component/readingScreen/BottomButton";

function ReadingScreen({ route }) {
  const [cur, setCur] = useState(route.params.verse);

  const [data, setData] = useState(
    route.params.allVerses.find(
      (item) => item.verse_number === route.params.verse
    )
  );

  const handleNext = () => {
    setCur((prevCur) => {
      const nextCur = prevCur + 1;
      const nextData = route.params.allVerses.find(
        (item) => item.verse_number === nextCur
      );
      if (nextData) {
        setData(nextData);
        return nextCur;
      }
      return prevCur;
    });
  };

  const handlePrevious = () => {
    setCur((prevCur) => {
      const prev = prevCur - 1;
      if (prev >= 1) {
        const prevData = route.params.allVerses.find(
          (item) => item.verse_number === prev
        );
        setData(prevData);
        return prev;
      }
      return prevCur;
    });
  };
  return (
    <View style={styles.container}>
      <AppHeader></AppHeader>

      <View style={styles.desc}>
        <Text style={styles.head}>{"Verse " + data.verse_number}</Text>
        <RText>{data.text}</RText>
        <Text style={styles.head}>Translation</Text>
        <RText>
          {
            data.translations.find(
              (translation) => translation.author_name === "Swami Tejomayananda"
            ).description
          }
        </RText>
      </View>
      <BottomButton
        handleNext={handleNext}
        handlePrevious={handlePrevious}
      ></BottomButton>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  desc: {
    // justifyContent: "center",
    alignItems: "center",
    backgroundColor: "lightyellow",
    flex: 1,
  },
  head: {
    fontSize: 30,
    fontWeight: "500",
    paddingTop: 10,
  },
});
export default ReadingScreen;
