<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <!-- loading -->
        <div class="loading" v-if="loading">
          <v-progress-circular
            :size="70"
            color="red"
            indeterminate
          ></v-progress-circular>
        </div>
        <!-- end loading -->
        <v-card>
          <v-btn color="secondary" class="ma-2" :to="{ name: 'Dashboard' }"
            ><v-icon>mdi-chevron-left</v-icon> Back</v-btn
          >
          <div class="text-center">
            <img :src="item.image" width="600" height="700" alt="image" />
          </div>
          <v-card-title>{{ item.title }}</v-card-title>
          <v-card-text>{{ item.description }}</v-card-text>
          <v-card-text v-if="!loading">
            <v-chip color="primary">Tech</v-chip> price - ${{ item.price }}
          </v-card-text>
          <v-divider class="mx-3"></v-divider>
          <v-card-actions v-if="!loading">
            <v-spacer></v-spacer>
            <v-btn color="green" dark v-on:click="addCart">Add Cart</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      item: {},
      loading: true,
    };
  },
  created() {
    // console.log(this.$route.params.id); // method (1)
    // fetch(`https://fakestoreapi.com/products/${this.$route.params.id}`)
    //   .then((res) => res.json())
    //   .then((data) => (this.item = data));

    // console.log(this.id); // props method (2)
    fetch(`https://fakestoreapi.com/products/${this.id}`)
      .then((res) => res.json())
      .then((data) => {
        this.item = data;
        this.loading = false;
      });
  },
  methods: {
    addCart() {
      // console.log(this.$root.Pcarts);
      let carts = this.$root.pCarts;
      let isInCart = carts.find((cart) => cart.title === this.item.title);
      if (isInCart) {
        isInCart.qty++;
      } else {
        let newItem = { qty: 1, ...this.item };
        carts.push(newItem);
      }
    },
  },
};
</script>

<style>
.loading {
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2));
  position: fixed;
  top: 0;
  left: 0;
  z-index: 300;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  display: flex;
}
</style>