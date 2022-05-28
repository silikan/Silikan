<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div v-if="isLoggedin">
    <div
      v-for="item in notifications"
      :key="item"
      aria-live="assertive"
      class="fixed inset-0 flex px-4 py-6 pointer-events-none sm:p-6 items-end"
    >
      <div class="w-full flex flex-col items-center space-y-4 sm:items-start">
        <!-- Notification panel, dynamically insert this into the live region when it needs to be displayed -->
        <transition
          class="relative"
          enter-active-class="transform ease-out duration-300 transition"
          enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
          leave-active-class="transition ease-in duration-100"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0 "
        >
          <div
            v-if="item.show"
            class="
              max-w-sm
              w-full
              bg-white
              shadow-lg
              rounded-lg
              pointer-events-auto
              ring-1 ring-black ring-opacity-5
              overflow-hidden
            "
          >
            <div class="p-4">
              <div class="flex items-start">
                <div class="flex-shrink-0">
                  <div class="flex-shrink-0 pt-0.5">
                    <Avatar
                      v-if="item.name"
                      :url="item.avatar"
                      :name="item.name"
                    />
                  </div>
                </div>
                <div class="ml-3 w-0 flex-1 pt-0.5">
                  <p class="text-sm font-medium text-gray-900">
                    {{ item.name }}
                  </p>
                  <p class="mt-1 text-sm text-gray-500">
                    {{ item.data }}
                  </p>
                  <div class="mt-3 flex space-x-7">
                    <button
                      type="button"
                      class="
                        bg-white
                        rounded-md
                        text-sm
                        font-medium
                        text-prgreen-600
                        hover:text-prgreen-500
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-prgreen-500
                      "
                    >
                      Visit
                    </button>
                    <button
                      @click="item.show = false"
                      type="button"
                      class="
                        bg-white
                        rounded-md
                        text-sm
                        font-medium
                        text-gray-700
                        hover:text-gray-500
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-prgreen-500
                      "
                    >
                      Dismiss
                    </button>
                  </div>
                </div>
                <div class="ml-4 flex-shrink-0 flex">
                  <button
                    @click="item.show = false"
                    class="
                      bg-white
                      rounded-md
                      inline-flex
                      text-gray-400
                      hover:text-gray-500
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-prgreen-500
                    "
                  >
                    <span class="sr-only">Close</span>
                    <XIcon class="h-5 w-5" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import { io } from "socket.io-client";
import Avatar from "@/components/Avatar/Avatar.component.vue";

import { computed, ref } from "vue";
import { XIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";

export default {
  components: {
    XIcon,
    Avatar,
  },
  setup() {
    let store = useStore();
    const show = ref(true);
    let notifications = ref([]);
    const isLoggedin = computed(() => store.getters["auth/loggedIn"]);

    let notificationSocket = io("http://localhost:4000");
    let authUserData = computed(() => store.getters["auth/authUser"]);
    console.log(isLoggedin.value);
    if (authUserData.value.NotificationRoom) {
      let roomId = authUserData.value.NotificationRoom.id;
      console.log(roomId);
      notificationSocket.on("connect", function () {
        // Connected, let's sign-up for to receive messages for this room
        console.log(`room-${roomId}`);
        notificationSocket.emit(
          "notificationRoom",
          `notification-room-${roomId}`
        );
      });
      notificationSocket.on("notification", function (data) {
        console.log("connected");
        console.log("notification");
        console.log(data);
        store.dispatch("user/getUser", data.from).then((res) => {
          console.log(res);
          let notification = {
            data: data.data,
            from: data.from,
            notification_room_id: data.notification_room_id,
            to: data.to,
            type: data.type,
            show: true,
            name: res.data.name,
            avatar: res.data.avatar,
          };

          notifications.value.push(notification);
        });
      });
    }

    return {
      show,
      notifications,
      isLoggedin,
    };
  },
};
</script>
