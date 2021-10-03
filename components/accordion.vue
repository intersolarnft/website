<template>
  <div class="accordion">
    <slot />
  </div>
</template>

<script>
export default {
  mounted() {
    this.onMounted();
  },
  methods: {
    onMounted() {
      this.$on('onOpenCollapsible', () => {
        this.$children.forEach((collapsible) => {
          collapsible.close();
        });
      });
    },
  },
};
</script>
