<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex w-full items-center justify-between mb-5">
    <div class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none">
      <h2 class="text-3xl font-extrabold tracking-tight hidden md:block">
        Categories
      </h2>
    </div>
    <div class="flex items-center flex-1 md:flex-none"></div>
  </div>
  <div class="my-10">

  <ul
      role="list"
      class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      <li v-for="category in 5" :key="category" class="animate-pulse">
        <div class="col-span-1 flex shadow-sm rounded-md">
          <div
            class="col-span-1 flex shadow-sm rounded-md bg-gray-300 h-16 w-16"
          ></div>

          <div
            class="
              flex-1 flex
              items-center
              justify-between
              border-t border-r border-b border-gray-200
              bg-white
              rounded-r-md
              truncate
            "
          >
            <div class="flex-1 px-4 py-2 text-sm truncate">
       <div class="h-2 w-40 bg-gray-300 rounded col-span-2"></div>
              <div class="h-2 w-28 bg-gray-300 rounded col-span-2 mt-2"></div>
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
                  focus:ring-gray-300
                "
              >
                <span class="sr-only">Open options</span>
                <ChevronRightIcon class="w-5 h-5 text-gray-300" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="my-10">

    <ul
      role="list"
      class="mt-3 grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4"
    >
      <li v-for="category in 5" :key="category" class="animate-pulse">
        <div class="col-span-1 flex shadow-sm rounded-md">
          <div
            class="col-span-1 flex shadow-sm rounded-md bg-gray-300 h-16 w-16"
          ></div>

          <div
            class="
              flex-1 flex
              items-center
              justify-between
              border-t border-r border-b border-gray-200
              bg-white
              rounded-r-md
              truncate
            "
          >
            <div class="flex-1 px-4 py-2 text-sm truncate">
       <div class="h-2 w-40 bg-gray-300 rounded col-span-2"></div>
              <div class="h-2 w-28 bg-gray-300 rounded col-span-2 mt-2"></div>
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
                  focus:ring-gray-300
                "
              >
                <span class="sr-only">Open options</span>
                <ChevronRightIcon class="w-5 h-5 text-gray-300" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { ChevronRightIcon } from "@heroicons/vue/solid";

export default {
  components: {
    ChevronRightIcon,
  },
  setup() {
    return {};
  },
};
</script>




