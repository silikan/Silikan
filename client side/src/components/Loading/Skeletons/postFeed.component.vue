<template>
  <main class="lg:col-span-9 xl:col-span-6">
    <div class="mt-4 mb-5">
      <h1 class="sr-only">Recent questions</h1>
      <ul role="list" class="space-y-4">
        <li
          v-for="question in 5"
          :key="question"
          class="bg-white sm:rounded-lg"
        >
          <div class="">
            <div class="flex-shrink-0">
              <!--   <img
                    v-if="question.image"
                      class=""
                      :src="`${preurl}/${question.image}`"
                      alt=""
                    /> -->
              <div
                class="
                  h-96
                  w-full
                  rounded-t-lg rounded-lg
                  bg-gray-300
                  animate-pulse
                "
              ></div>
            </div>

            <article
              class="px-4 py-6 shadow sm:p-6"
              :aria-labelledby="'question-title-' + question"
            >
              <div>
                <div class="flex space-x-3">
                  <div class="flex-shrink-0">
                    <div class="flex-shrink-0">
                      <a href="#">
                        <span class="sr-only">
                          <div class="h-2 w-10 bg-gray-300 rounded"></div>
                        </span>
                        <div
                          class="
                            animate-pulse
                            rounded-full
                            bg-gray-300
                            h-10
                            w-10
                          "
                        ></div>
                      </a>
                    </div>
                  </div>
                  <div class="min-w-0 flex-1 mt-1">
                    <div class="text-sm font-b text-gray-900">
                      <div
                        class="
                          animate-pulse
                          h-2
                          w-44
                          bg-gray-300
                          rounded
                          col-span-2
                        "
                      ></div>
                    </div>
                    <div class="text-sm text-gray-500 mt-2">
                      <div
                        class="
                          animate-pulse
                          h-2
                          w-36
                          bg-gray-300
                          rounded
                          col-span-2
                        "
                      ></div>
                    </div>
                  </div>
                </div>
                <div
                  class="
                    animate-pulse
                    mt-4
                    h-2
                    w-96
                    bg-gray-300
                    rounded
                    col-span-2
                  "
                ></div>
              </div>
              <div
                class="animate-pulse mt-2 h-2 bg-gray-300 rounded col-span-2"
              ></div>
              <div
                class="animate-pulse mt-2 h-2 bg-gray-300 rounded col-span-2"
              ></div>
              <div
                class="animate-pulse mt-2 h-2 bg-gray-300 rounded col-span-2"
              ></div>
              <div
                class="animate-pulse mt-2 h-2 bg-gray-300 rounded col-span-2"
              ></div>
              <div
                class="animate-pulse mt-2 h-2 bg-gray-300 rounded col-span-2"
              ></div>
              <div
                class="animate-pulse mt-2 h-2 bg-gray-300 rounded col-span-2"
              ></div>

              <div class="mt-6 flex justify-between space-x-8">
                <div class="flex space-x-6">
                  <span class="inline-flex items-center text-sm">
                    <button
                      type="button"
                      class="
                        inline-flex
                        space-x-2
                        text-gray-400
                        hover:text-gray-500
                      "
                    >
                      <ThumbUpIcon class="h-5 w-5" aria-hidden="true" />
                      <span class="font-medium text-gray-900">{{
                        question.likes
                      }}</span>
                      <span class="sr-only">likes</span>
                    </button>
                  </span>
                  <span class="inline-flex items-center text-sm">
                    <button
                      type="button"
                      class="
                        inline-flex
                        space-x-2
                        text-gray-400
                        hover:text-gray-500
                      "
                    >
                      <ThumbDownIcon class="h-5 w-5" aria-hidden="true" />
                      <span class="font-medium text-gray-900">{{
                        question.likes
                      }}</span>
                      <span class="sr-only">likes</span>
                    </button>
                  </span>
                  <span class="inline-flex items-center text-sm">
                    <button
                      type="button"
                      class="
                        inline-flex
                        space-x-2
                        text-gray-400
                        hover:text-gray-500
                      "
                    >
                      <ChatAltIcon class="h-5 w-5" aria-hidden="true" />
                      <span class="font-medium text-gray-900">{{
                        question.replies
                      }}</span>
                      <span class="sr-only">replies</span>
                    </button>
                  </span>
                  <span class="inline-flex items-center text-sm">
                    <button
                      type="button"
                      class="
                        inline-flex
                        space-x-2
                        text-gray-400
                        hover:text-gray-500
                      "
                    >
                      <EyeIcon class="h-5 w-5" aria-hidden="true" />
                      <span class="font-medium text-gray-900">{{
                        question.views
                      }}</span>
                      <span class="sr-only">views</span>
                    </button>
                  </span>
                </div>
              </div>
            </article>
          </div>
        </li>
      </ul>
    </div>
    <div class="mt-6 cursor-pointer"></div>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>
