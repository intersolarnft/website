<template>
  <div class="card-planet">
    <div class="card">
      <img class="img-fluid" :src="imageSource" />
      <div class="card-body">
        <h3>{{ name }}</h3>
        <div>
          <span
            class="
              badge badge-pill badge-primary
              d-inline-flex
              align-items-center
            "
          >
            <img class="img-logo mr-2" src="~assets/img/solana-logo.png" />
            <strike v-if="minted">{{ price }} SOL</strike>
            <span v-else>{{ price }} SOL</span>
            <span v-if="minted" class="ml-2">MINTED</span>
          </span>
        </div>
      </div>
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
    name: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: String,
    },
    minted: {
      type: Boolean,
      default: false,
    },
  },
});
</script>
