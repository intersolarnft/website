<template>
  <div class="mb-3 mb-md-0 col-md-4">
    <div class="card card-hover">
      <slot />
      <div class="pt-3 pl-3 d-none">
        <h4 class="heading">{{ name }}</h4>
        <br />
        <div class="badge badge-pill mb-3 price-chip px-2">
          <img class="solana-logo" src="~assets/img/solana-logo.png" />
          {{ price }} SOL
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  props: {
    name: {
      required: true,
      type: String,
    },
    price: {
      required: true,
      type: String,
    },
  },
});
</script>
