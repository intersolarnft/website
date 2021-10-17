<template>
  <div>
    <div class="slider-traits">
      <div class="trait-navigation">
        <div class="row justify-content-between">
          <div class="col-6 col-md-auto">
            <button
              class="
                btn
                btn-outline-primary
                btn-icon
                btn-slider
                btn-trait
                btn-trait-prev
              "
            >
              <img src="~assets/img/arrow-left.svg" />
            </button>
          </div>
          <div class="col-6 col-md-auto">
            <button
              class="
                btn
                btn-outline-primary
                btn-icon
                btn-slider
                btn-trait
                btn-trait-next
              "
            >
              <img src="~assets/img/arrow-right.svg" />
            </button>
          </div>
        </div>
      </div>
      <swiper
        :options="{
          spaceBetween: 15,
          centeredSlides: true,
          shortSwipes: false,
          preventClicks: false,
          navigation: {
            prevEl: '.btn-trait-prev',
            nextEl: '.btn-trait-next',
          },
        }"
      >
        <swiper-slide
          v-for="(trait, traitIndex) in traits"
          :key="`${trait.name}-${traitIndex}`"
        >
          <div class="row justify-content-center">
            <div class="col-md-8 col-lg-6">
              <div class="card mt-3">
                <div class="card-body">
                  <h3>
                    {{ traitIndex + 1 }}/{{ traits.length }} {{ trait.name }}
                  </h3>
                  <p v-if="trait.name === 'Surroundings'">
                    Our planets are surrounded by stars and colorful nebula.
                    Some are silent witnesses of starshowers or might even be
                    sucked into a black hole.
                  </p>
                  <p v-if="trait.name === 'Surface'">
                    There are four elements. Stone, sand, gas and water. These
                    come in varying colors and also with their own surface
                    texture.
                  </p>
                  <p v-if="trait.name === 'Rings'">
                    Every particle coming by the immense mass of our planets is
                    damned to draw it's circles in eternity. This trait varies
                    in color and orientation.
                  </p>
                  <p v-if="trait.name === 'Natural satellites'">
                    Wouldn't it be sad if our planet had to be alone? With this
                    trait they can get up to three moon buddies.
                  </p>
                  <p v-if="trait.name === 'Events'">
                    There are only a few choosen planets who are visited by one
                    of our special events. These traits have some of the highest
                    rarities of all and are the knight blow of a NFT.
                  </p>
                  <swiper
                    :options="{
                      spaceBetween: 15,
                      autoHeight: true,
                      navigation: {
                        prevEl: `.btn-variant-${traitIndex}-prev`,
                        nextEl: `.btn-variant-${traitIndex}-next`,
                      },
                    }"
                  >
                    <swiper-slide
                      v-for="(variant, variantIndex) in trait.variants"
                      :key="`${variant.name}-${variantIndex}`"
                    >
                      <img
                        class="img-fluid mb-3 img-variant"
                        :src="
                          require(`assets/img/traits/${toKebabCase(
                            trait.name
                          )}/${toKebabCase(variant.name)}.jpg`)
                        "
                      />
                      <div class="text-center variant-text">
                        <small class="d-inline-block mb-3">
                          {{ variantIndex + 1 }}/{{ trait.variants.length }}
                        </small>

                        <p>
                          <b>{{ variant.name }}</b>
                          <br />
                          {{ variant.percentage.toFixed(2) }}%
                        </p>
                      </div>
                    </swiper-slide>
                  </swiper>
                  <div class="variant-navigation">
                    <div class="variant-navigation-container">
                      <div class="row mt-3 justify-content-between">
                        <div class="col-auto">
                          <button
                            class="
                              btn
                              btn-outline-primary
                              btn-icon
                              btn-slider
                              btn-variant
                            "
                            :class="`btn-variant-${traitIndex}-prev`"
                          >
                            <img src="~assets/img/arrow-left.svg" />
                          </button>
                        </div>
                        <div class="col-auto">
                          <button
                            class="
                              btn
                              btn-outline-primary
                              btn-icon
                              btn-slider
                              btn-variant
                            "
                            :class="`btn-variant-${traitIndex}-next`"
                          >
                            <img src="~assets/img/arrow-right.svg" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </swiper-slide>
      </swiper>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper';
import SwiperCore, { Navigation } from 'swiper/core';

SwiperCore.use([Navigation]);

export default Vue.extend({
  components: {
    Swiper,
    SwiperSlide,
  },

  directives: {
    swiper: directive,
  },

  data() {
    return {
      traits: [
        {
          name: 'Surroundings',
          variants: [
            {
              name: 'Space',
              percentage: 30.57,
            },
            {
              name: 'Deep space',
              percentage: 17.37,
            },
            {
              name: 'Infrared space',
              percentage: 1.02,
            },
            {
              name: 'Shooting stars',
              percentage: 4.06,
            },
            {
              name: 'Red and blue nebula',
              percentage: 8.94,
            },
            {
              name: 'Purple and red nebula',
              percentage: 8.94,
            },
            {
              name: 'Blue, yellow and red nebula',
              percentage: 8.94,
            },
            {
              name: 'White, pink and blue nebula',
              percentage: 8.94,
            },
            {
              name: 'Blue and red nebula',
              percentage: 8.94,
            },
            {
              name: 'Galaxies',
              percentage: 2.03,
            },
            {
              name: 'Black hole',
              percentage: 0.2,
            },
          ],
        },
        {
          name: 'Surface',
          variants: [
            {
              name: 'Brown sand',
              percentage: 7.72,
            },
            {
              name: 'Blue sand',
              percentage: 7.72,
            },
            {
              name: 'Red sand',
              percentage: 7.72,
            },
            {
              name: 'Black sand',
              percentage: 7.72,
            },
            {
              name: 'Blue water',
              percentage: 7.72,
            },
            {
              name: 'Green water',
              percentage: 7.72,
            },
            {
              name: 'Pink water',
              percentage: 7.72,
            },
            {
              name: 'Gray water',
              percentage: 7.72,
            },
            {
              name: 'Turquoise gas',
              percentage: 1.88,
            },
            {
              name: 'Red gas',
              percentage: 1.68,
            },
            {
              name: 'Purple gas',
              percentage: 1.88,
            },
            {
              name: 'Green gas',
              percentage: 1.88,
            },
            {
              name: 'Gray rock',
              percentage: 7.72,
            },
            {
              name: 'Brown rock',
              percentage: 7.72,
            },
            {
              name: 'Red rock',
              percentage: 7.72,
            },
            {
              name: 'Blue rock',
              percentage: 7.72,
            },
          ],
        },
        {
          name: 'Rings',
          variants: [
            {
              name: 'Gray diagonal rings',
              percentage: 8.13,
            },
            {
              name: 'Gray vertical rings',
              percentage: 8.13,
            },
            {
              name: 'Blue diagonal rings',
              percentage: 8.13,
            },
            {
              name: 'Blue vertical rings',
              percentage: 8.13,
            },
            {
              name: 'Pink diagonal rings',
              percentage: 8.13,
            },
            {
              name: 'Pink vertical rings',
              percentage: 8.13,
            },
            {
              name: 'Golden diagonal rings',
              percentage: 1.02,
            },
            {
              name: 'Golden vertical rings',
              percentage: 1.02,
            },
          ],
        },
        {
          name: 'Natural satellites',
          variants: [
            {
              name: 'Big moon',
              percentage: 10.16,
            },
            {
              name: 'Medium moon',
              percentage: 10.16,
            },
            {
              name: 'Small moon',
              percentage: 10.16,
            },
            {
              name: 'Golden big moon',
              percentage: 0.61,
            },
            {
              name: 'Golden medium moon',
              percentage: 0.61,
            },
            {
              name: 'Golden small moon',
              percentage: 0.61,
            },
            {
              name: 'Big and medium moon',
              percentage: 10.16,
            },
            {
              name: 'Golden big and medium moon',
              percentage: 0.61,
            },
            {
              name: 'Big and golden medium moon',
              percentage: 0.61,
            },
            {
              name: 'Golden big and golden medium moon',
              percentage: 0.61,
            },
            {
              name: 'Medium and small moon',
              percentage: 10.16,
            },
            {
              name: 'Golden medium and small moon',
              percentage: 0.61,
            },
            {
              name: 'Medium and golden small moon',
              percentage: 0.61,
            },
            {
              name: 'Golden medium and golden small moon',
              percentage: 0.61,
            },
            {
              name: 'Big and small moon',
              percentage: 10.16,
            },
            {
              name: 'Golden big and small moon',
              percentage: 0.61,
            },
            {
              name: 'Big and golden small moon',
              percentage: 0.61,
            },
            {
              name: 'Golden big and golden small moon',
              percentage: 0.61,
            },
            {
              name: 'Big, medium and small moon',
              percentage: 0.81,
            },
            {
              name: 'Golden big, medium and small moon',
              percentage: 0.61,
            },
            {
              name: 'Big, golden medium and small moon',
              percentage: 0.61,
            },
            {
              name: 'Big, medium and golden small moon',
              percentage: 0.61,
            },
            {
              name: 'Golden big, golden medium and golden small moon',
              percentage: 0.2,
            },
          ],
        },
        {
          name: 'Events',
          variants: [
            {
              name: 'Single meteor',
              percentage: 20.31,
            },
            {
              name: 'Meteor shower',
              percentage: 10.16,
            },
            {
              name: 'Big cat',
              percentage: 0.05,
            },
            {
              name: 'Small cat',
              percentage: 0.05,
            },
            {
              name: 'Astronaut',
              percentage: 0.05,
            },
          ],
        },
      ],
      selectedTrait: null,
    };
  },

  methods: {
    toKebabCase(input: string): string {
      return input.toLowerCase().replace(/ /g, '-').replace(/,/g, '');
    },
  },
});
</script>
