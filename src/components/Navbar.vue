<template>
  <v-app-bar>
    <v-container>
      <v-row class="justify-space-between align-center">
        <v-toolbar-title>
          <g-link to="/" style="color: 'inherit'">
            Eshop
          </g-link>
        </v-toolbar-title>
        <g-link class="snipcart-checkout">
          <v-btn color="primary" class="mx-1" icon>
            <v-badge bordered color="error" :content="totalProducts" overlap>
              <v-icon>mdi-cart</v-icon>
            </v-badge>
          </v-btn>
        </g-link>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
export default {
  data() {
    return {
      totalProducts: 0,
    };
  },
  methods: {
    getProductsInCart: function() {
      return Snipcart.store.getState().cart.items.count;
    },
  },
  mounted() {
    this.totalProducts = this.getProductsInCart();
    console.log(Snipcart.store.getState().cart.items.count);
  },
};
</script>
