import { selector, atom } from "recoil";
import { getAbouts } from "../services/apiCalls";

export const aboutRefresh = atom({
  key: "aboutRefresh",
  default: ""
})

export const editABoutVal = atom({
  key: "editABoutVal",
  default: {}
})

export const createAboutModal = atom({
  key: "createAboutModal",
  default: false
})

export const editAboutModal = atom({
  key: "editAboutModal",
  default: false
})

export const abouts = selector({
  key: "abouts",
  get: async ({ get }) => {
    try {
      const res = get(aboutRefresh);
      console.log(res)
      const result = await getAbouts();
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});