<template>
  <section aria-labelledby="trending-heading w-full ">
    <div class="bg-white rounded-lg">
      <div class="p-6">
        <h2 id="trending-heading" class="text-base font-medium text-gray-900">
          Trending
        </h2>
        <div class="mt-4 mb-5">
          <h1 class="sr-only">Recent posts</h1>
          <ul role="list" class="space-y-4">
            <li
              v-for="question in requests"
              :key="question.id"
              class="bg-white sm:rounded-lg"
            >
              <div>
                <router-link
                  class="flex-shrink-0"
                  :to="`/blog/post/${question.id}`"
                >
                  <article
                    class="px-4 px-1 "
                    :aria-labelledby="'question-title-' + question.id"
                    v-if="meta && links"
                  >
                    <div>

                      <h2
                        :id="'question-title-' + question.id"
                        class="mt-4 text-base font-bold text-gray-900"
                      >
                        {{ question.title }}
                      </h2>
                    </div>
                    <div
                      class="
                        Class
                        Properties
                        truncate
                        overflow:
                        hidden;
                        text-overflow:
                        ellipsis;
                        white-space:
                        nowrap;
                        text-ellipsis
                        mt-2
                        break-all
                        text-sm text-gray-700
                        space-y-4
                      "
                      v-html="question.content"
                    />
                  </article>
                </router-link>
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-6">
          <a
            href="#"
            class="
              block
              text-center
              px-4
              py-2
              border border-gray-300
              -sm
              text-sm
              font-medium
              rounded-md
              text-gray-700
              bg-white
              hover:bg-gray-50
            "
          >
            View all
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>

import { useStore } from "vuex";
import { reactive } from "@vue/reactivity";
import { computed, ref } from "@vue/runtime-core";
export default {
  components: {
  },

  setup() {
    let action = "Search/paginateHandymen";
    let store = useStore();
    let meta, links, requests;
    let path = "handymen";

    let page = 1;
    let open = ref(false);
    let type = ref("request");
    let RequestId = ref(null);
    let openDiag = (id) => {
      open.value = true;
      RequestId.value = id;
    };
    /* let router = useRouter
     */ store.dispatch("Blog/PaginateTrendingPosts", page).then((res) => {
      console.log(res);
    });
    meta = computed(() => {
      return store.getters["Blog/getTrendingPostsMeta"];
    });
    links = computed(() => {
      return store.getters["Blog/getTrendingPostsLinks"];
    });

    let feedbackReactive = reactive([]);
    requests = computed(() => {
      if (meta.value.current_page == 1 && feedbackReactive.length > 0) {
        feedbackReactive = store.getters["Blog/getTrendingPosts"];
        console.log(feedbackReactive);
        return feedbackReactive;
      } else {
        feedbackReactive.push(...store.getters["Blog/getTrendingPosts"]);
        return feedbackReactive;
      }
    });
    console.log(requests);
    console.log(meta);
    const loadMore = () => {
      if (page < meta.value.last_page) {
        page++;
        let paginationlink = `${process.env.VUE_APP_API_URL}'/blog/trending/posts/paginate?page=${page}`;

        store.dispatch("Blog/getTrendingPostsLinks", paginationlink);
      }
    };
    const prevPage = () => {
      store.dispatch("Blog/getTrendingPostsLinks", links.value.prev);
    };
    const nextPage = () => {
      console.log(links.value.next);
      store.dispatch("Blog/getTrendingPostsLinks", links.value.next);
    };

    const setPage = (pageNumber) => {
      let paginationlink = `${process.env.VUE_APP_API_URL}'/blog/trending/posts/paginate?page=${pageNumber}`;

      store.dispatch("Blog/getTrendingPostsLinks", paginationlink);
      console.log(meta.value);
    };

    let currentPage = computed(() => meta.value.current_page);
    let totalPages = computed(() => meta.value.last_page);

    let filterPages = computed(() => {
      //keep the first and last page

      let data = reactive([]);
      let start = currentPage.value - 2;
      let end = currentPage.value + 2;
      let totalPages = computed(() => meta.value.last_page);

      console.log(totalPages.value);
      if (start < 1) {
        start = 1;
        end = 5;
      }

      if (end > totalPages.value) {
        end = totalPages.value;
        start = totalPages.value - 4;
      }
      for (let i = start; i <= end; i++) {
        if (i !== totalPages.value && i !== 1 && i < totalPages) {
          data.push(i);
        }
      }

      return data;
    });
    let preurl = `${process.env.VUE_APP_API_URL}`;

    return {
      action,
      path,

      prevPage,
      nextPage,
      setPage,
      meta,
      links,
      requests,
      filterPages,
      currentPage,
      totalPages,
      preurl,
      open,
      type,
      RequestId,
      openDiag,
      loadMore,
    };
  },
};
</script>

<style>
</style>
