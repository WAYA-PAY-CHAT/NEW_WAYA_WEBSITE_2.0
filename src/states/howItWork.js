import { selector, atom } from "recoil";
import { howItWorks } from "../services/apiCalls";

export const howItWorkRefresh = atom({
  key: "howItWorkRefresh",
  default: ""
})

export const editHowItWorkVal = atom({
  key: "editHowItWorkVal",
  default: {}
})

export const createHowItWorkModal = atom({
  key: "createHowItWorkModal",
  default: false
})

export const editHowItWorkModal = atom({
  key: "editHowItWorkModal",
  default: false
})

export const howItWorkEditor = atom({
  key: "howItWorkEditor",
  default: ""
})

export const howItWork = selector({
  key: "howItWork",
  get: async ({ get }) => {
    try {
      const res = get(howItWorkRefresh);
      console.log(res)
      const result = await howItWorks();
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});