<template>
  <v-data-table
    :headers="headers"
    :items="staffs"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Staff</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "CustomerView",
  data: () => ({
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "ID",
        align: "d-none",
        sortable: false,
        value: "id",
      },
      { text: "Name", value: "name" },
      { text: "Email", value: "email" },
    ],
    staffs: [],
  }),

  mounted() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.staffs = this.$store.state.users.customers;
    },
  },
};
</script>
