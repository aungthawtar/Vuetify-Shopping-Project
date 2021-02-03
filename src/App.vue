<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="90"
          src="https://i.pinimg.com/originals/82/08/54/820854455c5193c21f1e9bb669abd425.png"
          width="90"
        />
        <h3>Bla Bla Shopping</h3>
      </div>

      <v-spacer></v-spacer>

      <v-btn text :to="{ name: 'Dashboard' }">
        <v-icon>mdi-home</v-icon>
        <span class="mr-2">Home</span>
      </v-btn>
      <v-badge :value="cart.length" :content="cart.length" color="green">
        <v-btn text :to="{ name: 'Cart' }">
          <v-icon>mdi-cart</v-icon>
          <span class="mr-2">Cart</span>
        </v-btn>
      </v-badge>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    cart: [],
  }),
  mounted() {
    this.cart = this.$root.pCarts;
  },
};
</script>
