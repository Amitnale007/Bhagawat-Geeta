import { getDatabase, ref, get, off } from "firebase/database";
import { app } from "../../firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";

const getChapter = async () => {
  try {
    const value = await AsyncStorage.getItem("CHAPTERS");
    if (value !== null) {
      return value;
    } else {
      try {
        const db = getDatabase();
        const userRef = ref(db, `CHAPTERS`);
        const snapshot = await get(userRef);
        const value = await snapshot.val();
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("CHAPTERS", jsonValue);
        off(userRef);
        return value;
      } catch (error) {
        console.error("Error fetching data:", error);
        return error;
      }
    }
  } catch (e) {
    console.log(e);
  }
};
const getVerse = async () => {
  try {
    const value = await AsyncStorage.getItem("VERSES");
    if (value !== null) {
      //   console.log(value);
      return value;
    } else {
      try {
        const db = getDatabase();
        const userRef = ref(db, `VERSES`);
        const snapshot = await get(userRef);
        const value = await snapshot.val();
        const jsonValue = JSON.stringify(value);
        await AsyncStorage.setItem("VERSES", jsonValue);
        off(userRef);
        return value;
      } catch (error) {
        console.error("Error fetching data:", error);
        return error;
      }
    }
  } catch (e) {
    console.log(e);
  }
};

export default { getChapter, getVerse };
