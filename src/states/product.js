import { selector, atom } from "recoil";
import { getCategories, getProducts } from "../services/apiCalls";

export const createProductModal = atom({
  key: "createProductModal",
  default: false
})

export const editProductModal = atom({
  key: "editProductModal",
  default: false
})

export const createCategoryModal = atom({
  key: "createCategoryModal",
  default: false
})

export const editCategoryModal = atom({
  key: "editCategoryModal",
  default: false
})

export const productRefresh = atom({
  key: "productRefresh",
  default: ""
})

export const productAlert = atom({
  key: "productAlert",
  default: false
})

export const productResponse = atom({
  key: "productResponse",
  default: {}
})

export const products = selector({
  key: "products",
  get: async ({ get }) => {
    try {
      const res = get(productRefresh);
      console.log(res)
      const result = await getProducts();
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});

export const categories = selector({
  key: "categories",
  get: async ({ get }) => {
    try {
      const res = get(productRefresh);
      console.log(res)
      const result = await getCategories();
      return result.data || {};
    } catch (error) {
      console.error(`ERROR: \n${error}`);
      return {};
    }
  }
});