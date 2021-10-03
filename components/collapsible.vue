<template>
  <div :class="['collapsible', { open: isOpen }]" @click="onClickButton">
    <h3 class="p mb-0">
      <slot name="label" />
    </h3>
    <div class="content">
      <p class="mt-3">
        <slot name="content" />
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  data() {
    return {
      isOpen: false,
    };
  },

  methods: {
    onClickButton() {
      if (!this.isOpen) {
        this.$parent.$emit('onOpenCollapsible');
      }

      this.isOpen = !this.isOpen;
    },

    close() {
      this.isOpen = false;
    },
  },
});
</script>
