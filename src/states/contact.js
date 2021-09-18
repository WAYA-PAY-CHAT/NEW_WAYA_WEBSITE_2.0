import { selector } from "recoil";
import { getSiteApi } from "../services/apiCalls";

export const getSocialLinks = selector({
  key: "getSocialLinks",
  get: async ({ get }) => {
    try {
      // const res = get(homeRefresh);
      // console.log(res)
      const result = await getSiteApi("social");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const getAllContacts = selector({
  key: "getAllContacts",
  get: async ({ get }) => {
    try {
      const result = await getSiteApi("settings/contact");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});