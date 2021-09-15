import { selector, atom } from "recoil";
import { getMessages, getSettings, getSocialLinks, getSubScribers } from "../services/apiCalls";

export const settingsRefresh = atom({
  key: "settingsRefresh",
  default: ""
})

export const socialRefresh = atom({
  key: "socialRefresh",
  default: ""
})

export const settingAlert = atom({
  key: "settingAlert",
  default: false
})

export const settingResponse = atom({
  key: "settingResponse",
  default: {}
})

export const settings = selector({
  key: "settings",
  get: async ({ get }) => {
    try {
      const res = get(settingsRefresh);
      console.log(res)
      const result = await getSettings();
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const subScriber = selector({
  key: "subScriber",
  get: async ({ get }) => {
    try {
      const result = await getSubScribers();
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const messages = selector({
  key: "messages",
  get: async ({ get }) => {
    try {
      const result = await getMessages();
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const socialLink = selector({
  key: "socialLink",
  get: async ({ get }) => {
    const res = get(socialRefresh);
    console.log(res)
    try {
      const result = await getSocialLinks();
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});