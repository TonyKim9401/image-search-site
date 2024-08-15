import { selector } from "recoil";
import axios from "axios";
import upslpashData from "./unsplashConfiguration.json";
import { searchState } from "../atoms/searchState";
import { pageState } from "../atoms/pageState";

const API_KEY = upslpashData.API_KEY;
const API_URL = upslpashData.API_URL;
const PER_PAGE = 30;

export const imageData = selector({
  key: "imageData",
  get: async ({ get }) => {
    const searchValue = get(searchState);
    const pageValue = get(pageState);

    try {
      const res = await axios.get(
        `${API_URL}?query=${searchValue}&client_id=${API_KEY}&page=${pageValue}&per_page=${PER_PAGE}`
      );

      return res.data;
    } catch (error) {
      console.log(error);
    }
  },
});
