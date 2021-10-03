<!--
  Index
-->

<template>
  <div>
    <div class="section section-hero">
      <div class="container">
        <div ref="heroDecorator" class="decorator" />
        <div class="row align-items-center">
          <div class="col-lg-6 order-lg-2">
            <div class="hero-animation">
              <img class="img-fluid img-planet" src="~assets/img/planet.png" />
              <img class="img-fluid img-moon-1" src="~assets/img/moon-1.png" />
              <img class="img-fluid img-moon-2" src="~assets/img/moon-2.png" />
            </div>
          </div>
          <div class="col-lg-6 order-lg-1">
            <h1>Ready to explore?</h1>
            <p>
              A digital universe made up of 502 planets and 9 suns using NFTs.
              Each one unique and a few even rare. Explore. Collect. Make them
              yours.
            </p>
            <a
              href="https://get.intersolar-nft.com"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-primary d-none"
            >
              Get your NFTs
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2>A brief history</h2>
            <p class="lead-md">
              Everything significant in the world has a beginning - so does the
              universe. It describes the totality of space, time and all matter
              and energy contained therein. Our cosmos is the interSOLar,
              wherein 8 galaxies filled with a diminishing number of
              extraordinary and distinctive planetary constellations are
              contained.
            </p>
            <p class="lead-md">
              Each of these unique constellations exists as an NFT (Non-fungible
              token) on the lightning fast Solana Blockchain waiting to
              exclusivly be yours.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>The planets</h2>
        <p>
          The endless expanse of the Intersolar universe is filled with yawning
          emptiness. But it is also inhabited by some celestial bodies. A total
          of 28 unique planets are spread over 8 episodes to discover. Here you
          can find some of our favorites from the current episode.
        </p>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2>Our Roadmap</h2>
            <p class="mb-5">
              We have big plans. But we only can reach our goals one step at a
              time and with your support. Share Intersolar with your friends and
              the world and be part of the growing universe. Our roadmap will be
              updated every once in a while.
            </p>
            <ul class="list-unstyled lead-md checklist">
              <li>
                <img src="~assets/img/check-circle.svg" />
                Launch website and Metaplex
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                Release first edition of NFTs
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                Get listed and verified on Digital Eyes marketplace
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                Get listed and verified on Magic Eden marketplace
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                Get listed and verified on Salonart marketplace
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                Get listed and verified on Solsea marketplace
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                Collaboration with another Solana NFT project
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                Build an interactive map to discover your own and collectible
                NFTs
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>FAQ</h2>
        <Accordion>
          <Collapsible>
            <template #label>How can I buy a planet?</template>
            <template #content>
              Planets can be bought with Solana through our Metaplex or through
              one of the marketplaces we are listed on.
            </template>
          </Collapsible>
          <Collapsible>
            <template #label>Where can I buy a planet?</template>
            <template #content>
              New planets will always be available on our Metaplex first. We
              will then make them available on other marketplaces (Digital Eyes,
              Magic Eden, Salonart, Solsea) as soon as possible.
            </template>
          </Collapsible>
          <Collapsible>
            <template #label>When can I buy a planet?</template>
            <template #content>
              All planets of the first solar system will be available in our
              Metaplex on October 6th.
            </template>
          </Collapsible>
          <Collapsible>
            <template #label>When will all planets be available?</template>
            <template #content>
              All planets will be released in editions (solar systems), starting
              with a number of 2<sup>8</sup> planets in the first system, 2<sup
                >7</sup
              >
              in the second system, and so on, as we travel farer into the void
              of space. Each of these 502 planets and 9 suns will have unique
              properties and are available only once.
            </template>
          </Collapsible>
          <Collapsible>
            <template #label>How many traits does a planet have?</template>
            <template #content>
              Planets can have up to 5 traits (surroundings, surface, natural
              satellites, rings, and events). All trait variants have different
              levels of rareness, so there will be combinations that are super
              rare.
            </template>
          </Collapsible>
          <Collapsible>
            <template #label>
              Do planets have secondary sale royalties?
            </template>
            <template #content>
              Yes, royalties are set at 5% for secondary sales.
            </template>
          </Collapsible>
          <Collapsible>
            <template #label>
              Am I the owner of the planet after buying?
            </template>
            <template #content>
              Yes, full ownership of the token is transfered to the buyer after
              sale.
            </template>
          </Collapsible>
        </Accordion>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2>Stay in touch</h2>
            <p>
              Follow and join us on our social platforms. We are here to answer
              your questions and keep you updated about the Intersolar project.
            </p>
            <div class="row justify-content-center mt-5">
              <div class="d-flex justify-content-center col-md-auto">
                <a
                  class="btn btn-outline-primary btn-icon-left"
                  href="https://twitter.com/interSOLarNFT"
                >
                  <img class="icon" src="~assets/img/twitter.svg" />
                  Follow us on Twitter
                </a>
              </div>
              <div
                class="d-flex justify-content-center mt-3 mt-md-0 col-md-auto"
              >
                <a
                  class="btn btn-outline-primary btn-icon-left"
                  href="https://discord.gg/2dYczJsW8Q"
                >
                  <img class="icon" src="~assets/img/discord.svg" />
                  Join us on Discord
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  mounted() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      this.$refs.heroDecorator.style.transform =
        'translateY(' + scrollTop * 0.4 + 'px)';
    });
  },
});
</script>
