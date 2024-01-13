import { create } from "apisauce";
import config from "../config";
const api = create({
  baseURL: "https://bhagavad-gita3.p.rapidapi.com/v2",
  headers: {
    "X-RapidAPI-Key": config.RapidAPIKey,
    "X-RapidAPI-Host": config.RapidAPIHost,
  },
});

export default api;
