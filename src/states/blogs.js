import { selector, atom } from "recoil";
import { blogs } from "../services/apiCalls";

export const editBlogBal = atom({
  key: "editBlogBal",
  default: {}
})

export const createBlogModal = atom({
  key: "createBlogModal",
  default: false
})

export const editBlogModal = atom({
  key: "editBlogModal",
  default: false
})

export const blogAlert = atom({
  key: "blogAlert",
  default: false
})

export const blogResponse = atom({
  key: "blogResponse",
  default: {}
})

export const blogRefresh = atom({
  key: "blogRefresh",
  default: ""
})

export const blogEditor = atom({
  key: "blogEditor",
  default: ""
})

export const blogList = selector({
  key: "blogList",
  get: async ({ get }) => {
    try {
      const res = get(blogRefresh);
      console.log(res)
      const result = await blogs();
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});