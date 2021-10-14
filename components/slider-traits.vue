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
                    Text about surroundings
                  </p>
                  <p v-if="trait.name === 'Surface'">Text about surfaces</p>
                  <p v-if="trait.name === 'Rings'">Text about rings</p>
                  <p v-if="trait.name === 'Natural satellites'">
                    Text about natural satellites
                  </p>
                  <p v-if="trait.name === 'Events'">Text about events</p>
                  <swiper
                    :options="{
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
                          {{ variant.percentage }}%
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
              percentage: 5,
            },
            {
              name: 'Deep space',
              percentage: 5,
            },
            {
              name: 'Infrared space',
              percentage: 5,
            },
            {
              name: 'Shooting stars',
              percentage: 5,
            },
            {
              name: 'Red and blue nebula',
              percentage: 5,
            },
            {
              name: 'Purple and red nebula',
              percentage: 5,
            },
            {
              name: 'Blue, yellow and red nebula',
              percentage: 5,
            },
            {
              name: 'White, pink and blue nebula',
              percentage: 5,
            },
            {
              name: 'Galaxies',
              percentage: 5,
            },
            {
              name: 'Black hole',
              percentage: 5,
            },
          ],
        },
        {
          name: 'Surface',
          variants: [],
        },
        {
          name: 'Rings',
          variants: [],
        },
        {
          name: 'Natural satellites',
          variants: [],
        },
        {
          name: 'Events',
          variants: [],
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
