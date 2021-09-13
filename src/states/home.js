import { selector, atom } from "recoil";
import { getFeature, getHomePage } from "../services/apiCalls";

export const featureRefresh = atom({
  key: "featureRefresh",
  default: ""
})

export const homeRefresh = atom({
  key: "homeRefresh",
  default: ""
})

export const featureAlert = atom({
  key: "featureAlert",
  default: false
})

export const featureResponse = atom({
  key: "featureResponse",
  default: {}
})

export const features = selector({
  key: "features",
  get: async ({ get }) => {
    try {
      const res = get(featureRefresh);
      console.log(res)
      const result = await getFeature();
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const homePage = selector({
  key: "homePage",
  get: async ({ get }) => {
    try {
      const res = get(homeRefresh);
      console.log(res)
      const result = await getHomePage();
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});