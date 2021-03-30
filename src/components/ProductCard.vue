<template>
  <v-col cols="12" md="3" class="my-8 text-center">
    <v-card class="mx-auto" max-width="344">
      <g-link :to="'product/' + product.slug">
        <g-image :src="getStrapiMedia(product.thumb.url)" height="200px" />
      </g-link>

      <v-card-title class="pb-0"> {{ product.name }} - {{ product.price }} &euro; </v-card-title>
      <v-card-actions class="justify-end">
        <v-btn icon color="pink" v-if="product.variants.length > 0">
          <g-link :to="'product/' + product.slug" style="text-decoration: none; color: inherit">
            <v-icon>mdi-cart-arrow-down</v-icon>
          </g-link>
        </v-btn>
        <v-btn
          v-else
          icon
          color="pink"
          class="snipcart-add-item"
          :data-item-id="product.slug"
          data-item-description="toto je test"
          :data-item-image="getStrapiMedia(product.thumb.url)"
          :data-item-price="product.price"
          :data-item-name="product.name"
          :data-item-url="'/product/' + product.slug"
        >
          <v-icon>mdi-cart-arrow-down</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>

<script>
import { getStrapiMedia } from "~/utils/medias";

export default {
  props: ["product"],
  methods: {
    getStrapiMedia,
  },
};
</script>
<style lang="scss" scoped>
.v-card__title {
  line-height: 24px;
  height: 65px;
  align-items: flex-start;
}
</style>
