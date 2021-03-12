<template>
  <v-app>
    <!-- Content anchored to top -->
    <v-main>
      <Navbar />
      <slot />
    </v-main>
    <!-- Content anchored to bottom -->
    <Footer />
  </v-app>
</template>

<static-query>
query {
  strapi {
    global {
      siteName
      siteLanguage
      favicon {
        url
      }
    }
  }
}
</static-query>

<script>
import Navbar from "~/components/Navbar";
import Footer from "~/components/Footer";
import { getStrapiMedia } from "~/utils/medias";

export default {
  components: {
    Navbar,
    Footer,
  },
  metaInfo() {
    const globalConfig = this.$static.strapi.global;
    return {
      titleTemplate: `%s | ${globalConfig.siteName}`,
      htmlAttrs: {
        lang: globalConfig.siteLanguage,
      },
      link: [
        {
          rel: "icon",
          href: getStrapiMedia(globalConfig.favicon.url),
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
}
</style>
