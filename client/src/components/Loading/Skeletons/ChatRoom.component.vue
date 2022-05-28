<template>
  <div class="flex justify-center p-10">
    <div class="w-full border rounded">
      <div class="">
        <div class="w-full h-screen flex flex-col">
          <div class="bg-white px-4 py-5 sm:px-6 border-b border-gray-300">
            <div class="flex space-x-3">
              <div class="flex-shrink-0">
                <Avatar v-if="name" :url="avatar" :name="name" />
              </div>
              <div class="min-w-0 flex-1">
                <p class="text-sm font-medium text-gray-900">
                  <a href="#" class="hover:underline">Chelsea Hagon</a>
                </p>
                <p class="text-sm text-gray-500">
                  <a href="#" class="hover:underline">December 9 at 11:43 AM</a>
                </p>
              </div>
              <div class="flex-shrink-0 self-center flex">
                <Menu as="div" class="relative z-30 inline-block text-left">
                  <div>
                    <MenuButton
                      class="
                        -m-2
                        p-2
                        rounded-full
                        flex
                        items-center
                        text-gray-400
                        hover:text-gray-600
                      "
                    >
                      <span class="sr-only">Open options</span>
                      <DotsVerticalIcon class="h-5 w-5" aria-hidden="true" />
                    </MenuButton>
                  </div>

                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <MenuItems
                      class="
                        origin-top-right
                        absolute
                        right-0
                        mt-2
                        w-56
                        rounded-md
                        shadow-lg
                        bg-white
                        ring-1 ring-black ring-opacity-5
                        focus:outline-none
                      "
                    >
                      <div class="py-1">
                        <MenuItem v-slot="{ active }">
                          <a
                            href="#"
                            :class="[
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'flex px-4 py-2 text-sm',
                            ]"
                          >
                            <StarIcon
                              class="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Add to favorites</span>
                          </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <a
                            href="#"
                            :class="[
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'flex px-4 py-2 text-sm',
                            ]"
                          >
                            <CodeIcon
                              class="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Embed</span>
                          </a>
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <a
                            href="#"
                            :class="[
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'flex px-4 py-2 text-sm',
                            ]"
                          >
                            <FlagIcon
                              class="mr-3 h-5 w-5 text-gray-400"
                              aria-hidden="true"
                            />
                            <span>Report content</span>
                          </a>
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </div>
            </div>
          </div>
          <div
            class="flex flex-col justify-end flex-1 w-full py-6 overflow-y-auto"
          >
            <ul class="space-y-2 overflow-y-auto scrollbar">
              <div class="flex justify-center">
                <p v-if="loading">loading...</p>
                <button
                  v-if="loading === false && meta.current_page < meta.last_page"
                  type="button"
                  class="
                    inline-flex
                    items-center
                    px-3
                    py-1
                    border border-gray-300
                    shadow-sm
                    text-xs
                    leading-4
                    font-medium
                    text-gray-700
                    bg-white
                    hover:bg-gray-50
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                    rounded-full
                  "
                  @click="setPage()"
                >
                  More
                </button>
              </div>

              <li
                v-for="msg in savedMessages.slice().reverse()"
                :key="msg.room_id"
                class="mx-6"
              >
                <div class="flex justify-end">
                  <div class="flex" v-if="msg.from == authUser.id">
                    <div
                      class="
                        block
                        flex-1
                        relative
                        max-w-xl
                        px-4
                        py-2
                        text-gray-700
                        bg-gray-100
                        rounded
                        break-all
                      "
                    >
                      <p class="">
                        {{ msg.message }}
                      </p>
                    </div>

                    <!--                     <ChatAvatar :UserId="msg.from" class="ml-2" />
 -->

                    <Avatar v-if="name" :url="toavatar" :name="toname" />
                  </div>
                </div>
                <div class="flex justify-start">
                  <div v-if="msg.from != authUser.id" class="flex">
                    <!--                     <ChatAvatar :UserId="msg.from" class="mr-2" />
 -->

                    <Avatar v-if="name" :url="avatar" :name="name" />
                    <span
                      class="
                        relative
                        max-w-xl
                        px-4
                        py-2
                        text-gray-700
                        bg-blue-100
                        rounded
                        block
                        flex-1
                        break-all
                      "
                      >{{ msg.message }}</span
                    >
                  </div>
                </div>
              </li>
              <li v-for="msg in messages" :key="msg.room_id" class="mx-6">
                <div class="flex justify-end">
                  <div class="flex" v-if="msg.from == authUser.id">
                    <span
                      class="
                        block
                        flex-1
                        relative
                        max-w-xl
                        px-4
                        py-2
                        text-gray-700
                        bg-gray-100
                        rounded
                        break-all
                      "
                      >{{ msg.message }}</span
                    >
                    <!--                     <ChatAvatar :UserId="msg.from" class="ml-2" />
 -->

                    <Avatar v-if="name" :url="toavatar" :name="toname" />
                  </div>
                </div>
                <div class="flex justify-start">
                  <div v-if="msg.from != authUser.id" class="flex">
                    <!--                     <ChatAvatar :UserId="msg.from" class="mr-2" />
 -->

                    <Avatar v-if="name" :url="avatar" :name="name" />
                    <span
                      class="
                        relative
                        max-w-xl
                        px-4
                        py-2
                        text-gray-700
                        bg-blue-100
                        rounded
                        block
                        flex-1
                        break-all
                      "
                      >{{ msg.message }}</span
                    >
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div
            class="
              flex
              items-center
              justify-between
              w-full
              p-3
              border-t border-gray-300
            "
          >
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-6 h-6 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>

            <input
              type="text"
              v-model="message"
              placeholder="Message"
              class="
                block
                w-full
                py-2
                pl-4
                mx-3
                bg-gray-100
                rounded-full
                outline-none
                focus:text-gray-700
              "
              name="message"
              required
              @keyup.enter="sendMessage"
            />

            <div
              class="
                flex-shrink-0
                sm:w-full
                flex-1
                inline-flex
                items-center
                justify-center
                px-2
                py-2
                text-sm
                font-medium
                text-black
                bg-white
                hover:border-transparent
                cursor-pointer
              "
              tag="button"
              @click="sendMessage"
            >
              <PaperAirplaneIcon class="btn-chat h-5 w-5" aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {
  CodeIcon,
  DotsVerticalIcon,
  FlagIcon,
  StarIcon,
} from "@heroicons/vue/solid";
import ChatService from "@/services/ChatService.js";
import { computed, reactive, ref, watchEffect } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { PaperAirplaneIcon } from "@heroicons/vue/solid";
import { io } from "socket.io-client";
import Avatar from "@/components/Avatar/Avatar.component.vue";
export default {
  components: {
    PaperAirplaneIcon,
    /*     ChatAvatar,
     */ Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    CodeIcon,
    DotsVerticalIcon,
    FlagIcon,
    StarIcon,
    Avatar,
  },
  setup() {
    let pages = ref(1);
    let to = ref("");
    let from = ref("");
    let message = ref("");
    let messages = reactive([]);
    const store = useStore();
    let route = useRoute();
    let id = route.params.id;
    let loading = computed(() => store.getters["Loading/loading"]);
    let meta = computed(() => store.getters["Chat/meta"]);
    let firstPage = reactive(1);

    let payload = {
      page: firstPage,
      room_id: id,
    };
    store.dispatch("Chat/getMessages", payload);
    let savedMessagesReactive = reactive([]);
    let savedMessages = computed(() => {
      savedMessagesReactive.push(...store.getters["Chat/messages"]);
      return [...savedMessagesReactive];
    });
    let links = computed(() => store.getters["Chat/links"]);

    const setPage = () => {
      store.dispatch("Chat/paginatemessages", links.value.next).then(() => {});
    };

    let socket = io("http://localhost:3000");

    const authUser = computed(() => store.getters["auth/authUser"]);

    const sendMessage = async () => {
      store.dispatch("Chat/getRoomUsers", id).then((result) => {
        let AuthUserId = authUser.value.id;
        console.log(result);
        if (result.data[0].id == AuthUserId) {
          to.value = result.data[1];
          from.value = result.data[0];
        } else {
          to.value = result.data[0];
          from.value = result.data[1];
        }
      });

      console.log(to.value.id);

      if (message.value != "" && message.value != null) {
        let payload = {
          data: {
            to: to.value.id,
            from: from.value.id,
            message: message.value,
            room_id: id,
            avatar: {
              img: from.value.avatar,
              id: from.value.id,
            },
          },
        };
        socket.emit("message", payload);
        ChatService.sendMessage(payload);
        ChatService.saveMessage(payload);
        message.value = "";
      }
    };

    socket.on("message", function (data) {
      console.log("Incoming message:", data);
      console.log(data);
      messages.push(data);
    });

    socket.on("connect", function () {
      // Connected, let's sign-up for to receive messages for this room
      socket.emit("room", `room-${id}`);
    });
    let name = ref();
    let avatar = ref();

    let toname = ref();
    let toavatar = ref();
    store.dispatch("Chat/getRoomUsers", id).then((result) => {
      let AuthUserId = authUser.value.id;
      watchEffect(() => {
        console.log(result.data);
      });
      if (result.data[0].id == AuthUserId) {
        name.value = result.data[1].name;
        avatar.value = result.data[1].avatar;
        toname.value = result.data[0].name;
        toavatar.value = result.data[0].avatar;
        to.value = result.data[1];
        from.value = result.data[0];
      } else {
        name.value = result.data[0].name;
        avatar.value = result.data[0].avatar;
        toname.value = result.data[1].name;
        toavatar.value = result.data[1].avatar;
        to.value = result.data[0];
        from.value = result.data[1];
      }
    });

    console.log(to.value);
    watchEffect(() => {
      console.log(savedMessages.value);
      return { savedMessages };
    });
    return {
      to,
      from,
      message,
      sendMessage,
      messages,
      authUser,
      setPage,
      savedMessages,
      pages,
      loading,
      savedMessagesReactive,
      meta,
      name,
      avatar,
      toname,
      toavatar,
    };
  },
};
</script>

<style scoped>
.scrollbar {
  cursor: pointer;
}
.scrollbar::-webkit-scrollbar {
  width: 15px;
  height: 20px;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #e2e8f0;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 100vh;
  border: 3px solid #e2e8f0;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
