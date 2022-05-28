<template>

  <nav class=" " aria-label="Directory">
    <div v-for="section in Object.keys(data)" :key="section" class="relative">
      <div
        class="
          z-50
          sticky
          top-0
          border-t border-b border-gray-200
          bg-gray-50
          px-6
          py-1
          text-sm
          font-medium
          text-gray-500
          flex
          justify-between
          items-center
        "
      >
        <h3>{{ section }}</h3>

            <div class="text-sm" v-if="section != 'categories'">
              <router-link class="font-medium text-prgreen-600 hover:text-prgreen-500" :to="`/search/${section}/${search}`">View all</router-link>
            </div>
      </div>
      <ul role="list" class="relative z-0 divide-y divide-gray-200">
        <li v-for="item in data[section]" :key="item.id" class="bg-white">
          <div
            v-if="section === 'gigs'"
            class="
              relative
              px-6
              py-5
              flex
              items-center
              space-x-3
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-prgreen-500
            "
          >
            <router-link
              :to="`/gig/${item.id}`"
              class="flex items-center space-x-3"
            >
              <div class="flex-shrink-0">
                <img
                  class="h-10 w-10 rounded-md"
                  :src="`${preurl}/${item.image}`"
                  alt=""
                />
              </div>
              <div class="flex-1 min-w-0">
                <a href="#" class="focus:outline-none">
                  <!-- Extend touch target to entire panel -->
                  <span class="absolute inset-0" aria-hidden="true" />
                  <p class="text-sm font-medium text-gray-900">
                    {{ item.title }}
                  </p>
                  <p class="text-sm text-gray-500 truncate">
                    Price : {{ item.basic.price }} DZD
                  </p>
                </a>
              </div>
            </router-link>

          </div>
          <div
            v-if="section === 'categories'"
            class="
              relative
              px-6
              py-5
              flex
              items-center
              space-x-3
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-prgreen-500
            "
          >

            <div class="flex-shrink-0">
              <!--  <img
                class="h-10 w-10 rounded-full"
                :src="`${preurl}/${item.image}`"
                alt=""
              /> -->
            </div>
            <div class="flex-1 min-w-0">
              <a href="#" class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text-gray-900">
                  {{ item.title }}
                </p>
              </a>
            </div>
          </div>
          <div
            v-if="section === 'requests'"
            class="
              relative
              px-6
              py-5
              flex
              items-center
              space-x-3
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-prgreen-500
            "
          >
           <router-link
              :to="`/request/${item.id}`"
              class="flex items-center space-x-3"
            >
            <div class="flex-1 min-w-0">
              <a href="#" class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text-gray-900">
                  {{ item.title }}
                </p>
                <p class="text-sm text-gray-500 truncate">
                  price : {{ item.price }} DZD
                </p>
              </a>
            </div>
          </router-link>
          </div>
          <div
            v-if="section === 'handymen'"
            class="
              relative
              px-6
              py-5
              flex
              items-center
              space-x-3
              hover:bg-gray-50
              focus-within:ring-2
              focus-within:ring-inset
              focus-within:ring-prgreen-500
            "
          >
            <router-link
              :to="`/user/${item.id}`"
              class="flex items-center space-x-3"
            >
            <div class="flex-shrink-0">
              <Avatar v-if="item.name" :url="item.avatar" :name="item.name" />
            </div>
            <div class="flex-1 min-w-0">
              <a href="#" class="focus:outline-none">
                <!-- Extend touch target to entire panel -->
                <span class="absolute inset-0" aria-hidden="true" />
                <p class="text-sm font-medium text-gray-900">
                  {{ item.name }}
                </p>
                <p class="text-sm text-gray-500 truncate">
                  {{ item.email }}
                </p>
              </a>
            </div>
          </router-link>
          </div>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
import { useStore } from "vuex";
import Avatar from "@/components/Avatar/Avatar.component.vue";
import { computed, watchEffect } from '@vue/runtime-core';
export default {
  components: {
    Avatar,
  },
  props:["searchData"],
  setup(props) {
    let store = useStore();
    let search = computed(() => props.searchData);
    let handymen = ref([]);
    let gigs = ref([]);
    let requests = ref([]);
    let categories = ref([]);
    const searchFunction = () => {
      store.dispatch("Search/search", search.value).then((result) => {
        console.log(result);
        requests.value = result.requests.map((item) => {
          return {
            id: item.id,
            title: item.title,
            price: item.price,
          };
        });
        handymen.value = result.handymen.map((item) => {
          return {
            id: item.id,
            name: item.name,
            avatar: item.avatar,
          };
        });
        categories.value = result.categories.map((item) => {
          return {
            id: item.id,
            title: item.title,
          };
        });
        gigs.value = result.gigs.map((item) => {
          return {
            id: item.data.id,
            title: item.data.title,
            image: item.images[0].url,
            basic: JSON.parse(item.data.basic),
          };
        });
      });
    };
    let preurl = `${process.env.VUE_APP_API_URL}`;
    watchEffect(() => {
      searchFunction();
      console.log(search.value);
    });
    let data = reactive({
      gigs: gigs,
      requests: requests,
      categories: categories,
      handymen: handymen,
    });
    return {
      search,
      searchFunction,
      data,
      handymen,
      gigs,
      requests,
      categories,
      preurl,
    };
  },
};
</script>
