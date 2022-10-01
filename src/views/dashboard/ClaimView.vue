<template>
  <v-data-table
    :headers="headers"
    :items="claims"
    sort-by="calories"
    class="elevation-1"
    item-class="my-0 py-0"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Claim</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
      </v-toolbar>
    </template>
    <template v-slot:[`item.status`]="{ item }">
      <v-combobox
        class="my-5"
        v-model="item.status"
        :items="statusList"
        item-text="text"
        item-value="value"
        solo
        hide-details
        full-width
        @change="changeStatus(item)"
      >
      </v-combobox>
    </template>
    <template v-slot:no-data>
      <v-btn color="primary" @click="initialize"> Reset </v-btn>
    </template>
  </v-data-table>
</template>

<script>
export default {
  name: "ProductView",
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
      { text: "Customer", value: "customer.name" },
      { text: "Product", value: "product.name" },
      { text: "#SN", value: "product_sn" },
      { text: "Status", value: "status", width: 180 },
    ],
    statusList: [
      { text: "Unapproved", value: 0 },
      { text: "Approved", value: 1 },
      { text: "Rejected", value: 2 },
    ],
    claims: [],
  }),

  computed: {},

  watch: {},

  mounted() {
    this.initialize();
  },

  methods: {
    initialize() {
      this.claims = this.$store.state.claims.claims;
      this.claims.forEach((el) => {
        el.status = this.statusList.find((s) => s.value === el.status);
      });
    },
    changeStatus(item) {
      this.editedIndex = this.claims.indexOf(item);
      this.editedItem = Object.assign({}, item);
      if (this.editedIndex) {
        Object.assign(this.claims[this.editedIndex], this.editedItem);
      }
    },
  },
};
</script>
