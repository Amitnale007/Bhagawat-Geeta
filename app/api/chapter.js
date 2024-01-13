import API from "../api/client";

const getChapter = async () => {
  try {
    console.log("fetching start");
    const result = await API.get("/chapters/");
    console.log("fetching end");
    return result;
  } catch (error) {
    console.log(error);
  }
};

export default { getChapter };
