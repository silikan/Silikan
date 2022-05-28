<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="
      border-t border-gray-200
      relative
      bg-gray-50
      pt-16
      pb-20
      px-4F
      sm:px-6
    "
  >
    <div class="relative mx-auto">
      <div
        class="
          lg:mx-10
          grid
          gap-5
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          lg:max-w-non
        "
      >
        <div
          v-for="gig in gigs"
          :key="gig.id"
          class="
            flex flex-col
            rounded-lg
            border-x border-b border-gray-200
            overflow-hidden
            shadow-inner
          "
        >
          <router-link
            :to="`/gig/${gig.id}`"
            class="flex justify-center relative w-full h-72 overflow-hidden"
          >
            <img
              :src="`${preurl}/${gig.Image}`"
              class="w-full h-full object-center object-cover"
            />
          </router-link>
          <div class="flex-1 bg-white px-5 pt-5 flex flex-col justify-between">
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <a href="#">
                  <span class="sr-only">{{ gig.username }}</span>
                  <Avatar
                    v-if="gig.username"
                    :url="gig.userAvatar"
                    :name="gig.username"
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-md font-medium text-gray-600">
                  <a href="gig.author.href" class="hover:underline">
                    {{ gig.username }}
                  </a>
                </p>
              </div>
            </div>
            <div class="">
              <p class="text-md font-medium text-gray-500 mt-2">
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
              <p class="font-bold text-2xl text-gray-400">
                {{ gig.basic.price }}$
              </p>
              <div class="flex justify-center items-center">
                <button
                  class="text-black font-bold rounded-full"
                  @click="addToCart({ price:gig.basic.price }, gig.id)"
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
</template>

<script>
import { ShoppingCartIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { reactive } from "@vue/reactivity";
import { useRoute } from "vue-router";
import Avatar from "@/components/Avatar/Avatar.component.vue";
import { io } from "socket.io-client";
import { computed } from '@vue/runtime-core';

export default {
  components: {
    ShoppingCartIcon,
    Avatar,
  },
  setup() {
    let notificationsocket = io("http://localhost:4000");

    let store = useStore();
    let gigs = reactive([]);
    let route = useRoute();
    let id = route.params.id;
    store
      .dispatch("Gig/getUserGigs", id)
      .then((result) => {
        let dataArray = Object.values(result);
        dataArray.forEach((element) => {
          console.log(element.gig.images);
          gigs.push({
            id: element.gig.data.id,
            title: element.gig.data.title,
            basic: JSON.parse(element.gig.data.basic),
            username: element.gig.user.name,
            userId: element.gig.user.id,
            userAvatar: element.gig.user.avatar,
            Image: element.gig.images[0].url,
          });
        });
      })
      .catch((err) => {
        console.log(err);
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
      gigs,
      preurl,
      authUser,
      addToCart,

    };
  },
};
</script>
