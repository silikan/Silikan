<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 scrollbar">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Service
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Type
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Status
                </th>
                <th
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left text-xs
                    font-medium
                    text-gray-500
                    uppercase
                    tracking-wider
                  "
                >
                  Handyman
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">Action</span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="person in cart" :key="person.email">
                <td
                  class="px-6 py-4 whitespace-nowrap"
                  v-if="person.item.gig.length > 0"
                >
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ person.item.gig[0].title }}
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  class="px-6 py-4 whitespace-nowrap"
                  v-if="person.item.request.length > 0"
                >
                  <div class="flex items-center">
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ person.item.request[0].title }}
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="
                      inline-flex
                      items-center
                      px-2.5
                      py-0.5
                      rounded-full
                      text-xs
                      font-medium
                      bg-prgreen-600
                      text-prgreen-50
                    "
                  >
                    {{ person.item.cart_item.type }}
                  </span>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <span
                    class="
                      inline-flex
                      items-center
                      px-2.5
                      py-0.5
                      rounded-full
                      text-xs
                      font-medium
                      bg-prgreen-600
                      text-prgreen-50
                    "
                  >
                    {{ person.item.cart_item.status }}
                  </span>
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <router-link :to="`/user/${person.item.handyman.id}`">
                        <Avatar
                          v-if="person.item.handyman.name"
                          :url="person.item.handyman.avatar"
                          :name="person.item.handyman.name"
                        />
                      </router-link>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        {{ person.item.handyman.name }}
                      </div>
                      <div class="text-sm text-gray-500">
                        {{ person.item.handyman.email }}
                      </div>
                    </div>
                  </div>
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-right text-sm
                    font-medium
                  "
                  v-if="person.item.gig.length > 0"
                >
                  <router-link
                    :to="`/gig/${person.item.gig[0].id}`"
                    class="text-prgreen-600 hover:text-prgreen-900"
                    >Check</router-link
                  >
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-right text-sm
                    font-medium
                  "
                  v-if="person.item.request.length > 0"
                >
                  <router-link
                    :to="`/request/${person.item.request[0].id}`"
                    class="text-prgreen-600 hover:text-prgreen-900"
                    >Check</router-link
                  >
                </td>
                <td
                  class="
                    px-6
                    py-4
                    whitespace-nowrap
                    text-right text-sm
                    font-medium
                    space-x-4
                  "
                >
                  <a
                    v-if="
                      person.item.cart_item.status == 'pending' &&
                      person.item.cart_item.type == 'request'
                    "
                    type="button"
                    class="
                      cursor-pointer
                      text-white
                      bg-prgreen-600
                      inline-flex
                      items-center
                      px-2
                      py-1
                      border border-transparent
                      text-xs
                      font-medium
                      rounded-full
                      shadow-sm
                    "
                    @click="
                      setCartItemStatusToAccepted(
                        person.item.cart_item.id,
                        person.item.client.id,
                        person.item.handyman.id,
                        person.item.cart_item.type
                      )
                    "
                    >accept</a
                  >
                  <a
                    v-if="
                      person.item.cart_item.status == 'pending' &&
                      person.item.cart_item.type == 'request'
                    "
                    type="button"
                    class="
                      cursor-pointer
                      text-white
                      bg-red-500
                      inline-flex
                      items-center
                      px-2
                      py-1
                      border border-transparent
                      text-xs
                      font-medium
                      rounded-full
                      shadow-sm
                    "
                    @click="
                      setCartItemStatusToDeclined(
                        person.item.cart_item.id,
                        person.item.client.id,
                        person.item.handyman.id,
                        person.item.cart_item.type
                      )
                    "
                    >decline</a
                  >
                  <a
                    v-if="person.item.cart_item.status == 'checkout'"
                    type="button"
                    class="
                      cursor-pointer
                      text-white
                      bg-prgreen-600
                      inline-flex
                      items-center
                      px-2
                      py-1
                      border border-transparent
                      text-xs
                      font-medium
                      rounded-full
                      shadow-sm
                    "
                    @click="
                      createTransaction(
                        person.item.cart_item.id,
                        person.item.handyman.id,
                        person.item.client.id,
                        person.item.handyman.id,
                        person.item.cart_item.type
                      )
                    "
                    >pay
                  </a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import Avatar from "@/components/Avatar/Avatar.component.vue";
import { useRouter } from "vue-router";
import { io } from "socket.io-client";

export default {
  components: {
    Avatar,
  },
  setup() {
    let router = useRouter();
    let store = useStore();
    let cart = ref([]);
    let userId = computed(() => store.getters["auth/id"]);
    let notificationsocket = io("http://localhost:4000");

    console.log(userId.value);
    store
      .dispatch("Cart/getUserCartItems", userId.value)
      .then((result) => {
        console.log(result);
        cart.value = result;

        console.log(cart.value);
      })
      .catch((error) => {
        console.log(error);
      });

    const setCartItemStatusToAccepted = (cartItemId, from, to, type) => {
      let payload = {
        cart_item_id: cartItemId,
        status: "accepted",
      };

      store
        .dispatch("Cart/setCartItemStatusToAccepted", payload)
        .then(async (result) => {
          let toData = {
            userId: to,
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
              to: to,
              from: from,
              data: `accepted cart ${type} item`,
              type: type,
              notification_room_id: getUserNotificationRoom.id,
            },
          };
          store.dispatch(
            "Notification/sendChatNotification",
            notificationpayload
          );
          store.dispatch("Notification/Sendnotification", notificationpayload);
          router.push(`/cart/${cartItemId}/feed`);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const setCartItemStatusToDeclined = (cartItemId, from, to, type) => {
      let payload = {
        cart_item_id: cartItemId,
        status: "declined",
      };
      store
        .dispatch("Cart/setCartItemStatusToDeclined", payload)
        .then(async (result) => {
          console.log(result);

          let toData = {
            userId: to,
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
              to: to,
              from: from,
              data: `declined cart ${type} item`,
              type: type,
              notification_room_id: getUserNotificationRoom.id,
            },
          };
          store.dispatch(
            "Notification/sendChatNotification",
            notificationpayload
          );
          store.dispatch("Notification/Sendnotification", notificationpayload);
          router.push(`/cart/${cartItemId}/feed`);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    const setCartItemStatusToPaid = (cartItemId) => {
      let payload = {
        cart_item_id: cartItemId,
        status: "paid",
      };
      store
        .dispatch("Cart/setCartItemStatusToPaid", payload)
        .then((result) => {
          console.log(result);
          router.push(`/cart/${cartItemId}/feed`);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    async function setCartItemStatusToInProgress(cartItemId) {
      let payload = {
        cart_item_id: cartItemId,
        status: "in progress",
      };
      store
        .dispatch("Cart/setCartItemStatusToInProgress", payload)
        .then((result) => {
          console.log(result);
          router.push(`/cart/${cartItemId}/feed`);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    async function setCartItemStatusToCancelled(cartItemId) {
      let payload = {
        cart_item_id: cartItemId,
        status: "cancelled",
      };
      store
        .dispatch("Cart/setCartItemStatusToCancelled", payload)
        .then((result) => {
          console.log(result);
          router.push(`/cart/${cartItemId}/feed`);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    async function setCartItemStatusToCompleted(cartItemId) {
      let payload = {
        cart_item_id: cartItemId,
        status: "completed",
      };
      store
        .dispatch("Cart/setCartItemStatusToCompleted", payload)
        .then((result) => {
          console.log(result);
          router.push(`/cart/${cartItemId}/feed`);
        })
        .catch((error) => {
          console.log(error);
        });
    }

    const authUser = computed(() => store.getters["auth/authUser"]);
    const createTransaction = (cartItemId, handymanId, from, to, type) => {
      let payload = {
        cart_item_id: cartItemId,
        client_id: authUser.value.id,
        handyman_id: handymanId,
      };
      store
        .dispatch("Transaction/createTransaction", payload)
        .then(async (result) => {
          console.log(result);

          let toData = {
            userId: to,
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
              to: to,
              from: from,
              data: `requested cart ${type} item`,
              type: type,
              notification_room_id: getUserNotificationRoom.id,
            },
          };
          store.dispatch(
            "Notification/sendChatNotification",
            notificationpayload
          );
          store.dispatch("Notification/Sendnotification", notificationpayload);

          router.push({
            name: "Checkout",
            params: {
              id: result.id,
            },
          });
        })
        .catch((error) => {
          console.log(error);
        });
    };

    return {
      cart,
      setCartItemStatusToAccepted,
      setCartItemStatusToDeclined,
      setCartItemStatusToPaid,
      setCartItemStatusToInProgress,
      setCartItemStatusToCancelled,
      setCartItemStatusToCompleted,
      createTransaction,
    };
  },
};
</script>


<style>
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
