<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-simple-table dark>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">ID</th>
                <th class="text-left">Name</th>
                <th class="text-left">Image</th>
                <th class="text-left">Original Price</th>
                <th class="text-left">Quantity Action</th>
                <th class="text-left">Quantity</th>
                <th class="text-left">Price</th>
                <th class="text-left">Actions</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in carts" :key="index">
                <td>{{ index }}</td>
                <td>{{ cart.title }}</td>
                <td>
                  <img :src="cart.image" height="100" width="100" />
                </td>
                <td>${{ cart.price }}</td>
                <td>
                  <v-btn
                    color="primary"
                    class="mr-2"
                    @click="increseCart(cart)"
                  >
                    <v-icon>mdi-plus</v-icon>
                  </v-btn>
                  <v-btn color="orange" @click="decreseCart(cart)">
                    <v-icon>mdi-minus</v-icon>
                  </v-btn>
                </td>
                <td>{{ cart.qty }}</td>
                <td>${{ Number(cart.price * cart.qty).toFixed(2) }}</td>
                <td>
                  <v-btn color="red" @click="deleteCart(index)">
                    <v-icon>mdi-delete</v-icon>
                  </v-btn>
                </td>
              </tr>
              <tr>
                <td colspan="6">Total Price</td>
                <td colspan="2">$ {{ totalPrice }}</td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      carts: [],
    };
  },
  computed: {
    totalPrice() {
      return Number(
        this.carts
          .reduce((total, cart) => (total += cart.price * cart.qty), 0)
          .toFixed(2)
      );
    },
  },
  created() {
    this.carts = this.$root.pCarts;
  },
  methods: {
    increseCart(cart) {
      cart.qty++;
    },
    decreseCart(cart) {
      if (cart.qty === 1) {
        return;
      }
      cart.qty--;
    },
    deleteCart(index) {
      this.carts.splice(index, 1);
    },
  },
};
</script>

<style>
</style>