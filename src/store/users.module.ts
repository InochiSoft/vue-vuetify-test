import { fakeData } from "@/helper/mock/data";
const state = {
  users: fakeData.users,
  staffs: fakeData.users.filter((el: any) => el.is_staff),
  customers: fakeData.users.filter((el: any) => !el.is_staff),
  user: null,
};
const getters = {
  users: (state: any) => state.users,
  user: (state: any) => state.user,
};
const actions = {
  getUsers({ commit }: any) {
    commit("getUsers");
  },
  getStaffs({ commit }: any) {
    commit("getStaffs");
  },
  getCustomers({ commit }: any) {
    commit("getCustomers");
  },
  login({ commit }: any, user: any) {
    commit("login", user);
    const data = state.users.find((el: any) => el.email === user.email);
    if (data) {
      if (data.password === user.password) {
        localStorage.setItem("user", JSON.stringify(user));
        return { status: "OK" };
      }
      return { status: "Error" };
    }
  },
  logout({ commit }: any) {
    commit("logout");
    localStorage.removeItem("user");
    if (localStorage.getItem("user") == null) {
      return { status: "OK" };
    }
  },
};
const mutations = {
  getUsers(state: any) {
    state.users = fakeData.users;
  },
  getStaffs(state: any) {
    state.staffs = fakeData.users.filter((el) => el.is_staff);
  },
  getCustomers(state: any) {
    state.customers = fakeData.users.filter((el) => !el.is_staff);
  },
  login(state: any, user: any) {
    state.user = user;
  },
  logout(state: any) {
    state.user = "";
  },
};
export const users = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
