import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Button, Text } from "react-native";
import AppList from "../component/AppList";
import chapter from "../api/chapter";
import db from "../api/db";
import ListItemSeparator from "../component/ListItemSeparator";
import LoadingANimation from "../component/LoadingANimation";
import AppHeader from "../component/AppHeader";
import langContext from "../context/langContext";

function AdhyayScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const value = useContext(langContext);
  const getchap = async () => {
    try {
      setLoading(true);
      const result = await db.getChapter();
      setData(JSON.parse(result));
      // console.log(data);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getchap();
  }, []);

  const handleRetry = () => {
    setError(null);
    getchap();
  };

  return (
    <View style={styles.container}>
      <AppHeader />
      {loading && <LoadingANimation loading={loading} />}
      {error ? (
        <View style={styles.errorContainer}>
          <Text style={styles.errorText}>{error}</Text>
          <Button title="Retry" color="orange" onPress={handleRetry} />
        </View>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(data) => data.chapter_number}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <AppList
              key={item.chapter_number}
              title={value.lang == "hindi" ? item.meaning.hi : item.meaning.en}
              subTitle={
                value.lang == "hindi"
                  ? "श्लोक संख्या " + item.verses_count
                  : "Total Verse " + item.verses_count
              }
              onPress={() => navigation.navigate("Slok", item.chapter_number)}
            />
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  errorContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    marginBottom: 20,
    textAlign: "center",
  },
});

export default AdhyayScreen;
