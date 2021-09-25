import { selector, atom } from "recoil";
import { contacts } from "../services/apiCalls";

export const contactRefresh = atom({
  key: "contactRefresh",
  default: ""
})

export const contactAlert = atom({
  key: "contactAlert",
  default: false
})

export const contactResponse = atom({
  key: "contactResponse",
  default: {}
})

export const contact = selector({
  key: "contact",
  get: async ({ get }) => {
    try {
      const res = get(contactRefresh);
      console.log(res)
      const result = await contacts();
      return result.data || [];
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return [];
    }
  }
});