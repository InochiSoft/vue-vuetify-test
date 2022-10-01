import Vue from "vue";
import Vuex from "vuex";
import { users } from "@/store/users.module";
import { products } from "@/store/products.module";
import { claims } from "@/store/claims.module";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: { users, products, claims },
});
