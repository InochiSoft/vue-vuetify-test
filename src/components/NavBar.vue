<template>
  <div>
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>Tictag</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn title="Logout" v-if="isLogin != null" @click="logout" icon>
        <v-icon>mdi-logout</v-icon>
      </v-btn>
      <v-btn title="Login" v-else @click="$router.push('/login')" icon>
        <v-icon>mdi-login</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer app v-model="drawer" temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <v-list-item
            v-for="(menu, i) in menus"
            :key="i"
            :to="{ path: menu.link }"
            link
          >
            <v-list-item-icon>
              <v-icon>{{ menu.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ menu.text }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data: () => ({
    drawer: false,
    group: null,
    menus: [
      {
        text: "Staff",
        link: "/dashboard/staff",
        icon: "mdi-account",
      },
      {
        text: "Customer",
        link: "/dashboard/customer",
        icon: "mdi-account-box-outline",
      },
      {
        text: "Product",
        link: "/dashboard/product",
        icon: "mdi-package-variant",
      },
      {
        text: "Claim",
        link: "/dashboard/claim",
        icon: "mdi-application-edit-outline",
      },
    ],
    isLogin: null,
  }),
  beforeMount() {
    this.isLogin = localStorage.getItem("user");
  },
  watch: {
    group() {
      this.drawer = false;
    },
    isLogin() {
      this.isLogin = localStorage.getItem("user");
    },
  },
  methods: {
    async logout() {
      let response = await this.$store.dispatch("users/logout");
      if (response) {
        const { ...result } = response;
        const { status } = result;
        if (status === "OK") {
          await this.$router.push({ name: "home" });
        }
      }
    },
  },
};
</script>

<style scoped></style>
