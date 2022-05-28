<template>
  <div class="bg-white animate-pulse">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="flex w-full items-center justify-between mb-5">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
        ></div>
        <div class="flex items-center flex-1 md:flex-none"></div>
      </div>
      <div class="relative bg-white">
        <div class="relative mx-auto">
          <div
            class="
              lg:mx-10
              grid
              gap-5
              grid-cols-1
              sm:grid-cols-2
              xl:grid-cols-3
            "
          >
            <div
              v-for="gig in 5"
              :key="gig"
              class="
                flex flex-col
                rounded-lg
                border-x border-b border-gray-200
                overflow-hidden
                shadow-inner
              "
            >
              <div class="h-72 bg-gray-300"></div>
              <div
                class="flex-1 bg-white px-5 pt-5 flex flex-col justify-between"
              >
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <span class="sr-only">
                        <div class="h-2 w-10 bg-gray-300 rounded"></div>
                      </span>
                      <div class="rounded-full bg-gray-300 h-10 w-10"></div>
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-md font-medium text-gray-600">
                      <a href="gig.author.href" class="hover:underline">
                        <div class="h-2 w-10 bg-gray-300 rounded"></div>
                      </a>
                    </p>
                  </div>
                </div>
                <div class="">
                  <div class="h-2 bg-gray-300 rounded"></div>
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
                  <div class="h-2 w-10 bg-gray-300 rounded"></div>

                  <div class="flex justify-center items-center">
                    <button class="text-gray-300 font-bold rounded-full">
                      <span class="sr-only">Button</span>
                      <span class="icon">
                        <ShoppingCartIcon
                          class="flex-shrink-0 mr-1.5 h-6 w-6 text-gray-300"
                        />
                      </span>
                    </button>
                    <button class="text-gray-300 font-bold rounded-full">
                      <span class="sr-only">Button</span>
                      <span class="icon">
                        <BookmarkIcon
                          class="flex-shrink-0 mr-1.5 h-6 w-6 text-gray-300"
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
      <div
        class="
          bg-white
          px-4
          py-3
          flex flex-col
          items-between
          justify-center
          border-t border-gray-200
          sm:px-6
          mb-10
        "
      ></div>
    </div>
  </div>
</template>

<script>
import { BookmarkIcon, ShoppingCartIcon } from "@heroicons/vue/solid";

export default {
  components: {
    BookmarkIcon,
    ShoppingCartIcon,
  },

  setup() {
    return {};
  },
};
</script>
