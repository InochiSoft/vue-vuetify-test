import { fakeData } from "@/helper/mock/data";
const state = {
  claims: fakeData.claims,
};
const getters = {
  claims: (state: any) => state.claims,
};
const mutations = {
  getClaims(state: any) {
    state.claims = fakeData.claims;
  },
};
export const claims = {
  namespaced: true,
  state,
  getters,
  mutations,
};
