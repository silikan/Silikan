<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div v-if="loading === true">
    <Categories />
  </div>
  <div v-if="loading === false">
    <div class="flex w-full items-center justify-between mb-5">
      <div
        class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
      >
        <h2
          class="
            text-3xl
            font-extrabold
            tracking-tight
            hidden
            md:block
            dark:text-white
          "
        >
          Categories
        </h2>
      </div>
      <div class="flex items-center flex-1 md:flex-none"></div>
    </div>
    <div class="my-10">
      <h2
        class="
          text-gray-500 text-xs
          font-medium
          uppercase
          tracking-wide
          dark:text-white
        "
      >
        Gigs
      </h2>
      <ul
        role="list"
        class="
          mt-3
          grid grid-cols-1
          gap-5
          sm:gap-6 sm:grid-cols-2
          lg:grid-cols-4
        "
      >
        <li v-for="category in categories" :key="category.name">
          <router-link
            :to="`/category/${category.name}/gigs`"
            class="col-span-1 flex shadow-sm rounded-md"
          >
            <img
              class="
                flex-shrink-0 flex
                items-center
                justify-center
                w-16
                text-white text-sm
                font-medium
                rounded-l-md

              "
              :src="category.avatar_svg"
              alt=""
            />
            <div
              class="
                flex-1 flex
                items-center
                justify-between
                border-t border-r border-b border-gray-200
                bg-white
                rounded-r-md
                truncate

                dark:bg-prblue-500
              "
            >
              <div class="flex-1 px-4 py-2 text-sm truncate ">
                <a
                  :href="category.href"
                  class="text-gray-900 font-medium hover:text-gray-600 dark:text-white"
                  >{{ category.name }}</a
                >
                <p class="text-gray-500 dark:text-white">{{ category.name }}</p>
              </div>
              <div class="flex-shrink-0 pr-2">
                <button
                  type="button"
                  class="
                    w-8
                    h-8
                    bg-white
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    rounded-full
                    bg-transparent
                    hover:text-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                dark:bg-prblue-500
                  "
                >
                  <span class="sr-only">Open options</span>
                  <ChevronRightIcon class="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="my-10">
      <h2
        class="
          text-gray-500 text-xs
          font-medium
          uppercase
          tracking-wide
          dark:text-white
        "
      >
        Requests
      </h2>
      <ul
        role="list"
        class="
          mt-3
          grid grid-cols-1
          gap-5
          sm:gap-6 sm:grid-cols-2
          lg:grid-cols-4

        "
      >
        <li v-for="category in categories" :key="category.name">
          <router-link
            :to="`/category/${category.name}/requests`"
            class="col-span-1 flex shadow-sm rounded-md "
          >
            <img
              class="
                flex-shrink-0 flex
                items-center
                justify-center
                w-16
                text-white text-sm
                font-medium
                rounded-l-md
              "
              :src="category.avatar_svg"
              alt=""
            />
            <div
              class="
                flex-1 flex
                items-center
                justify-between
                border-t border-r border-b border-gray-200
                bg-white
                rounded-r-md
                truncate
                dark:bg-prblue-500
              "
            >
              <div class="flex-1 px-4 py-2 text-sm truncate">
                <a
                  :href="category.href"
                  class="text-gray-900 font-medium dark:text-white hover:text-gray-600"
                  >{{ category.name }}</a
                >
                <p class="text-gray-500 dark:text-white">{{ category.name }}</p>
              </div>
              <div class="flex-shrink-0 pr-2">
                <button
                  type="button"
                  class="
                    w-8
                    h-8
                    bg-white
                    dark:text-white dark:bg-prblue-500
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    rounded-full
                    bg-transparent
                    hover:text-gray-500
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                  "
                >
                  <span class="sr-only">Open options</span>
                  <ChevronRightIcon class="w-5 h-5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon } from "@heroicons/vue/solid";

const projects = [
  {
    name: "Graph API",
    initials: "GA",
    href: "#",
    members: 16,
    bgColor: "bg-pink-600",
  },
  {
    name: "Component Design",
    initials: "CD",
    href: "#",
    members: 12,
    bgColor: "bg-purple-600",
  },
  {
    name: "Templates",
    initials: "T",
    href: "#",
    members: 16,
    bgColor: "bg-yellow-500",
  },
  {
    name: "React Components",
    initials: "RC",
    href: "#",
    members: 8,
    bgColor: "bg-green-500",
  },
];

import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-initials-sprites";
import { computed } from "@vue/runtime-core";
import Categories from "@/components/Loading/Skeletons/Categories.component.vue";

export default {
  components: {
    ChevronRightIcon,
    Categories,
  },
  setup() {
    let categories = ref([]);
    let avatar_svg = ref();
    let store = useStore();
    store.dispatch("Category/getCategories").then((result) => {
      categories.value = result.map((category) => {
        avatar_svg.value = createAvatar(style, {
          seed: category.title,
          dataUri: true,
          // ... and other options
        });
        return {
          name: category.title,
          path: `/categories/${category.id}`,
          avatar_svg: avatar_svg.value,
        };
      });

      console.log(categories.value);
    });

    let loading = computed(() => store.getters["Category/loading"]);
    console.log(loading.value);
    return {
      categories,
      projects,
      loading,
    };
  },
};
</script>




