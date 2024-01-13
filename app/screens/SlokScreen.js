import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Button, Text } from "react-native";
import ListItemSeparator from "../component/ListItemSeparator";
import verse from "../api/verse";
import AppHeader from "../component/AppHeader";
import AppList from "../component/AppList";
import LoadingANimation from "../component/LoadingANimation";

function SlokScreen({ navigation, route }) {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const getAll = async () => {
    try {
      setLoading(true);
      const result = await verse.getAll(route.params);
      if (result.ok) {
        setData(result.data);
        setError(null);
      } else {
        setError("Error fetching data. Please try again.");
      }
      setLoading(false);
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
          keyExtractor={(data) => data.id}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <AppList
              title={"Slok " + item.verse_number}
              subTitle={item.slug}
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
