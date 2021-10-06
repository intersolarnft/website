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
              A <b>digital universe</b> consisting of <b>solar systems</b>,
              planets and suns represented as <b>NFTs</b>. Each one unique and a
              few even rare.<br /><br />
              Explore. Collect. Make them yours.
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
              <b>Everything significant in the world has a beginning</b> – so
              does the universe. It describes the totality of space, time and
              all matter and energy contained therein. Our cosmos is the
              interSOLar, wherein solar systems and planets are contained.
            </p>
            <p class="lead-md">
              Each of these unique planets exists as an NFT (Non-fungible token)
              on the lightning fast
              <a
                href="https://solana.com/"
                target="_blank"
                rel="noopener noreferrer"
                >Solana</a
              >
              Blockchain waiting to exclusively be yours.
            </p>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-planets">
      <div class="container">
        <h2>The planets</h2>
        <p>
          See some of our favourite planets of the latest released solar system.
        </p>
        <div class="row mt-5">
          <planet-card name="Mercury" price="1.0">
            <img class="img-fluid" src="~assets/img/planet-example-1.jpg" />
          </planet-card>

          <planet-card name="Venus" price="1.5">
            <img class="img-fluid" src="~assets/img/planet-example-2.jpg" />
          </planet-card>

          <planet-card name="Mars" price="0.8">
            <img class="img-fluid" src="~assets/img/planet-example-3.jpg" />
          </planet-card>
        </div>
        <div class="row mt-5 justify-content-center">
          <div class="col-auto">
            <a
              class="btn btn-outline-primary d-none"
              href="https://get.intersolar-nft.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              See all planets
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2>Our Roadmap</h2>
            <p class="mb-5">
              We have big plans. But we only can reach our goals one step at a
              time and with your support. Share interSOLar with your friends and
              the world and be part of the growing universe. Our roadmap will be
              updated everytime we reach one of our goals.
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
                An interactive map to discover your own and collectible NFTs.
                See which other planets are close to yours
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                A candy machine where you can mint your own NFTs
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                An interactive game that allows you to travel to other planets
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                Get listed on various other marketplaces
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                Collaborations with other Solana NFT projects
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
            <template #label>What is interSOLar?</template>
            <template #content>
              interSOLar is a digital universe consisting of planets
              representing NFTs as images.
            </template>
          </Collapsible>
          <Collapsible>
            <template #label>What does NFT mean?</template>
            <template #content>
              NFT stands for
              <a
                href="https://en.wikipedia.org/wiki/Non-fungible_token"
                target="_blank"
                rel="noopener noreferrer"
                >Non-fungible token</a
              >. Our NFTs are stored on Solana blockchain to provide proof of
              ownership. The NFT images itself are stored permanently on the
              "permaweb" using Arweave Blockchain.
            </template>
          </Collapsible>
          <Collapsible>
            <template #label>How can I buy a planet / NFT?</template>
            <template #content>
              Purchasing a planet is super easy. Connect your Solana wallet and
              visit our
              <a
                href="https://get.intersolar-nft.com/"
                target="_blank"
                rel="noopener noreferrer"
                >store</a
              >.<br /><br />
              <h5 class="custom-heading">Step-By-Step Guide</h5>
              <ol>
                <li>
                  Download the
                  <a
                    href="https://phantom.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    >Phantom wallet extension</a
                  >
                  for your browser (Google Chrome recommended)
                </li>
                <li>
                  Buy Solana (SOL) on an exchange like Coinbase etc. and send it
                  to your Phantom wallet Public Address.
                </li>
                <li>
                  Connect your Phantom Wallet to our
                  <a
                    href="https://get.intersolar-nft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >store</a
                  >

                  by clicking on the Connect button.
                </li>
                <li>Visit our store and buy a super rare planet.</li>
              </ol>
            </template>
          </Collapsible>
          <Collapsible>
            <template #label>Where can I buy a planet?</template>
            <template #content>
              New planets will always be available on our store first. We will
              then make them available on other marketplaces (Digital Eyes,
              Magic Eden, Salonart, Solsea) as soon as possible.
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
              Yes, royalties are set at 7% for secondary sales.
            </template>
          </Collapsible>
          <Collapsible>
            <template #label>
              Am I the owner of the planet after buying?
            </template>
            <template #content>
              Yes, full ownership of the token is transferred to the buyer after
              sale.
            </template>
          </Collapsible>
        </Accordion>
      </div>
    </div>

    <div class="section section-social">
      <div class="container">
        <div class="decorator" />
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
                  target="_blank"
                  rel="noopener noreferrer"
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
                  href="https://discord.gg/nmCBpgA9xt"
                  target="_blank"
                  rel="noopener noreferrer"
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
      // @ts-ignore
      this.$refs.heroDecorator.style.transform =
        'translateY(' + scrollTop * 0.4 + 'px)';
    });
  },
});
</script>
