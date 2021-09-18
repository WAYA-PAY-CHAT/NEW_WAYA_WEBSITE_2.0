import { selector, atom } from "recoil";
import { getBusiness } from "../services/apiCalls";

export const businessRefresh = atom({
  key: "businessRefresh",
  default: ""
})

export const businessAlert = atom({
  key: "businessAlert",
  default: false
})

export const businessResponse = atom({
  key: "businessResponse",
  default: {}
})

export const merchants = selector({
  key: "merchants",
  get: async ({ get }) => {
    try {
      const res = get(businessRefresh);
      console.log(res)
      const result = await getBusiness("merchant");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const agents = selector({
  key: "agents",
  get: async ({ get }) => {
    try {
      const res = get(businessRefresh);
      console.log(res)
      const result = await getBusiness("agent");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const howToJoin = selector({
  key: "howToJoin",
  get: async ({ get }) => {
    try {
      const res = get(businessRefresh);
      console.log(res)
      const result = await getBusiness("agent/how_to_join");
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});