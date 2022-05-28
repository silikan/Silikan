<template>

    <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
      <Carousel
        :value="requests"
        :numVisible="3"
        :numScroll="1"
        :responsiveOptions="responsiveOptions"
        :autoplayInterval="1500"
        :circular="true"
      >
        <template #item="request">

           <div class="flex flex-col overflow-hidden rounded-lg">
      <p class="text-sm font-medium text-prgreen-600 self-end">
                <router-link :to="`/request/${request.data.id}`"  class="hover:underline">
                  Visit
                </router-link>
              </p>
  <div class="flex flex-1 flex-col justify-between bg-white p-6">
    <div class="flex-1">

      <a href="#" class="mt-2 block">
        <p class="text-xl font-semibold text-gray-900">{{request.data.title}}</p>
        <p class="mt-3  text-base text-gray-500">{{request.data.description}}</p>
      </a>
    </div>
    <div class="mt-6 flex items-center">
      <div class="flex-shrink-0">
        <a href="#">
          <span class="sr-only">Brenna Goyette</span>
<Avatar
                          v-if="request.data.user.name"
                          :url="request.data.user.avatar"
                          :name="request.data.user.name"
                        />        </a>
      </div>
      <div class="ml-3">
        <p class="text-sm font-medium text-gray-900">
          <a href="#" class="hover:underline"> {{request.data.user.name}} </a>
        </p>
        <div class="flex space-x-1 text-sm text-gray-500">
          <span> {{request.data.user.email}} </span>
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
import Avatar from "@/components/Avatar/Avatar.component.vue";

import Carousel from "primevue/carousel";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

export default {
  components: {
    Carousel,
    Avatar
  },
  setup() {
    let store = useStore();
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
    let requests = ref([]);
    store.dispatch("SellerFeed/getThreeRandomRequests").then((res) => {
      console.log(res.data);
      requests.value = res.data;
    });

    let preurl = `${process.env.VUE_APP_API_URL}`;
    return {
      requests,
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
