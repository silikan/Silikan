<template>
  <div class="flex flex-col md:p-10 m-5 sm:m-1">
    <div class="profile flex justify-between flex-col ml-5 md:ml-0 mt-10">
        <nav class="flex mb-3" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div>
              <router-link to="/requests" class="text-gray-400 hover:text-gray-500">
                <HomeIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                <span class="sr-only">Home</span>
              </router-link>
            </div>
          </li>
          <li v-for="page in pages" :key="page.name">
            <div class="flex items-center">
              <ChevronRightIcon
                class="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <router-link
                to="/categories"
                class="
                  ml-4
                  text-sm
                  font-medium
                  text-gray-500
                  hover:text-gray-700
                "
                :aria-current="page.current ? 'page' : undefined"
                >{{ page.title }}</router-link
              >
            </div>
          </li>
        </ol>
      </nav>
        <div class="flex text-gray-400 items-center ">
      <EyeIcon class=" text-gray-400 flex-shrink-0 h-5 w-5 mr-2" aria-hidden="true" />
<span>{{views}}</span>
      </div>
      <h1 class="mb-2 text-3xl font-medium">{{ title }}</h1>
      <a href="#" class="flex-shrink-0 group block mb-5">
        <div class="flex">
          <div>
            <Avatar v-if="name" :url="avatar" :name="name" />
          </div>
          <div class="ml-3">
            <p
              class="
                text-sm
                font-medium
                text-gray-700
                group-hover:text-gray-900
              "
            >
              {{ name }}
            </p>

            <router-link :to="`/user/${userId}`">
              <p
                class="
                  text-xs
                  font-medium
                  text-gray-500
                  group-hover:text-gray-700
                "
              >
                View profile
              </p>
            </router-link>
          </div>
        </div>
      </a>
    </div>
    <div class="bg-white border sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <div class="sm:flex sm:items-start sm:justify-between">
          <div>
            <h3 class="text-lg leading-6 font-medium text-gray-900">
              {{ title }}
            </h3>
            <div class="my-2 max-w-xl text-sm text-gray-500  break-all">
              <p>
                {{ description }}
              </p>
            </div>
            <div
              class="
                flex
                mt-1
                text-md text-gray-900
                sm:mt-0 sm:ml-6 sm:col-span-2
              "
            >
              <CashIcon class="btn-cash h-5 w-5" />
              <span>{{ price }} DZD</span>
            </div>

            <div
              class="
                flex
                mt-1
                text-md text-gray-900
                sm:mt-0 sm:ml-6 sm:col-span-2
              "
            >
              <ClockIcon class="btn-cash h-5 w-5" />
              <span>{{ duration }} days</span>
            </div>
          </div>

          <div
            class="
              mt-5
              sm:mt-0 sm:ml-6 sm:flex-shrink-0 sm:flex sm:items-center
            "
          >
            <button
            v-if="loggedIn"
              type="button"
              class="
                inline-flex
                items-center
                px-4
                py-2
                border border-transparent
                font-medium
                rounded-md
                text-white
                bg-prgreen-600
                hover:bg-prgreen-700
                focus:outline-none
                focus:ring-2
                focus:ring-offset-2
                focus:ring-prgreen-500
                sm:text-sm
                mx-2
              "
              @click="addToTaskList({price :  price})"
            >
              Add To Task
            </button>
            <ChatButton  v-if="handymanId !== authUserId"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  ChevronRightIcon,
  HomeIcon,
  CashIcon,
  ClockIcon,
  EyeIcon
} from "@heroicons/vue/solid";
import ChatButton from "@/components/Chat/ChatButton.component.vue";

import "tw-elements";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";
import Avatar from "@/components/Avatar/Avatar.component.vue";
import { computed } from "@vue/runtime-core";
import { io } from "socket.io-client";

export default {
  components: {
    ChevronRightIcon,
    HomeIcon,
    ChatButton,
    CashIcon,
    ClockIcon,
    Avatar,
    EyeIcon
  },
  setup() {
    let route = useRoute();
    let id = route.params.id;
    let store = useStore();
    let title = ref("");
    let description = ref("");
    let price = ref("");
    let duration = ref("");
    let views = ref(null);

    let pages = ref([]);
    store.dispatch("Request/getClientRequestCategory", id).then(async (result) => {
      console.log(result);
      pages.value = result
    });

    let notificationsocket = io("http://localhost:4000");

     let authUserId = ref(null);
let handymanId = ref(null);

let loggedIn = computed(() => store.getters["auth/loggedIn"]);
if (loggedIn.value === true) {
 let authUser = computed(()=>store.getters["auth/authUser"])
  authUserId.value = authUser.value.id
}

store
        .dispatch("Gig/getGigUser", id)
        .then((result) => {

          handymanId.value = result.id;

        })
        .catch((err) => {
          console.log(err);
        });
    store
      .dispatch("Request/getRequest", id)
      .then((result) => {
        title.value = result.title;
        description.value = result.description;
        price.value = result.price;
        duration.value = result.duration;
        views.value = result.total_views;

        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
    let name = ref();
    let userId = ref();
    let avatar = ref();
    store
      .dispatch("Request/getRequestUser", id)
      .then((result) => {
        name.value = result.name;
        userId.value = result.id;
        avatar.value = result.avatar;
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });

    const addToTaskList = (price) => {
      let authuserId = computed(() => store.getters["auth/id"]);

      store
        .dispatch("Request/getRequestUser", id)
        .then((result) => {
          let payload = {
            type: "request",
            request_id: id,
            user_id: authuserId.value,
            client_id: result.id,
            handyman_id: authuserId.value,
            plan: JSON.stringify(price),
          };
          store
            .dispatch("Task/addToTaskList", payload)
            .then(() => {
                          let taskItemId = computed(() => store.getters["Task/getTaskItemData"]);
  let taskItemIdValue = taskItemId.value.id;
              addToCart(taskItemIdValue , price);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    const addToCart = (taskItemId , price) => {
      store
        .dispatch("Request/getRequestUser", id)
        .then(async (result) => {
          let authuserId = computed(() => store.getters["auth/id"]);
          console.log(userId.value);
          let payload = {
            type: "request",
            request_id: id,
            user_id: result.id,
            client_id: result.id,
            handyman_id: authuserId.value,
          task_item_id : taskItemId,
          plan : JSON.stringify(price),

          };
          store.dispatch("Cart/addToCart", payload);


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
              from: authuserId.value,
              data: "added your request to his tasklist",
              type: "request",
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

    return {
      pages,
      title,
      description,
      price,
      name,
      userId,
      avatar,
      duration,
      addToTaskList,
       handymanId,
      authUserId,
      views,
      loggedIn
    };
  },
};
</script>

<style scoped>
.btn-cash {
  transform: rotate(0deg);
}
</style>
