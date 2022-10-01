<template>
  <v-container fluid fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-toolbar dark color="primary">
            <v-toolbar-title>Login</v-toolbar-title>
          </v-toolbar>
          <v-card-text>
            <form ref="form" @submit.prevent="login()">
              <v-text-field
                v-model="email"
                name="email"
                label="Email"
                type="email"
                placeholder="Email"
                required
              ></v-text-field>

              <v-text-field
                v-model="password"
                name="password"
                label="Password"
                type="password"
                placeholder="Password"
                required
              ></v-text-field>
              <v-btn type="submit" class="mt-4" color="primary" value="log in"
                >Login</v-btn
              >
            </form>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "LoginView",
  beforeCreate() {
    const loggedIn = localStorage.getItem("user");
    if (loggedIn) {
      this.$router.push({ name: "dashboard" });
    }
  },
  data() {
    return {
      email: "staff@gmail.com",
      password: "admin",
    };
  },
  methods: {
    async login() {
      let response = await this.$store.dispatch("users/login", {
        email: this.email,
        password: this.password,
      });
      if (response) {
        const { ...result } = response;
        const { status } = result;
        if (status === "OK") {
          await this.$router.push({ name: "dashboard" });
        }
      }
    },
  },
};
</script>
