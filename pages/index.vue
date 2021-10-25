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
            <h1>More than fancy images.</h1>
            <p>
              Every Intersolar NFT has a <b>unique position</b> in our NFT
              universe. You will <b>travel</b> from planet to planet,
              <b>mine</b> resources and <b>build</b>
              your space empire.
            </p>
            <a
              href="https://intersolar-nft.web.app/map"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-outline-primary"
            >
              Go to Starmap
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="alert alert-secondary text-center p-3 py-5 p-md-5">
          <h2 class="mb-2">Presale for 0.5 SOL</h2>
          <p class="lead">
            Dropping another 300 of 1969 planets
            <b>Wednesday, October 27th | 2pm UTC</b>
          </p>
          <countdown
            v-slot="{ days, hours, minutes, seconds }"
            :time="countdownTime"
            :transform="transformSlotProps"
            tag="div"
            class="countdown my-4"
            @end="onEndCountdown"
          >
            <div class="row gutter-narrow justify-content-center">
              <div class="col-auto">
                <div class="counter">
                  <div class="value">
                    <span class="h2 mb-0 text-monospace">{{ days }}</span>
                  </div>
                  <span class="unit mt-2 mt-lg-1 ml-lg-2">
                    <small>Days</small>
                  </span>
                </div>
              </div>

              <div class="col-auto">
                <div class="counter">
                  <div class="value">
                    <span class="h2 mb-0 text-monospace">{{ hours }}</span>
                  </div>
                  <span class="unit mt-2 mt-lg-1 ml-lg-2">
                    <small>Hours</small>
                  </span>
                </div>
              </div>

              <div class="col-auto">
                <div class="counter">
                  <div class="value">
                    <span class="h2 mb-0 text-monospace">{{ minutes }}</span>
                  </div>
                  <span class="unit mt-2 mt-lg-1 ml-lg-2">
                    <small>Minutes</small>
                  </span>
                </div>
              </div>

              <div class="col-auto">
                <div class="counter">
                  <div class="value">
                    <span class="h2 mb-0 text-monospace">{{ seconds }}</span>
                  </div>
                  <span class="unit mt-2 mt-lg-1 ml-lg-2">
                    <small>Seconds</small>
                  </span>
                </div>
              </div>
            </div>
          </countdown>
          <p v-if="!countdownHasEnded" class="mb-4">left until drop.</p>
          <p v-else class="lead mb-4">Let's go! 🚀🚀🚀</p>
          <a
            href="https://intersolar-nft.web.app"
            target="_blank"
            rel="noopener noreferrer"
            class="btn btn-primary"
          >
            Get your NFT
          </a>
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
              time and with your support. Share Intersolar with your friends and
              the world and be part of the growing universe.
            </p>
            <ul class="list-unstyled lead-md checklist">
              <li>
                <!--
                <img src="~assets/img/check-circle.svg" />
                -->
                <img src="~assets/img/circle.svg" />
                <div>
                  <h3>Phase 1: Genesis</h3>
                  <p>
                    Explore (mint) celestial objects and make them visible on
                    the starmap.
                  </p>
                </div>
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                <div>
                  <h3>Phase 2: Departure</h3>
                  <p>
                    Build (mint) spaceships and spacestations for traveling
                    between celestial objects.
                  </p>
                </div>
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                <div>
                  <h3>Phase 3: A new economy</h3>
                  <p>
                    Introduce the intersolar currency and make trading
                    available.
                  </p>
                </div>
              </li>
              <li>
                <img src="~assets/img/circle.svg" />
                <div>
                  <h3>Phase 4: Civilization</h3>
                  <p>Enable resource mining and make travel available.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>Every trait a treat</h2>
        <p>
          It's not only that we took a lot of care to make every planet look
          stunning and harmonic. We also want to satisfy the collectors heart.
          Just like a card game every celestial body comes with traits of
          varying rarities. These rarities might foreshadow also the importance
          of a planet in our upcoming phases. So stay tuned!
        </p>
        <div class="row">
          <div class="col-12">
            <slider-traits class="mt-lg-5" />
          </div>
        </div>
      </div>
    </div>

    <!--
    <div class="section">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8">
            <h2>A brief history</h2>
            <p class="lead-md">
              <b>Everything significant in the world has a beginning</b> – so
              does the universe. It describes the totality of space, time and
              all matter and energy contained therein. Our cosmos is the
              intersolar, wherein solar systems with planets are contained.
            </p>
            <p class="lead-md">
              Each of these suns and planets exists as an NFT (Non-fungible
              token) on the lightning fast
              <a
                href="https://solana.com/"
                target="_blank"
                rel="noopener noreferrer"
                >Solana</a
              >
              Blockchain waiting to be exclusively explored (minted) by you.
            </p>
          </div>
        </div>
      </div>
    </div>
    -->

    <div class="section section-planets">
      <div class="container">
        <h2>The planets</h2>
        <p>
          See some of our favourite planets from our last presale of solar
          system #1.
        </p>
        <div class="row mt-5">
          <div class="mb-3 mb-md-0 col-md-4">
            <card-planet
              name="#126"
              price="0.3"
              minted
              :image-source="require('assets/img/planets/126.jpg')"
            />
          </div>
          <div class="mb-3 mb-md-0 col-md-4">
            <card-planet
              name="#132"
              price="0.3"
              minted
              :image-source="require('assets/img/planets/132.jpg')"
            />
          </div>
          <div class="col-md-4">
            <card-planet
              name="#173"
              price="0.3"
              minted
              :image-source="require('assets/img/planets/173.jpg')"
            />
          </div>
        </div>
        <div class="row mt-5 justify-content-center">
          <div class="col-auto">
            <a
              class="btn btn-outline-primary"
              href="https://intersolar-nft.web.app/map"
              target="_blank"
              rel="noopener noreferrer"
            >
              Go to Starmap
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="section section-planets">
      <div class="container">
        <h2>Trade your planets</h2>
        <p>
          We are verified on follwing NFT marketplaces, so you can trade your
          planets with other Intersolarians.
        </p>
        <div class="row mt-5">
          <div class="mb-3 mb-md-0 col-md-4">
            <div class="card">
              <img class="img-fluid" src="~assets/img/digital-eyes.jpg" />
              <div class="card-body">
                <h3>Digital Eyes</h3>
                <p>
                  <a
                    href="https://digitaleyes.market/collections/Intersolar"
                    class="stretched-link text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to marketplace
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="mb-3 mb-md-0 col-md-4">
            <div class="card">
              <img class="img-fluid" src="~assets/img/grail-market.jpg" />
              <div class="card-body">
                <h3>Grail Market</h3>
                <p>
                  <a
                    href="https://grail.market/#/collection/intersolar"
                    class="stretched-link text-white"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Go to marketplace
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div class="mb-3 mb-md-0 col-md-4">
            <div class="card h-100">
              <div
                class="
                  card-body
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <p class="h3">More coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>The Team</h2>
        <div class="row">
          <div class="mb-3 col-md-6 mb-lg-0 col-lg-3">
            <card-team
              class="h-100"
              :image-source="require('assets/img/ducati.png')"
              title="Ducati"
              position="Marketing"
            />
          </div>
          <div class="mb-3 col-md-6 mb-lg-0 col-lg-3">
            <card-team
              class="h-100"
              :image-source="require('assets/img/ezra.png')"
              title="Ezra"
              position="Development"
            />
          </div>
          <div class="mb-3 mb-md-0 col-md-6 col-lg-3">
            <card-team
              class="h-100"
              :image-source="require('assets/img/krios.png')"
              title="Krios"
              position="Development"
            />
          </div>
          <div class="col-md-6 col-lg-3">
            <card-team
              class="h-100"
              :image-source="require('assets/img/onyx.png')"
              title="Onyx"
              position="Design"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <h2>FAQ</h2>
        <accordion>
          <collapsible>
            <template #label>What is Intersolar?</template>
            <template #content>
              Intersolar is a digital universe of solar systems with planets and
              suns represented as NFTs on the Solana blockchain.
            </template>
          </collapsible>
          <collapsible>
            <template #label>What does NFT mean?</template>
            <template #content>
              NFT stands for
              <a
                href="https://en.wikipedia.org/wiki/Non-fungible_token"
                target="_blank"
                rel="noopener noreferrer"
                >Non-fungible token</a
              >. Our NFTs are stored on the Solana blockchain to provide proof
              of ownership. The NFT images itself are stored permanently on the
              »permaweb« using the Arweave Blockchain.
            </template>
          </collapsible>
          <collapsible>
            <template #label>How can I buy a planet / NFT?</template>
            <template #content>
              Purchasing a planet is super easy. Connect your Solana wallet and
              visit our
              <a
                href="https://get.intersolar-nft.com/"
                target="_blank"
                rel="noopener noreferrer"
                >minting site</a
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
                  to your Phantom wallet public Address.
                </li>
                <li>
                  Connect your Phantom wallet to our
                  <a
                    href="https://get.intersolar-nft.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    >minting site</a
                  >

                  by clicking on the »Connect Wallet« button.
                </li>
                <li>Click on »Mint«.</li>
              </ol>
            </template>
          </collapsible>
          <collapsible>
            <template #label>Where can I buy a planet?</template>
            <template #content>
              New planets are always available via our minting site. You can
              also trade them on various Solana marketplaces with other planet
              owners.
            </template>
          </collapsible>
          <collapsible>
            <template #label>How many traits does a planet have?</template>
            <template #content>
              Planets can have up to 5 traits (surroundings, surface, natural
              satellites, rings, and events). All trait variants have different
              levels of rareness, so there will be combinations that are super
              rare.
            </template>
          </collapsible>
          <collapsible>
            <template #label>
              Do planets have secondary sale royalties?
            </template>
            <template #content>
              Yes, royalties are set at 7.5% for secondary sales.
            </template>
          </collapsible>
          <collapsible>
            <template #label>
              Am I the owner of the planet after buying?
            </template>
            <template #content>
              Yes, full ownership of the token is transferred to the buyer after
              sale.
            </template>
          </collapsible>
        </accordion>
      </div>
    </div>

    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-6">
            <h2>See what others are saying</h2>
          </div>
        </div>
        <tweets />
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
                  href="https://discord.gg/XBGb9rhG4h"
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
  data() {
    return {
      countdownHasEnded: false,
    };
  },

  computed: {
    countdownTime() {
      const now = new Date();
      const dropDate = new Date(Date.UTC(2021, 9, 27, 14, 0));
      return dropDate.getTime() - now.getTime();
    },
  },

  mounted() {
    window.addEventListener('scroll', () => {
      const scrollTop = window.pageYOffset;
      // @ts-ignore
      this.$refs.heroDecorator.style.transform =
        'translateY(' + scrollTop * 0.4 + 'px)';
    });
  },

  methods: {
    // @ts-ignore
    transformSlotProps(props) {
      const formattedProps = {};

      Object.entries(props).forEach(([key, value]) => {
        // @ts-ignore
        formattedProps[key] = value < 10 ? `0${value}` : String(value);
      });

      return formattedProps;
    },

    onEndCountdown() {
      this.countdownHasEnded = true;
    },
  },
});
</script>
