import "react-native-gesture-handler";
import Screen from "./app/Screen";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./app/navigation/Navigation";

export default function App() {
  return (
    <NavigationContainer>
      <Navigation></Navigation>
    </NavigationContainer>
  );
}
