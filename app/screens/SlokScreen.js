import React, { useEffect, useState, useContext } from "react";
import { View, StyleSheet, FlatList, Button, Text } from "react-native";
import ListItemSeparator from "../component/ListItemSeparator";
import verse from "../api/verse";
import AppHeader from "../component/AppHeader";
import AppList from "../component/AppList";
import LoadingANimation from "../component/LoadingANimation";
import db from "../api/db";
import langContext from "../context/langContext";
function SlokScreen({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const value = useContext(langContext);

  const getAll = async () => {
    try {
      setLoading(true);
      const result = await db.getVerse();
      setData(JSON.parse(result)[route.params]);
      console.log(data, "verses");
      setLoading(false);
      setError(null);
    } catch (error) {
      setError("Network error. Please check your connection and try again.");
      setLoading(false);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleRetry = () => {
    setError(null);
    getAll();
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
          keyExtractor={(data) => data.verse_number}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <AppList
              title={
                value.lang == "hindi"
                  ? "श्लोक " + item.verse_number
                  : "Verse " + item.verse_number
              }
              subTitle={
                value.lang == "hindi"
                  ? "अध्याय क्रमांक " + item.chapter_number
                  : "Chapter No." + item.chapter_number
              }
              onPress={() =>
                navigation.navigate("Reading", {
                  allVerses: data,
                  verse: item.verse_number,
                })
              }
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

export default SlokScreen;
