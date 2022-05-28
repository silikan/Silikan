<template>

  <div
    class="
      container
      mx-auto
      sm:px-6
      lg:px-8
      grid grid-cols-1
      xl:grid-cols-3
      items-center
    "
  >
    <GigGallery class="col-span-2" :images="gigImages.data"/>

    <!-- ... -->
    <GigPricing  />
  </div>


</template>

<script>
import { computed } from '@vue/runtime-core';
import { useStore } from 'vuex';
import GigGallery from "../components/Gig/GigPage/Gig_Gallery.component.vue";
import GigPricing from "../components/Gig/GigPage/Gig_Pricing.component.vue";
import { useRoute } from 'vue-router';
export default {
  components: { GigGallery, GigPricing },

  setup() {
    const store = useStore();
    let route = useRoute();
    let id = route.params.id;


      store.dispatch('Gig/getGigImages', id);

  store.dispatch('Gig/gigPageViews', id);

    let gigImages = computed(() => {
      return store.getters['Gig/getFetchedGigImages'];
    });


    return {
      gigImages,

    };
  },
};
</script>

<style>
</style>
