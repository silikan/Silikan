<template>
  <div v-if="loading === true">
    <GigLoadingSkeleton />
  </div>
  <div class="bg-white dark:bg-prblue-500" v-if="loading === false && links && meta">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="flex w-full items-center justify-between mb-5">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
        >
          <h2 class="text-3xl font-extrabold tracking-tight hidden md:block dark:text-white">
            Gigs
          </h2>
        </div>
        <div class="flex items-center flex-1 md:flex-none"></div>
      </div>
      <div class="relative ">
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
              v-for="gig in gigs"
              :key="gig.id"
              class="
                flex flex-col
                rounded-lg
                overflow-hidden
                shadow-inner
                  border
              border-gray-200
              dark:border-transparent
              mb-5
              "
            >
              <div
                class="flex justify-center relative w-full h-72 overflow-hidden"
              >
                <router-link
                  :to="`/gig/${gig.id}`"
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
                    :src="`${preurl}/${gig.images[0].url}`"
                    class="w-full h-full object-center object-cover"
                  />
                </router-link>
              </div>
              <div
                class="flex-1 bg-white dark:bg-prblue-700 px-5 pt-5 flex flex-col justify-between"
              >
                <div class="flex items-center">
                  <div class="flex-shrink-0">
                    <a href="#">
                      <span class="sr-only">{{ gig.user.name }}</span>
                      <Avatar
                        v-if="gig.user.name"
                        :url="gig.user.avatar"
                        :name="gig.user.name"
                      />
                    </a>
                  </div>
                  <div class="ml-3">
                    <p class="text-md font-medium text-gray-600">
                      <a href="gig.author.href" class="hover:underline dark:text-white">
                        {{ gig.user.name }}
                      </a>
                    </p>
                  </div>
                </div>
                <div class="">
                  <p class="text-md font-medium text-gray-500 mt-2 dark:text-white">
                    {{ gig.title }}
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
                  <p class="font-bold text-2xl text-gray-400 dark:text-white">
                    {{ JSON.parse(gig.basic).price }}$
                  </p>
                  <div class="flex justify-center items-center" v-if="authUser">
                    <button
                      v-if="authUser.id != gig.user.id"
                      class="text-black font-bold rounded-full"
                      @click="addToCart({ price:JSON.parse(gig.basic).price }, gig.id)"
                    >
                      <span class="sr-only">Button</span>
                      <span class="icon">
                        <ShoppingCartIcon
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
      <div
        class="
          bg-white
          dark:bg-prblue-500
          px-4
          py-3
          flex flex-col
          items-between
          justify-center
          border-t border-gray-200
          sm:px-6
          mb-10
        "
      >
        <div class="flex-1 flex justify-between sm:hidden">
          <a
            class="
              cursor-pointer
              relative
              inline-flex
              items-center
              px-4
              py-2
              border border-gray-300
              text-sm
              font-medium
              rounded-md
              text-gray-700
              bg-white
              hover:bg-gray-50
            "
            rel="prev"
            type="button"
            @click="prevPage"
            v-if="links.prev"
          >
            Previous
          </a>
          <a
            class="
              cursor-pointer
              ml-3
              relative
              inline-flex
              items-center
              px-4
              py-2
              border border-gray-300
              text-sm
              font-medium
              rounded-md
              text-gray-700
              bg-white
              hover:bg-gray-50
              max-w-md
            "
            rel="next"
            type="button"
            @click="nextPage"
            v-if="links.next"
          >
            Next
          </a>
        </div>
        <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div class="flex justify-end items-center mt-3">
            <p class="text-sm text-prgreen-700">
              Page {{ meta.current_page }} of {{ meta.last_page }}
            </p>
          </div>
          <div>
            <nav
              class="
                hidden
                relative
                z-0
                sm:inline-flex
                rounded-md
                shadow-sm
                -space-x-px
              "
              aria-label="Pagination"
            >
              <a
                class="
                  cursor-pointer
                  relative
                  inline-flex
                  items-center
                  px-2
                  py-2
                  rounded-l-md
                  border border-gray-300
                  bg-white
                  text-sm
                  font-medium
                  text-gray-500
                  hover:bg-gray-50
                  max-w-md
                "
                @click="prevPage"
                v-if="links.prev"
              >
                <span class="sr-only">Previous</span>
                <ChevronLeftIcon class="h-5 w-5" aria-hidden="true" />
              </a>
              <!-- Current: "z-10 bg-prgreen-50 border-prgreen-500 text-prgreen-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
              <a
                class="
                  border-gray-300
                  text-gray-500
                  hover:bg-gray-50
                  cursor-pointer
                  hidden
                  md:inline-flex
                  relative
                  items-center
                  px-4
                  py-2
                  border
                  text-sm
                  font-medium
                  max-w-md
                "
                :class="{
                  'bg-prgreen-50 border-prgreen-500 text-prgreen-600':
                    1 === meta.current_page,
                  'bg-white border-gray-300 text-gray-500 hover:bg-gray-50':
                    1 !== meta.current_page,
                }"
                @click="setPage(1)"
              >
                <span>01</span>
              </a>
              <a v-for="page in filterPages" :key="page" @click="setPage(page)">
                <span
                  class="
                    border-gray-300
                    text-gray-500
                    hover:bg-gray-50
                    cursor-pointer
                    hidden
                    md:inline-flex
                    relative
                    items-center
                    px-4
                    py-2
                    border
                    text-sm
                    font-medium
                  "
                  :class="{
                    'bg-prgreen-50 border-prgreen-500 text-prgreen-600':
                      page === meta.current_page,
                    'bg-white border-gray-300 text-gray-500 hover:bg-gray-50':
                      page !== meta.current_page,
                  }"
                  v-if="Math.abs(page - currentPage) < 3"
                >
                  <span v-if="page < 10">0 </span> {{ page }}</span
                >
              </a>

              <a
                v-if="totalPages > 1"
                class="
                  cursor-pointer
                  border-gray-300
                  text-gray-500
                  hover:bg-gray-50
                  hidden
                  md:inline-flex
                  relative
                  items-center
                  px-4
                  py-2
                  border
                  text-sm
                  font-medium
                "
                @click="setPage(totalPages)"
                :class="{
                  'bg-prgreen-50 border-prgreen-500 text-prgreen-600':
                    totalPages === meta.current_page,
                  'bg-white border-gray-300 text-gray-500 hover:bg-gray-50':
                    totalPages !== meta.current_page,
                }"
              >
                <span>{{ totalPages }}</span>
              </a>
              <a
                class="
                  cursor-pointer
                  relative
                  inline-flex
                  items-center
                  px-2
                  py-2
                  rounded-r-md
                  border border-gray-300
                  bg-white
                  text-sm
                  font-medium
                  text-gray-500
                  hover:bg-gray-50
                "
                @click="nextPage"
                v-if="links.next"
              >
                <span class="sr-only">Next</span>
                <ChevronRightIcon class="h-5 w-5" aria-hidden="true" />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/vue/solid";
import { ShoppingCartIcon } from "@heroicons/vue/solid";
import GigLoadingSkeleton from "@/components/Loading/Skeletons/Gig.component.vue";
import { computed, reactive } from "@vue/runtime-core";
import { useStore } from "vuex";
import Avatar from "@/components/Avatar/Avatar.component.vue";
import { io } from "socket.io-client";
export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    Avatar,

    ShoppingCartIcon,
    GigLoadingSkeleton,
  },

  setup() {
    let notificationsocket = io("http://localhost:4000");
    let action = "Search/paginateGigs";
    let store = useStore();
    let meta, links, gigs;
    let path = "handymen";
    let loading = computed(() => store.getters["Gig/loading"]);

    let page = 1;

    /* let router = useRouter
     */ store.dispatch("Gig/getGigsPaginate", page);
    meta = computed(() => {
      return store.getters["Gig/meta"];
    });
    links = computed(() => {
      return store.getters["Gig/links"];
    });
    gigs = computed(() => {
      return store.getters["Gig/gigs"];
    });
    const prevPage = () => {
      store.dispatch("Gig/paginateGigs", links.value.prev);
    };
    const nextPage = () => {
      console.log(links.value.next);
      store.dispatch("Gig/paginateGigs", links.value.next);
    };

    const setPage = (pageNumber) => {
      let paginationlink = `${process.env.VUE_APP_API_URL}/api/paginate/gig?page=${pageNumber}`;

      store.dispatch("Gig/paginateGigs", paginationlink);
      console.log(meta.value);
    };

    let currentPage = computed(() => meta.value.current_page);
    let totalPages = computed(() => meta.value.last_page);

    let filterPages = computed(() => {
      //keep the first and last page

      let data = reactive([]);
      let start = currentPage.value - 2;
      let end = currentPage.value + 2;
      let totalPages = meta.value.last_page;
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

    const addToTaskList = async (cartItemId, tier, gig_id) => {
      let userId = computed(() => store.getters["auth/id"]);

      store
        .dispatch("Gig/getGigUser", gig_id)
        .then(async (result) => {
          let payload = {
            type: "gig",
            gig_id: gig_id,
            user_id: result.id,
            client_id: userId.value,
            handyman_id: result.id,
            cart_item_id: cartItemId,
            plan: JSON.stringify(tier),
          };
          store.dispatch("Task/addToTaskList", payload);

          let toData = {
            userId: result.id,
          };

          let getUserNotificationRoom = await store.dispatch(
            "Notification/getUserNotificationRoom",
            toData
          );

          notificationsocket.on("connect", function () {
            // Connected, let's sign-up for to receive messages for this room
            notificationsocket.emit(
              "notificationRoom",
              `notification-room-${getUserNotificationRoom.id}`
            );
          });

          let notificationpayload = {
            data: {
              to: result.id,
              from: userId.value,
              data: "added your gig to his cart",
              type: "gig",
              notification_room_id: getUserNotificationRoom.id,
            },
          };
          store.dispatch(
            "Notification/sendChatNotification",
            notificationpayload
          );
          store.dispatch("Notification/Sendnotification", notificationpayload);
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const addToCart = (tier, gig_id) => {
      store
        .dispatch("Gig/getGigUser", gig_id)
        .then((result) => {
          let userId = computed(() => store.getters["auth/id"]);
          console.log(userId.value);

          let payload = {
            type: "gig",
            gig_id: gig_id,
            user_id: userId.value,
            client_id: userId.value,
            handyman_id: result.id,
            plan: JSON.stringify(tier),
          };
          store
            .dispatch("Cart/addToCart", payload)
            .then(() => {
              let cartItemId = computed(
                () => store.getters["Cart/cartItemData"]
              );
              console.log(cartItemId.value.id);
              let cartItemIdValue = cartItemId.value.id;
              addToTaskList(cartItemIdValue, tier, gig_id);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    };
    let authUser = computed(() => store.getters["auth/authUser"]);

    return {
      action,
      path,

      prevPage,
      nextPage,
      setPage,
      meta,
      links,
      gigs,
      filterPages,
      currentPage,
      totalPages,
      preurl,
      loading,
      addToCart,
      addToTaskList,
      authUser,
    };
  },
};
</script>
