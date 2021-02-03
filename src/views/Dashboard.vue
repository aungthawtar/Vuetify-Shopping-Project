<template>
  <v-container>
    <v-row>
      <!-- loading -->
      <div class="loading" v-if="loading">
        <v-progress-circular
          :size="70"
          color="red"
          indeterminate
        ></v-progress-circular>
      </div>
      <!-- end loading -->
      <v-col cols="4" v-for="item in items" :key="item.id">
        <v-card>
          <div class="text-center">
            <img :src="item.image" alt="image" width="200" height="200" />
          </div>
          <v-card-title>{{ item.title }}</v-card-title>
          <!-- <v-card-text>{{ item.description }}</v-card-text> -->
          <v-divider class="mx-3"></v-divider>
          <div class="d-flex">
            <v-card-subtitle>Price - ${{ item.price }}</v-card-subtitle>
            <v-spacer></v-spacer>
            <v-card-actions>
              <v-btn color="primary" v-on:click="detail(item)">Details</v-btn>
            </v-card-actions>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      items: [],
      loading: true,
    };
  },
  created() {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        this.items = data;
        this.loading = false;
      });
  },
  methods: {
    detail(item) {
      // console.log(item);
      this.$router.push("/details/" + item.id);
    },
  },
};
</script>

<style>
</style>