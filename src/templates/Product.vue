<template>
  <Layout>
    <v-container>
      <v-row class="product-detail">
        <v-col cols="12" md="4">
          <v-carousel>
            <v-carousel-item
              v-for="(item, i) in $page.strapi.products[0].gallery"
              :key="i"
              :src="getStrapiMedia(item.url)"
              reverse-transition="fade-transition"
              transition="fade-transition"
            ></v-carousel-item>
          </v-carousel>
        </v-col>
        <v-col cols="12" md="8">
          <h1 class="text-h3">
            {{ $page.strapi.products[0].name }}
          </h1>
          <RichText :data="{ content: $page.strapi.products[0].desc }" />
          <v-select
            v-if="$page.strapi.products[0].variants.length > 0"
            v-model="selectedVariant"
            :items="$page.strapi.products[0].variants"
            item-text="variant_name"
            item-value="variant_name"
            label="Výber"
            persistent-hint
            return-object
            single-line
          ></v-select>
          <div class="product-price">{{ $page.strapi.products[0].price }}</div>
          <v-btn
            icon
            color="primary"
            class="snipcart-add-item"
            :data-item-id="$page.strapi.products[0].slug"
            data-item-description="toto je test"
            :data-item-image="getStrapiMedia($page.strapi.products[0].thumb.url)"
            :data-item-price="$page.strapi.products[0].price"
            :data-item-name="$page.strapi.products[0].name"
            :data-item-url="'https://strapi-eshop-test.netlify.app/product/' + $page.strapi.products[0].slug"
          >
            <v-icon>mdi-cart-arrow-down</v-icon></v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query ($slug: String!) {
  strapi {
    products(where: { slug: $slug }) {
      name
      desc
      price
      slug
      product_parameters {
        	__typename
        ... on strapiTypes_ComponentSectionsProductParameters {
          id
          paramater_name,
          parameter_info
        }
      }
      thumb {
        id
        url
      }
      gallery {
        id
        url
      }
      categories {
        id
        title
      }
      variants {
        __typename
        ... on strapiTypes_ComponentSectionsVariants {
          id
          variant_name
        }
      }
    }
  }
}
</page-query>

<script>
import RichText from "~/components/RichText";
import { getStrapiMedia } from "~/utils/medias";
import { getMetaTags } from "~/utils/seo";
import axios from "axios";
export default {
  name: "Product",
  methods: {
    getStrapiMedia,
  },
  components: {
    RichText,
  },
  metaInfo() {
    const { name, desc, thumb } = this.$page.strapi.products[0];
    const image = getStrapiMedia(thumb.url);
    return {
      name,
      meta: getMetaTags(name, desc, image),
    };
  },
  data() {
    return {
      selectedVariant: "",
    };
  },
  mounted() {
    const secret = "YzFjZWRjMGYtODAxMS00ZjgxLTg4ODEtZmEzZTg3MGE1ZGFiNjM3NDkxNzY0NTI2ODMyNDQ0";
    axios
      .get("https://app.snipcart.com/api/orders", {
        headers: {
          Authorization: `Basic ${btoa(secret)}`,
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
<style lang="scss">
.product-detail {
  .v-image__image--cover {
    background-size: contain;
  }
  ul {
    list-style: initial;
  }
}
</style>
