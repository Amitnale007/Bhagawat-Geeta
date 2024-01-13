import React, { useEffect, useState } from "react";
import { View, StyleSheet, FlatList, Button, Text } from "react-native";
import AppList from "../component/AppList";
import chapter from "../api/chapter";
import ListItemSeparator from "../component/ListItemSeparator";
import LoadingANimation from "../component/LoadingANimation";
import AppHeader from "../component/AppHeader";

function AdhyayScreen({ navigation }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getchap = async () => {
    try {
      setLoading(true);
      const result = await chapter.getChapter();
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
          keyExtractor={(data) => data.id}
          ItemSeparatorComponent={ListItemSeparator}
          renderItem={({ item }) => (
            <AppList
              title={item.name}
              subTitle={item.slug}
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
