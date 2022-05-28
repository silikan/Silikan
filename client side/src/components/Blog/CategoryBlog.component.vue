
<template>
  <div class="min-h-full bg-gray-100">
    <div class="py-10">
      <div
        class="
          max-w-3xl
          mx-auto
          sm:px-6
          flex flex-col
          justify-center
          items-center
        "
      >
        <main class="">
          <div class="mt-4 mb-5">
            <div
              class="
                bg-white
                sm:rounded-lg
                p-3
                mb-5
                flex
                justify-center
                shadow-sm
              "
            >
              <h2
                class="
                  text-3xl
                  font-extrabold
                  tracking-tight
                  hidden
                  md:block
                  mb-5
                "
              >
                Posts Category "{{ `${category}` }}"
              </h2>
            </div>

            <ul role="list" class="space-y-4">
              <li
                v-for="(question, i) in requests"
                :key="question.id"
                class="bg-white sm:rounded-lg"
              >
                <div>
                  <router-link
                    class="flex-shrink-0"
                    :to="`/blog/post/${question.id}`"
                  >
                    <img
                      v-if="question.image"
                      class="h-96 w-full rounded-t-lg"
                      :src="`${preurl}/${question.image}`"
                      alt=""
                    />
                  </router-link>

                  <article
                    class="px-4 py-6 shadow sm:p-6"
                    :aria-labelledby="'question-title-' + question.id"
                    v-if="loading === false && meta && links"
                  >
                    <div>
                      <div class="flex space-x-3">
                        <div class="flex-shrink-0">
                          <Avatar
                            v-if="question.user.name"
                            :url="question.user.avatar"
                            :name="question.user.name"
                          />
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="text-sm font-b text-gray-900">
                            <router-link
                              :to="`/user/${question.user.id}`"
                              class="hover:underline"
                              >{{ question.user.name }}</router-link
                            >
                          </p>
                          <p class="text-sm text-gray-500">
                            <a class="hover:underline">
                              <timeago
                                :converter-options="{
                                  includeSeconds: true,
                                  addSuffix: true,
                                  useStrict: true,
                                }"
                                :datetime="question.created_at"
                              />
                            </a>
                          </p>
                        </div>
                      </div>
                      <h2
                        :id="'question-title-' + question.id"
                        class="mt-4 text-base font-bold text-gray-900"
                      >
                        {{ question.title }}
                      </h2>
                    </div>
                    <div v-for="categ in question.category" :key="categ">
                      <router-link
                        :to="`/blog/category/${categ.title}`"
                        class="
                          text-xs text-prgreen-600
                          uppercase
                          font-medium
                          hover:text-gray-900
                          transition
                          duration-500
                          ease-in-out
                        "
                      >
                        {{ categ.title }}
                      </router-link>
                    </div>
                    <div
                      class="mt-2 break-all text-sm text-gray-700 space-y-4"
                      v-html="question.content"
                    />

                    <div class="mt-6 flex justify-between space-x-8">
                      <div class="flex space-x-6">
                        <!--reactions-->
                        <div
                          class="
                            bottom-0
                            inset-x-0
                            pl-3
                            pr-2
                            py-2
                            flex
                            justify-between
                          "
                        >
                          <div class="flex items-center">
                            <Listbox as="div" v-model="selected[i]">
                              <ListboxLabel class="sr-only">
                                Your mood
                              </ListboxLabel>
                              <div class="relative">
                                <ListboxButton
                                  class="
                                    relative
                                    -m-3.5
                                    w-10
                                    h-10
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    text-gray-400
                                    hover:text-gray-500
                                  "
                                  v-if="
                                    question.reactions.filter(function (e) {
                                      return authUser.id === e.user_id;
                                    })[0] != null
                                  "
                                >
                                  <div
                                    v-for="reac in question.reactions.filter(
                                      function (e) {
                                        return authUser.id === e.user_id;
                                      }
                                    )"
                                    :key="reac"
                                  >
                                    <span
                                      class="flex items-center justify-center"
                                    >
                                      <span v-if="reac == null">
                                        <EmojiHappyIcon
                                          class="flex-shrink-0 h-5 w-5"
                                          aria-hidden="true"
                                        />
                                        <span class="sr-only">
                                          Add your mood
                                        </span>
                                      </span>
                                      <span
                                        v-if="
                                          reac != null && selected[i] != null
                                        "
                                      >
                                        <div
                                          :class="[
                                            selected[i].bgColor,
                                            'w-8 h-8 rounded-full flex items-center justify-center',
                                          ]"
                                        >
                                          <component
                                            :is="selected[i].icon"
                                            class="
                                              flex-shrink-0
                                              h-5
                                              w-5
                                              text-white
                                            "
                                            aria-hidden="true"
                                          />
                                        </div>
                                        <span class="sr-only">{{
                                          selected[i].name
                                        }}</span>
                                      </span>
                                      <span
                                        v-if="
                                          reac != null && selected[i] == null
                                        "
                                      >
                                        <div
                                          :class="[
                                            reac.bgColor,
                                            'w-8 h-8 rounded-full flex items-center justify-center',
                                          ]"
                                        >
                                          <component
                                            v-if="reac.value == 'excited'"
                                            :is="FireIcon"
                                            class="
                                              flex-shrink-0
                                              h-5
                                              w-5
                                              text-white
                                            "
                                            aria-hidden="true"
                                          />
                                          <component
                                            v-if="reac.value == 'happy'"
                                            :is="EmojiHappyIcon"
                                            class="
                                              flex-shrink-0
                                              h-5
                                              w-5
                                              text-white
                                            "
                                            aria-hidden="true"
                                          />
                                          <component
                                            v-if="reac.value == 'sad'"
                                            :is="EmojiSadIcon"
                                            class="
                                              flex-shrink-0
                                              h-5
                                              w-5
                                              text-white
                                            "
                                            aria-hidden="true"
                                          />
                                          <component
                                            v-if="reac.value == 'loved'"
                                            :is="HeartIcon"
                                            class="
                                              flex-shrink-0
                                              h-5
                                              w-5
                                              text-white
                                            "
                                          />
                                          <component
                                            v-if="reac.value == 'thumbsup'"
                                            :is="ThumbUpIcon"
                                            class="
                                              flex-shrink-0
                                              h-5
                                              w-5
                                              text-white
                                            "
                                          />
                                          <component
                                            v-if="reac.value == 'thumbsdown'"
                                            :is="ThumbDownIcon"
                                            class="
                                              flex-shrink-0
                                              h-5
                                              w-5
                                              text-white
                                            "
                                          />
                                          <component
                                            v-if="reac.value == 'nothing'"
                                            :is="XIcon"
                                            class="
                                              flex-shrink-0
                                              h-5
                                              w-5
                                              text-white
                                            "
                                          />
                                        </div>
                                        <span class="sr-only">{{
                                          reac.name
                                        }}</span>
                                      </span>
                                    </span>
                                  </div>
                                </ListboxButton>

                                <ListboxButton
                                  class="
                                    relative
                                    -m-3.5
                                    w-10
                                    h-10
                                    rounded-full
                                    flex
                                    items-center
                                    justify-center
                                    text-gray-400
                                    hover:text-gray-500
                                  "
                                  v-if="
                                    question.reactions.filter(function (e) {
                                      return authUser.id === e.user_id;
                                    })[0] == null
                                  "
                                >
                                  <span
                                    class="flex items-center justify-center"
                                  >
                                    <span v-if="selected[i] == null">
                                      <EmojiHappyIcon
                                        class="flex-shrink-0 h-5 w-5"
                                        aria-hidden="true"
                                      />
                                      <span class="sr-only">
                                        Add your mood
                                      </span>
                                    </span>
                                    <span v-if="selected[i] != null">
                                      <div
                                        :class="[
                                          selected[i].bgColor,
                                          'w-8 h-8 rounded-full flex items-center justify-center',
                                        ]"
                                      >
                                        <component
                                          :is="selected[i].icon"
                                          class="
                                            flex-shrink-0
                                            h-5
                                            w-5
                                            text-white
                                          "
                                          aria-hidden="true"
                                        />
                                      </div>
                                      <span class="sr-only">{{
                                        selected[i].name
                                      }}</span>
                                    </span>
                                  </span>
                                </ListboxButton>

                                <transition
                                  leave-active-class="transition ease-in duration-100"
                                  leave-from-class="opacity-100"
                                  leave-to-class="opacity-0"
                                >
                                  <ListboxOptions
                                    class="
                                      absolute
                                      z-10
                                      mt-1
                                      -ml-6
                                      w-60
                                      bg-white
                                      shadow
                                      rounded-lg
                                      py-3
                                      text-base
                                      ring-1 ring-black ring-opacity-5
                                      focus:outline-none
                                      sm:ml-auto sm:w-64 sm:text-sm
                                    "
                                  >
                                    <ListboxOption
                                      @click="
                                        PostReaction(question.id, selected[i])
                                      "
                                      as="template"
                                      v-for="mood in moods"
                                      :key="mood.value"
                                      :value="mood"
                                      v-slot="{ active }"
                                    >
                                      <li
                                        :class="[
                                          active ? 'bg-gray-100' : 'bg-white',
                                          'cursor-pointer select-none relative py-2 px-3',
                                        ]"
                                      >
                                        <div class="flex items-center">
                                          <div
                                            :class="[
                                              mood.bgColor,
                                              'w-8 h-8 rounded-full flex items-center justify-center',
                                            ]"
                                          >
                                            <component
                                              :is="mood.icon"
                                              :class="[
                                                mood.iconColor,
                                                'flex-shrink-0 h-5 w-5',
                                              ]"
                                              aria-hidden="true"
                                            />
                                          </div>
                                          <span
                                            class="
                                              ml-3
                                              block
                                              font-medium
                                              truncate
                                            "
                                          >
                                            {{ mood.name }}
                                          </span>
                                        </div>
                                      </li>
                                    </ListboxOption>
                                  </ListboxOptions>
                                </transition>
                              </div>
                            </Listbox>
                          </div>
                        </div>

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
                              question.comments_count
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
                            <span class="font-medium text-gray-900">
                              {{ question.total_views }}</span
                            >
                            <span class="sr-only">views</span>
                          </button>
                        </span>
                      </div>

                      <div class="flex space-x-2">
                        <div
                          class="
                            flex-shrink-0
                            sm:mt-0 sm:ml-5
                            inline-flex
                            items-center
                            text-sm
                          "
                        >
                          <div
                            class="hidden md:flex overflow-hidden -space-x-3"
                          >
                            <div
                              as="template"
                              v-for="mood in moods"
                              :key="mood.value"
                              :value="mood"
                            >
                              <div class="flex items-center">
                                <div
                                  :class="[
                                    mood.bgColor,
                                    'w-6 h-6 rounded-full flex items-center justify-center',
                                  ]"
                                >
                                  <component
                                    :is="mood.icon"
                                    :class="[
                                      mood.iconColor,
                                      'flex-shrink-0 h-5 w-5',
                                    ]"
                                    aria-hidden="true"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                          <span class="font-medium text-gray-900 ml-1">
                            {{ question.reactions_count }}</span
                          >
                        </div>
                        <div class="flex text-sm">
                          <span class="flex-1 inline-flex items-center text-sm">
                            <button
                              type="button"
                              class="
                                inline-flex
                                space-x-2
                                text-gray-400
                                hover:text-gray-500
                              "
                            >
                              <ShareIcon class="h-5 w-5" aria-hidden="true" />
                              <span class="font-medium text-gray-900"
                                >Share</span
                              >
                            </button>
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>
                </div>
              </li>
            </ul>
          </div>
          <PostFeedSkeleton v-if="loading === true" />
          <div class="mt-6 cursor-pointer">
            <a
              class="
                w-full
                block
                text-center
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
              @click="loadMore"
              v-if="meta.current_page < meta.last_page"
            >
              View More
            </a>
          </div>
        </main>
      </div>
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";

import Trending from "@/components/Post/Trending.component.vue";
import Avatar from "@/components/Avatar/Avatar.component.vue";
import PostFeedSkeleton from "@/components/Loading/Skeletons/postFeed.component.vue";
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

import { computed, reactive, ref, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import CreatePost from "@/components/Post/create.component.vue";
import {
  ChatAltIcon,
  CodeIcon,
  DotsVerticalIcon,
  EyeIcon,
  FlagIcon,
  PlusSmIcon,
  SearchIcon,
  ShareIcon,
  StarIcon,
  ThumbDownIcon,
  EmojiHappyIcon,
  EmojiSadIcon,
  HeartIcon,
  ThumbUpIcon,
} from "@heroicons/vue/solid";
import {
  BellIcon,
  FireIcon,
  HomeIcon,
  MenuIcon,
  TrendingUpIcon,
  UserGroupIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { useRoute } from "vue-router";
const moods = [
  {
    name: "Excited",
    value: "excited",
    icon: FireIcon,
    icon_string: "FireIcon",
    iconColor: "text-white",
    bgColor: "bg-red-500",
  },
  {
    name: "Loved",
    value: "loved",
    icon: HeartIcon,
    icon_string: "HeartIcon",
    iconColor: "text-white",
    bgColor: "bg-pink-400",
  },
  {
    name: "Happy",
    value: "happy",
    icon: EmojiHappyIcon,
    icon_string: "EmojiHappyIcon",
    iconColor: "text-white",
    bgColor: "bg-green-400",
  },
  {
    name: "Sad",
    value: "sad",
    icon: EmojiSadIcon,
    icon_string: "EmojiSadIcon",
    iconColor: "text-white",
    bgColor: "bg-yellow-400",
  },
  {
    name: "Thumbs Up",
    value: "thumbsup",
    icon: ThumbUpIcon,
    icon_string: "ThumbUpIcon",
    iconColor: "text-white",
    bgColor: "bg-blue-500",
  },
  {
    name: "Thumbs Down",
    value: "thumbsdown",
    icon: ThumbDownIcon,
    icon_string: "ThumbDownIcon",
    iconColor: "text-white",
    bgColor: "bg-black",
  },
  {
    name: "I feel nothing",
    value: "nothing",
    icon: XIcon,
    icon_string: "XIcon",
    iconColor: "text-white",
    bgColor: "bg-gray-400",
  },
];

const user = {
  name: "Chelsea Hagon",
  email: "chelseahagon@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Home", href: "#", icon: HomeIcon, current: true },
  { name: "Popular", href: "#", icon: FireIcon, current: false },
  { name: "Communities", href: "#", icon: UserGroupIcon, current: false },
  { name: "Trending", href: "#", icon: TrendingUpIcon, current: false },
];

export default {
  components: {
    BellIcon,
    ChatAltIcon,
    CodeIcon,
    DotsVerticalIcon,
    EyeIcon,
    FlagIcon,
    MenuIcon,
    PlusSmIcon,
    SearchIcon,
    ShareIcon,
    StarIcon,
    ThumbUpIcon,
    ThumbDownIcon,
    XIcon,
    CreatePost,
    Avatar,
    PostFeedSkeleton,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    EmojiHappyIcon,
    Trending,
  },
  setup() {
    let notificationsocket = io("http://localhost:4000");

    let action = "Search/paginateHandymen";
    let store = useStore();
    let meta, links, requests;
    let path = "handymen";
    let route = useRoute();
    let category = route.params.category;
    let page = 1;
    let open = ref(false);
    let type = ref("request");
    let RequestId = ref(null);
    let openDiag = (id) => {
      open.value = true;
      RequestId.value = id;
    };
    /* let router = useRouter
     */
    let payload = {
      title: category,
      page: page,
    };

    store.dispatch("Blog/getPostByCategoryPaginate", payload).then((res) => {
      console.log(res);
    });
    meta = computed(() => {
      return store.getters["Blog/getCategoryPostsMeta"];
    });
    links = computed(() => {
      return store.getters["Blog/getCategoryPostsLinks"];
    });

    let feedbackReactive = reactive([]);
    requests = computed(() => {
      if (meta.value.current_page == 1 && feedbackReactive.length > 0) {
        feedbackReactive = store.getters["Blog/getCategoryPosts"];
        console.log(feedbackReactive);
        return feedbackReactive;
      } else {
        feedbackReactive.push(...store.getters["Blog/getCategoryPosts"]);
        return feedbackReactive;
      }
    });
    console.log(requests);
    console.log(meta);
    const loadMore = () => {
      if (page < meta.value.last_page) {
        page++;
        let paginationlink = `${process.env.VUE_APP_API_URL}/api//blog/category/${category}/post/paginate?page=${page}`;

        store.dispatch("Blog/getCategoryPostsLinks", paginationlink);
      }
    };
    const prevPage = () => {
      store.dispatch("Blog/getCategoryPostsLinks", links.value.prev);
    };
    const nextPage = () => {
      console.log(links.value.next);
      store.dispatch("Blog/getCategoryPostsLinks", links.value.next);
    };

    const setPage = (pageNumber) => {
      let paginationlink = `${process.env.VUE_APP_API_URL}/api//blog/category/${category}/post/paginate?page=${pageNumber}`;

      store.dispatch("Blog/getCategoryPostsLinks", paginationlink);
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
    let loading = computed(
      () => store.getters["Blog/getPaginatedPostsLoading"]
    );
    let totalComments = ref(0);
    let selected = ref([]);

    watchEffect(() => {
      console.log(selected);
    });

    let PostReaction = (id, data) => {
      let payload = {
        reaction: data.value,
        post_id: id,
        name: data.name,
        value: data.value,
        icon: data.icon_string,
        iconColor: data.iconColor,
        bgColor: data.bgColor,
      };
      console.log(id, data);
      store.dispatch("Blog/PostReaction", payload).then(() => {
        store
          .dispatch("Blog/getPostById", id)
          .then(async (result) => {
            console.log(result);
            let toData = {
              userId: result.data.user.id,
            };
            console.log(result);
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
                to: result.data.user.id,
                from: authUser.value.id,
                data: `reacted with ${data.name} On Your Post`,
                type: "Blog",
                notification_room_id: getUserNotificationRoom.id,
              },
            };
            console.log(notificationpayload);
            store.dispatch(
              "Notification/sendChatNotification",
              notificationpayload
            );
            store.dispatch(
              "Notification/Sendnotification",
              notificationpayload
            );
          })

          .catch((error) => {
            console.log(error);
          });
      });
    };

    let getUserPostReaction = (post_id, user_id) => {
      let payload = {
        user_id: user_id.value,
        post_id: post_id,
      };
      store.dispatch("Blog/getUserPostReaction", payload).then((res) => {
        console.log(res);
        selected.push(res.reaction);
      });
    };
    let authUser = computed(() => store.getters["auth/authUser"]);
    return {
      user,
      navigation,

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
      loadMore,
      totalComments,
      moods,
      selected,
      PostReaction,
      getUserPostReaction,
      authUser,
      FireIcon,

      HeartIcon,

      EmojiHappyIcon,

      EmojiSadIcon,

      ThumbUpIcon,

      ThumbDownIcon,

      XIcon,
      category,
    };
  },
};
</script>
