<template>
  <Layout>
    <v-container>
      <v-card>
        <v-app-bar color="primary" dark dense>
          <v-toolbar-title class="d-block">{{ $page.strapi.home.title }}</v-toolbar-title>
        </v-app-bar>
        <RichText :data="{ content: $page.strapi.home.bio }" />
      </v-card>
      <!-- List of project preview cards -->
      <v-row>
        <ProductCard v-for="product in $page.strapi.products" :key="product.id" :product="product" />
      </v-row>
    </v-container>
  </Layout>
</template>

<page-query>
query {
  strapi {
    # Get homepage data
    home {
      title
      bio
      # Metadata for SEO
      seo {
        title
        description
        shareImage {
          id
          url
        }
      }
    }
    # List projects
    products {
      id
      name
      desc
      price
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
      slug
    }
  }
}
</page-query>

<script>
import ProductCard from "~/components/ProductCard";
import RichText from "~/components/RichText";
import { getStrapiMedia } from "~/utils/medias";
import { getMetaTags } from "~/utils/seo";

export default {
  methods: {
    getStrapiMedia,
  },
  components: {
    ProductCard,
    RichText,
  },
  metaInfo() {
    const { title, description, shareImage } = this.$page.strapi.home.seo;
    const image = getStrapiMedia(shareImage.url);
    return {
      title,
      meta: getMetaTags(title, description, image),
    };
  },
};
</script>

<style lang="scss" scoped>
img {
  width: 100%;
  height: auto;
}
.v-card__title {
  line-height: 24px;
  height: 80px;
}
</style>
