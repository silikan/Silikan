<template>
 <div class="mt-10 flex w-full items-center justify-between mb-5">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
        >
          <h2 class="text-3xl font-extrabold tracking-tight hidden md:block">
            FeedBack
          </h2>
        </div>
        <div class="flex items-center flex-1 md:flex-none"></div>
      </div>

  <div class="bg-white" v-if="links && meta">
    <div class="">
      <div>

        <div class="flow-root mt-6">
          <ul role="list" class="divide-y divide-gray-200">
            <li
              v-for="request in requests"
              :key="request.id"
              class="
                relative
                bg-white
                py-5
                px-4
                hover:bg-gray-50
                focus-within:ring-2
                focus-within:ring-inset
                focus-within:ring-prgreen-600
              "
            >
              <div class="flex justify-between space-x-3">
                <div class="min-w-0 flex-1">
                  <a href="#" class="block focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true" />
            <h3 class="text-sm font-semibold text-gray-800">
                      {{ request.name }}
                    </h3>
                    <p class="text-sm text-gray-500 truncate">
                      {{ request.email }} - {{ request.phone }}
                    </p>
                  </a>
                </div>
                <time

                  class="flex-shrink-0 whitespace-nowrap text-sm text-gray-500"
                  >                    <timeago :datetime="request.created_at"/>
</time
                >
              </div>
              <div class="mt-1">
                <p class="break-all line-clamp-2 text-sm text-gray-600">
                  {{ request.message }}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div class="mt-6">
          <a
            href="#"
            @click="loadMore"
            class="
              w-full
              flex
              justify-center
              items-center
              px-4
              py-2
              border border-gray-300
              shadow-sm
              text-sm
              font-medium
              rounded-md
              text-gray-700
              bg-white
              hover:bg-gray-50
            "
                              v-if=" meta.current_page < meta.last_page"

          >
            Load More
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, reactive, ref } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  components: {},

  setup() {
    const announcements = [
      {
        id: 1,
        title: "Office closed on July 2nd",
        preview:
          "Cum qui rem deleniti. Suscipit in dolor veritatis sequi aut. Vero ut earum quis deleniti. Ut a sunt eum cum ut repudiandae possimus. Nihil ex tempora neque cum consectetur dolores.",
      },
      {
        id: 2,
        title: "New password policy",
        preview:
          "Alias inventore ut autem optio voluptas et repellendus. Facere totam quaerat quam quo laudantium cumque eaque excepturi vel. Accusamus maxime ipsam reprehenderit rerum id repellendus rerum. Culpa cum vel natus. Est sit autem mollitia.",
      },
      {
        id: 3,
        title: "Office closed on July 2nd",
        preview:
          "Tenetur libero voluptatem rerum occaecati qui est molestiae exercitationem. Voluptate quisquam iure assumenda consequatur ex et recusandae. Alias consectetur voluptatibus. Accusamus a ab dicta et. Consequatur quis dignissimos voluptatem nisi.",
      },
    ];
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
     */ store.dispatch("Admin/getAllFeedBackPaginate", page).then((res) => {
      console.log(res);
    });
    meta = computed(() => {
      return store.getters["Admin/getfeedbackMeta"];
    });
    links = computed(() => {
      return store.getters["Admin/getfeedbackLinks"];
    });
    let feedbackReactive = reactive([]);
    requests = computed(() => {
      if (meta.value.current_page == 1 && feedbackReactive.length > 0) {
        feedbackReactive = store.getters["Admin/getFeedBack"];
        return feedbackReactive;
      } else {
        feedbackReactive.push(...store.getters["Admin/getFeedBack"]);
        return feedbackReactive;
      }
    });
    console.log(requests);
    console.log(meta);
    const loadMore = () => {
      if (page < meta.value.last_page) {
        page++;
        let paginationlink = `${process.env.VUE_APP_API_URL}/api/admin/get-all-feedback-paginate?page=${page}`;

        store.dispatch("Admin/getFeedBackLink", paginationlink);
      }
    };
    const prevPage = () => {
      store.dispatch("Admin/getFeedBackLink", links.value.prev);
    };
    const nextPage = () => {
      console.log(links.value.next);
      store.dispatch("Admin/getFeedBackLink", links.value.next);
    };

    const setPage = (pageNumber) => {
      let paginationlink = `${process.env.VUE_APP_API_URL}/api/admin/get-all-feedback-paginate?page=${pageNumber}`;

      store.dispatch("Admin/getFeedBackLink", paginationlink);
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
    let loading = computed(() => store.getters["Admin/getTransactionsLoading"]);

    console.log(loading.value);
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
      loading,
      announcements,
      loadMore,
    };
  },
};
</script>
