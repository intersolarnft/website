<template>
  <div class="tweets" :class="{ 'is-loading': isLoading }">
    <div class="p-5 loading-container">
      <img class="spinner" alt="Loading" src="~/assets/img/spinner.svg" />
    </div>

    <div class="row tweets-row">
      <div class="col-md-6">
        <blockquote class="twitter-tweet" data-theme="dark">
          <p lang="en" dir="ltr">
            I think I need a lot of sol.<br />I need to turn my wallet into the
            universe.<a href="https://t.co/g0YjTS9SSG"
              >https://t.co/g0YjTS9SSG</a
            ><a href="https://twitter.com/interSOLarNFT?ref_src=twsrc%5Etfw"
              >@interSOLarNFT</a
            >
            <a
              href="https://twitter.com/hashtag/SolanaNFT?src=hash&amp;ref_src=twsrc%5Etfw"
              >#SolanaNFT</a
            >
            <a href="https://t.co/CiGKAnnu6u">pic.twitter.com/CiGKAnnu6u</a>
          </p>
          &mdash; liebe (@liebe870317)
          <a
            href="https://twitter.com/liebe870317/status/1447628047436304389?ref_src=twsrc%5Etfw"
            >October 11, 2021</a
          >
        </blockquote>
      </div>

      <div class="col-md-6">
        <blockquote class="twitter-tweet" data-theme="dark">
          <p lang="en" dir="ltr">
            (1/2) Was just gifted my own planet from the
            <a href="https://twitter.com/interSOLarNFT?ref_src=twsrc%5Etfw"
              >@interSOLarNFT</a
            >
            team and WOW this is an amazing concept<br /><br />Their first solar
            system includes 1969 planet NFTs<br /><br />In the second phase,
            people mine spaceships NFTs, with which it will later be possible to
            travel from planet to planet
            <a href="https://t.co/rsp6ZD83s9">pic.twitter.com/rsp6ZD83s9</a>
          </p>
          &mdash; SOL₳N₳ G₳WD | Metasaurs (@SolanaGawd)
          <a
            href="https://twitter.com/SolanaGawd/status/1447623430292004871?ref_src=twsrc%5Etfw"
            >October 11, 2021</a
          >
        </blockquote>
      </div>
    </div>
    <script
      async
      src="https://platform.twitter.com/widgets.js"
      charset="utf-8"
      @load="onLoadTwitterScript"
    ></script>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      isLoading: true,
    };
  },

  methods: {
    onLoadTwitterScript() {
      // @ts-ignore
      window.twttr.ready((twitter) => {
        twitter.events.bind('rendered', () => {
          this.onFinishRenderTweets();
        });
      });
    },

    onFinishRenderTweets() {
      this.isLoading = false;
    },
  },
});
</script>
