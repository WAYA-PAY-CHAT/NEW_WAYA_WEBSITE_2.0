import { selector, atom } from "recoil";
import { fetchAdmin } from "../services/apiCalls";

export const editBal = atom({
  key: "editBal",
  default: {}
})

export const createModal = atom({
  key: "createModal",
  default: false
})

export const editModal = atom({
  key: "editModal",
  default: false
})

export const alert = atom({
  key: "alert",
  default: false
})

export const response = atom({
  key: "response",
  default: {}
})

export const refresh = atom({
  key: "refresh",
  default: ""
})

export const adminList = selector({
  key: "adminList",
  get: async ({ get }) => {
    try {
      const res = get(refresh);
      console.log(res)
      const result = await fetchAdmin({ method: "GET" });
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});