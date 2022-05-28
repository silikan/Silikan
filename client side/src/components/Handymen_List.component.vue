<template>
  <div class="bg-white dark:bg-prblue-500 ">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="flex w-full items-center justify-between mb-5">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
        >
          <h2 class="dark:text-white text-3xl font-extrabold tracking-tight hidden md:block">
            Handymen
          </h2>
        </div>
        <div class="flex items-center flex-1 md:flex-none"></div>
      </div>

      <HandymenLoadingSkeleton v-if="loading === true" />
      <div class="space-y-12 mb-10" v-if="loading === false">
        <ul
          role="list"
          class="
            space-y-12
            sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0
            lg:grid-cols-3 lg:gap-x-8
          "
        >
          <li v-for="person in people" :key="person.name">
            <div class="space-y-4">
              <div class="aspect-w-3 aspect-h-2">
                <router-link :to="`/user/${person.id}`">
                  <img
                    class="
                      md:h-60 md:w-96
                      object-cover
                      shadow-lg
                      rounded-lg
                      h-69
                    "
                    :src="person.avatar_svg"
                    v-if="person.avatarWithoutLocalhost === null"
                    alt=""
                  />
                  <img
                    class="
                      md:h-60 md:w-96
                      object-cover
                      shadow-lg
                      rounded-lg
                      h-69
                    "
                    :src="person.avatar"
                    v-if="person.avatarWithoutLocalhost !== null"
                    alt=""
                  />
                </router-link>
              </div>
              <div class="flex justify-between">
                <div class="space-y-2">
                  <div class="text-xl leading-6 font-medium space-y-1 dark:text-white">
                    <h3>{{ person.name }}</h3>
                    <p class="text-sm font-bold text-prgreen-600">
                      @{{ person.username }}
                    </p>
                  </div>
                  <ul role="list" class="flex space-x-5 break-all">
                    <li>
                      <a
                        v-if="person.twitter"
                        target="_blank"
                        :href="`https://www.twitter.com/${person.twitter}`"
                        class="text-gray-400 hover:text-gray-500"
                      >
                        <span class="sr-only">Twitter</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        v-if="person.linkedin"
                        target="_blank"
                        :href="`https://www.linkedin.com/in/${person.linkedin}`"
                        class="text-gray-400 hover:text-gray-500"
                      >
                        <span class="sr-only">LinkedIn</span>
                        <svg
                          class="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                            clip-rule="evenodd"
                          />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a
                        v-if="person.facebook"
                        target="_blank"
                        :href="`https://www.facebook.com/${person.facebook}`"
                        class="text-gray-400 hover:text-gray-500"
                      >
                        <span class="sr-only">LinkedIn</span>

                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                      class="w-5 h-5"
                          aria-hidden="true"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            d="M17,3H7C4.791,3,3,4.791,3,7v10c0,2.209,1.791,4,4,4h5.621v-6.961h-2.343v-2.725h2.343V9.309 c0-2.324,1.421-3.591,3.495-3.591c0.699-0.002,1.397,0.034,2.092,0.105v2.43h-1.428c-1.13,0-1.35,0.534-1.35,1.322v1.735h2.7 l-0.351,2.725h-2.365V21H17c2.209,0,4-1.791,4-4V7C21,4.791,19.209,3,17,3z"
                          ></path>
                        </svg>
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="self-end">
                  <router-link :to="`/user/${person.id}`">
                    <button
                      class="
                        inline-flex
                        items-center
                        px-12
                        py-1
                        border border-transparent
                        text-sm
                        font-medium
                        rounded-full
                        shadow-sm
                        text-white
                        bg-prgreen-600
                        hover:bg-prgreen-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-prgreen-500
                      "
                    >
                      Hire
                    </button>
                  </router-link>
                </div>
              </div>
            </div>
          </li>
        </ul>
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
            dark:border-prblue-50
          sm:px-6
          mb-10
          dark:bg-prblue-500
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
import HandymenLoadingSkeleton from "@/components/Loading/Skeletons/UserCard.component.vue";

import store from "@/store/index";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-initials-sprites";
import { useRouter } from "vue-router";
import { computed, reactive } from "@vue/runtime-core";

export default {
  components: {
    ChevronLeftIcon,
    ChevronRightIcon,
    HandymenLoadingSkeleton,
  },
  props: {
    action: {
      type: String,
      required: true,
    },
    path: {
      type: String,
      default: null,
    },
    meta: {
      type: Object,
      required: true,
    },
    links: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    console.log(props);
    const router = useRouter();

    let action = computed(() => props.action);
    let path = computed(() => props.path);
    let meta = computed(() => props.meta);
    let links = computed(() => props.links);

    console.log(links.value);

    const prevPage = () => {
      store.dispatch(action.value, links.value.prev).then(() => {
        if (path) {
          router.push({
            path: path.value,
            query: { page: meta.value.current_page - 1 },
          });
        }
      });
    };
    const nextPage = () => {
      console.log(links.value.next);
      store.dispatch(action.value, links.value.next).then(() => {
        if (path) {
          router.push({
            path: path.value,
            query: { page: meta.value.current_page + 1 },
          });
        }
      });
    };

    let avatar_svg, avatar, avatarWithoutLocalhost, OathAvatar;

    let users = computed(() => store.getters["handyman/Handymen"]);

    console.log(users.value);

    let people = computed(() => {
      let data = reactive([]);

      users.value.forEach((user) => {
        avatar_svg = createAvatar(style, {
          seed: user.name,
          dataUri: true,
          // ... and other options
        });
        avatar = `${process.env.VUE_APP_API_URL}/${user.avatar}`;
        OathAvatar = user.avatar;

        avatarWithoutLocalhost = user.avatar;

        if (user.avatar !== null) {
          if (
            user.avatar.includes("googleusercontent.com") ||
            user.avatar.includes("graph.facebook.com") ||
            user.avatar.includes("licdn.com")
          ) {
            avatar = OathAvatar;
          }
        }

        data.push({
          id: user.id,
          name: user.name,
          avatar_svg: avatar_svg,
          avatar: avatar,
          avatarWithoutLocalhost: avatarWithoutLocalhost,
          email: user.email,
          username: user.username,
          linkedin: user.linkedin_social_link,
          facebook: user.facebook_social_link,
          twitter: user.twitter_social_link,
        });
      });
      return data;
    });
    let currentPage = computed(() => meta.value.current_page);
    let totalPages = computed(() => meta.value.last_page);
    const setPage = (pageNumber) => {
      let paginationlink = `${process.env.VUE_APP_API_URL}/api/guest-users/handymen/?page=${pageNumber}`;

      store.dispatch(action.value, paginationlink).then(() => {
        if (path) {
          router.push({
            path: path.value,
            query: pageNumber,
          });
        }
      });
    };
    totalPages.value;

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
    console.log(people.value);
    let loading = computed(() => store.getters["handyman/loading"]);
    console.log(loading.value);

    return {
      people,

      prevPage,
      nextPage,
      avatar_svg,
      avatar,
      avatarWithoutLocalhost,
      OathAvatar,
      setPage,
      currentPage,
      totalPages,
      filterPages,
      loading,
    };
  },
};
</script>
