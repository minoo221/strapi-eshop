<template>
  <div class="py-4 px-2">
    <Markdown :source="data.content" class="text-left" />
  </div>
</template>

<script>
import Markdown from "vue-markdown";

export default {
  props: ["data"],
  components: {
    Markdown,
  },
};
</script>
