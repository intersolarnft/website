<!--
  Loading image
  Image with loading animation
-->

<template>
  <div class="img-loading" :class="{ 'is-loading': !imageHasLoaded }">
    <img class="spinner" alt="Loading" src="~/assets/img/spinner.svg" />
    <img
      :class="imgClass"
      :src="src"
      :alt="src.split('/')[src.split('/').length - 1]"
      @load="onLoadImage"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    src: {
      required: true,
      type: String,
    },

    imgClass: {
      default: '',
      type: String,
    },
  },

  data() {
    return {
      imageHasLoaded: false,
    };
  },

  methods: {
    onLoadImage() {
      this.imageHasLoaded = true;
      this.$emit('load');
    },
  },
});
</script>
