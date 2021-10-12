<template>
  <div class="card text-center card-team">
    <div class="card-body">
      <div class="mx-auto my-3 image-container">
        <img class="img-fluid img-round" :src="imageSource" />
      </div>
      <h3 class="h2">{{ title }}</h3>
      <p>{{ position }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    imageSource: {
      required: true,
      type: String,
    },

    title: {
      required: true,
      type: String,
    },

    position: {
      required: true,
      type: String,
    },
  },
});
</script>
