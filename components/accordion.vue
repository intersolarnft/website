<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<script lang="ts">
export default {
  mounted() {
    this.onMounted();
  },
  methods: {
    onMounted() {
      this.$on('onOpenCollapsible', () => {
        this.$children.forEach((collapsible) => {
          // @ts-ignore
          collapsible.close();
        });
      });
    },
  },
};
</script>
