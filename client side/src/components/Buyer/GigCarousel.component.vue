<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <Carousel
      :value="gigs"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
        :autoplayInterval="1500"
      :circular="true"
    >
      <template #item="gig">
        <div class="relative bg-white">
          <div class="relative mx-auto">
            <div class=" grid md:mx-5">
              <div
                class="
                  flex flex-col
                  rounded-lg
                  border-x border-b border-gray-200
                  overflow-hidden
                  shadow-inner
                "
              >
                <div
                  class="
                    flex
                    justify-center
                    relative
                    w-full
                    h-72
                    overflow-hidden
                  "
                >
                  <router-link
                    :to="`/gig/${gig.data.id}`"
                    class="
                      flex
                      justify-center
                      relative
                      w-full
                      h-auto
                      overflow-hidden
                    "
                  >
                    <img
                      :src="`${preurl}/${gig.data.images[0].url}`"
                      class="w-full h-full object-center object-cover"
                    />
                  </router-link>
                </div>
                <div
                  class="
                    flex-1
                    bg-white
                    px-5
                    pt-5
                    flex flex-col
                    justify-between
                  "
                >
                  <div class="flex items-center">
                    <div class="flex-shrink-0">
                      <a href="#">
                        <span class="sr-only">{{ gig.data.user.name }}</span>
                        <Avatar
                          v-if="gig.data.user.name"
                          :url="gig.data.user.avatar"
                          :name="gig.data.user.name"
                        />
                      </a>
                    </div>
                    <div class="ml-3">
                      <p class="text-md font-medium text-gray-600">
                        <a href="gig.author.href" class="hover:underline">
                          {{ gig.data.user.name }}
                        </a>
                      </p>
                    </div>
                  </div>
                  <div class="">
                    <p class="truncate text-md font-medium text-gray-500 mt-2">
                      {{ gig.data.title }}

                    </p>
                  </div>
                  <div
                    class="
                      border-t border-gray-200
                      mt-4
                      flex
                      justify-between
                      items-center
                      p-3
                    "
                  >
                    <p class="font-bold text-2xl text-gray-400">
                      {{ JSON.parse(gig.data.basic).price }}$
                    </p>
                    <div class="flex justify-center items-center">
                      <button class="text-black font-bold rounded-full">
                        <span class="sr-only">Button</span>
                        <span class="icon">
                          <ShoppingCartIcon
                            class="flex-shrink-0 mr-1.5 h-6 w-6 text-gray-400"
                          />
                        </span>
                      </button>
                      <button class="text-black font-bold rounded-full">
                        <span class="sr-only">Button</span>
                        <span class="icon">
                          <BookmarkIcon
                            class="flex-shrink-0 mr-1.5 h-6 w-6 text-gray-400"
                          />
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "primevue/carousel";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import { BookmarkIcon, ShoppingCartIcon } from "@heroicons/vue/solid";
import Avatar from "@/components/Avatar/Avatar.component.vue";

export default {
  components: {
    Carousel,
    BookmarkIcon,
    ShoppingCartIcon,
    Avatar,
  },
  setup() {
    let store = useStore();
    let gigs = ref([]);
    const responsiveOptions = ref([
      {
        breakpoint: "1024px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "768px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "768px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ]);
    store.dispatch("BuyerFeed/getThreeRandomGigs").then((res) => {
      console.log(res.data);
      gigs.value = res.data;
    });

    let preurl = `${process.env.VUE_APP_API_URL}`;
    return {
      gigs,
      preurl,
      responsiveOptions,
    };
  },
};
</script>

<style>
.p-carousel-indicators {
  display: none;
}
</style>
