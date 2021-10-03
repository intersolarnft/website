<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  mounted() {
    this.$on('onOpenCollapsible', () => {
      this.$children.forEach((collapsible) => {
        // @ts-ignore
        collapsible.close();
      });
    });
  },
});
</script>
