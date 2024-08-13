import "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./app/navigation/Navigation";
import langContext from "./app/context/langContext";

export default function App() {
  const [lang, setLang] = useState("english");

  return (
    <NavigationContainer>
      <langContext.Provider value={{ lang, setLang }}>
        <Navigation />
      </langContext.Provider>
    </NavigationContainer>
  );
}
