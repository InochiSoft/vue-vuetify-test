import { fakeData } from "@/helper/mock/data";
const state = {
  products: fakeData.products,
};
const getters = {
  products: (state: any) => state.products,
};
const mutations = {
  getProducts(state: any) {
    state.products = fakeData.products;
  },
};
export const products = {
  namespaced: true,
  state,
  getters,
  mutations,
};
