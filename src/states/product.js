import { selector } from "recoil";
import { getSiteApi } from "../services/apiCalls";

export const getProducts = selector({
  key: "getProducts",
  get: async ({ get }) => {
    try {
      // const res = get(homeRefresh);
      // console.log(res)
      const result = await getSiteApi("products");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const getCategories = selector({
  key: "getCategories",
  get: async ({ get }) => {
    try {
      // const res = get(homeRefresh);
      // console.log(res)
      const result = await getSiteApi("categories");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});