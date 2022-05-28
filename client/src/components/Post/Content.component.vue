<template>
  <!-- Component Code -->

  <div class="min-h-full" v-if="post">
    <main class="py-10">
      <div
        class="
          mx-5
          mt-8
          max-w-3xl
          sm:mx-auto
          grid grid-cols-1
          gap-6
          sm:px-6
          lg:max-w-3xl lg:grid-flow-col-dense lg:grid-cols-2
        "
      >
        <div class="space-y-6 lg:col-start-1 lg:col-span-2">
          <section>
            <div class="bg-white shadow sm:rounded-lg">
              <div class="max-w-screen-xl mx-auto relative">
                <div class="flex-shrink-0" v-if="post.image">
                  <img
                    v-if="post.image"
                    class="h-96 w-full rounded-t-lg"
                    :src="`${preurl}/${post.image}`"
                    alt=""
                  />
                </div>
                <div class="max-w-3xl mx-auto p-5 sm:p-5 md:p-10">
                  <div
                    class="
                      mt-3
                      bg-white
                      rounded-b
                      lg:rounded-b-none lg:rounded-r
                      flex flex-col
                      justify-between
                      leading-normal
                    "
                  >
                    <div class="">
                      <div v-for="categ in post.category" :key="categ">
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

                      <h1
                        href="#"
                        class="text-gray-900 font-bold text-3xl mb-2"
                      >
                        {{ post.title }}
                      </h1>
                      <div class="flex space-x-3 ml-5">
                        <div class="flex-shrink-0">
                          <Avatar
                            v-if="post.user.name"
                            :url="post.user.avatar"
                            :name="post.user.name"
                          />
                        </div>
                        <div class="min-w-0 flex-1">
                          <p class="text-sm font-b text-gray-900">
                            <router-link
                              :to="`/user/${post.user.id}`"
                              class="hover:underline"
                              >{{ post.user.name }}</router-link
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
                                :datetime="post.created_at"
                              />
                            </a>
                          </p>
                        </div>
                      </div>

                      <p class="text-base break-all leading-8 my-5">
                        {{ post.content }}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white shadow sm:rounded-lg py-1 mt-5">
              <div class="m-6 flex justify-between space-x-8 py-5 sm:py-1">
                <!--reactions-->
                <div
                  class="bottom-0 inset-x-0 pl-3 pr-2 py-2 flex justify-between"
                >
                  <div class="flex items-center">
                    <Listbox as="div" v-model="selected">
                      <ListboxLabel class="sr-only"> Your mood </ListboxLabel>
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
                            post.reactions.filter(function (e) {
                              return authUser.id === e.user_id;
                            })[0] != null
                          "
                        >
                          <div
                            v-for="reac in post.reactions.filter(function (e) {
                              return authUser.id === e.user_id;
                            })"
                            :key="reac"
                          >
                            <span class="flex items-center justify-center">
                              <span v-if="reac == null">
                                <EmojiHappyIcon
                                  class="flex-shrink-0 h-5 w-5"
                                  aria-hidden="true"
                                />
                                <span class="sr-only"> Add your mood </span>
                              </span>
                              <span v-if="reac != null && selected != null">
                                <div
                                  :class="[
                                    selected.bgColor,
                                    'w-8 h-8 rounded-full flex items-center justify-center',
                                  ]"
                                >
                                  <component
                                    :is="selected.icon"
                                    class="flex-shrink-0 h-5 w-5 text-white"
                                    aria-hidden="true"
                                  />
                                </div>
                                <span class="sr-only">{{ selected.name }}</span>
                              </span>
                              <span v-if="reac != null && selected == null">
                                <div
                                  :class="[
                                    reac.bgColor,
                                    'w-8 h-8 rounded-full flex items-center justify-center',
                                  ]"
                                >
                                  <component
                                    v-if="reac.value == 'excited'"
                                    :is="FireIcon"
                                    class="flex-shrink-0 h-5 w-5 text-white"
                                    aria-hidden="true"
                                  />
                                  <component
                                    v-if="reac.value == 'happy'"
                                    :is="EmojiHappyIcon"
                                    class="flex-shrink-0 h-5 w-5 text-white"
                                    aria-hidden="true"
                                  />
                                  <component
                                    v-if="reac.value == 'sad'"
                                    :is="EmojiSadIcon"
                                    class="flex-shrink-0 h-5 w-5 text-white"
                                    aria-hidden="true"
                                  />
                                  <component
                                    v-if="reac.value == 'loved'"
                                    :is="HeartIcon"
                                    class="flex-shrink-0 h-5 w-5 text-white"
                                  />
                                  <component
                                    v-if="reac.value == 'thumbsup'"
                                    :is="ThumbUpIcon"
                                    class="flex-shrink-0 h-5 w-5 text-white"
                                  />
                                  <component
                                    v-if="reac.value == 'thumbsdown'"
                                    :is="ThumbDownIcon"
                                    class="flex-shrink-0 h-5 w-5 text-white"
                                  />
                                  <component
                                    v-if="reac.value == 'nothing'"
                                    :is="XIcon"
                                    class="flex-shrink-0 h-5 w-5 text-white"
                                  />
                                </div>
                                <span class="sr-only">{{ reac.name }}</span>
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
                            post.reactions.filter(function (e) {
                              return authUser.id === e.user_id;
                            })[0] == null
                          "
                        >
                          <span class="flex items-center justify-center">
                            <span v-if="selected == null">
                              <EmojiHappyIcon
                                class="flex-shrink-0 h-5 w-5"
                                aria-hidden="true"
                              />
                              <span class="sr-only"> Add your mood </span>
                            </span>
                            <span v-if="selected != null">
                              <div
                                :class="[
                                  selected.bgColor,
                                  'w-8 h-8 rounded-full flex items-center justify-center',
                                ]"
                              >
                                <component
                                  :is="selected.icon"
                                  class="flex-shrink-0 h-5 w-5 text-white"
                                  aria-hidden="true"
                                />
                              </div>
                              <span class="sr-only">{{ selected.name }}</span>
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
                              @click="PostReaction(post.id, selected)"
                              as="template"
                              class="z-50"
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
                                  <span class="ml-3 block font-medium truncate">
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
                <div class="flex flex-1 justify-between space-x-6">
                  <div class="flex space-x-3">
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
                          post.comments_count
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
                          {{ post.total_views }}</span
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
                      <div class="hidden md:flex overflow-hidden -space-x-3">
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
                        {{ post.reactions_count }}</span
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
                          <span class="font-medium text-gray-900">Share</span>
                        </button>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <!-- Description list-->

          <!-- Comments-->
          <Comments />
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import Comments from "./Comments.component.vue";
import Avatar from "@/components/Avatar/Avatar.component.vue";
import { io } from "socket.io-client";

import {
  ChatAltIcon,
  EyeIcon,
  ThumbUpIcon,
  ThumbDownIcon,
  ShareIcon,
} from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { computed, ref } from "vue";
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
import { EmojiHappyIcon, EmojiSadIcon, HeartIcon } from "@heroicons/vue/solid";
import { FireIcon, XIcon } from "@heroicons/vue/outline";
export default {
  components: {
    ChatAltIcon,
    EyeIcon,

    ThumbUpIcon,
    ThumbDownIcon,
    Comments,
    Avatar,
    FireIcon,

    HeartIcon,

    EmojiHappyIcon,

    EmojiSadIcon,

    XIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    ShareIcon,
  },

  setup() {
    let notificationsocket = io("http://localhost:4000");
    let store = useStore();
    let route = useRoute();
    let id = route.params.id;
    let preurl = `${process.env.VUE_APP_API_URL}`;

    let post = ref(null);
    store.dispatch("Blog/getPostById", id).then((res) => {
      console.log(res);
      post.value = res.data;
    });

    let PostReaction = (id, data) => {
      console.log(id, data);
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

    let authUser = computed(() => store.getters["auth/authUser"]);
    let selected = ref(null);

    return {
      post,
      preurl,
      moods,
      selected,
      PostReaction,
      authUser,
      FireIcon,

      HeartIcon,

      EmojiHappyIcon,

      EmojiSadIcon,

      ThumbUpIcon,

      ThumbDownIcon,

      XIcon,
    };
  },
};
</script>

<style>
</style>
