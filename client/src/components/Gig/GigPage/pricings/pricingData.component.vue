<template>
  <div>
    <div
      v-for="tier in tiers"
      :key="tier.name"
      class="flex flex-col rounded-lg flex-1 w-full overflow-hidden"
    >
      <div class="px-6 py-8 bg-white sm:p-10 sm:pb-6">
        <div>
          <h3
            class="
              inline-flex
              px-4
              py-1
              rounded-full
              text-sm
              font-semibold
              tracking-wide
              uppercase
              bg-prgreen-600
              text-prgreen-50
            "
            id="tier-standard"
          >
            {{ tier.name }}
          </h3>
        </div>
        <div class="mt-4 flex items-baseline text-6xl font-extrabold">
          DZD {{ Data.price }}
          <span class="ml-1 text-2xl font-medium text-gray-500"> /mo </span>
        </div>
        <p class="mt-5 text-lg text-gray-500">
          {{ Data.description }}
        </p>
      </div>
      <div
        class="
          flex-1 flex flex-col
          justify-between
          px-6
          pt-6
          pb-8
          bg-gray-50
          space-y-6
          sm:p-10 sm:pt-6
        "
      >
        <ul role="list" class="space-y-4">
          <li
            v-for="feature in tier.features"
            :key="feature"
            class="flex items-start"
          >
            <div class="flex-shrink-0">
              <CheckIcon class="h-6 w-6 text-green-500" aria-hidden="true" />
            </div>
            <p class="ml-3 text-base text-gray-700">
              {{ feature }}
            </p>
          </li>
        </ul>
        <div class="rounded-md shadow" v-if="loggedIn">
          <a
            @click="addToCart({ price: Data.price })"
            class="
              flex
              items-center
              justify-center
              px-5
              py-3
              border border-transparent
              text-base
              font-medium
              rounded-md
              text-white
              bg-prblue-500
              hover:bg-gray-900
              cursor-pointer
            "
            aria-describedby="tier-standard"
            v-if="handymanId !== authUserId"
          >
            Add To Cart
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon } from "@heroicons/vue/outline";
import { computed } from "@vue/runtime-core";
import { ref } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { io } from "socket.io-client";

export default {
  components: {
    CheckIcon,
  },
  props: ["tiers"],
  setup(props) {
    let route = useRoute();
    let id = route.params.id;
    let tabs = computed(() => props.tiers);
    let store = useStore();
    let Data = ref("");

    let notificationsocket = io("http://localhost:4000");

    let authUserId = ref(null);
    let handymanId = ref(null);

    let loggedIn = computed(() => store.getters["auth/loggedIn"]);
    if (loggedIn.value === true) {
      let authUser = computed(() => store.getters["auth/authUser"]);
      authUserId.value = authUser.value.id;
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
      .dispatch("Gig/getGig", id)
      .then((result) => {
        console.log(tabs.value);
        if (tabs.value[0].name == "Basic") {
          Data.value = JSON.parse(result.basic);
        }

        if (tabs.value[0].name == "Standard") {
          Data.value = JSON.parse(result.standard);
        }

        if (tabs.value[0].name == "Premium") {
          Data.value = JSON.parse(result.premium);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    const addToTaskList = async (cartItemId, tier) => {
      let userId = computed(() => store.getters["auth/id"]);

      store
        .dispatch("Gig/getGigUser", id)
        .then(async (result) => {
          let payload = {
            type: "gig",
            gig_id: id,
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

    const addToCart = (tier) => {
      store
        .dispatch("Gig/getGigUser", id)
        .then((result) => {
          let userId = computed(() => store.getters["auth/id"]);
          console.log(userId.value);

          let payload = {
            type: "gig",
            gig_id: id,
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
              addToTaskList(cartItemIdValue, tier);
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log(err);
        });
    };

    /*
import { io } from "socket.io-client";

let getUserNotificationRoom = await store.dispatch(
          "Notification/getUserNotificationRoom",
          toData
        );
        let toData = {
        userId: to.value.id,
      };
        notificationsocket.on("connect", function () {
          // Connected, let's sign-up for to receive messages for this room
          notificationsocket.emit(
            "notificationRoom",
            `notification-room-${getUserNotificationRoom.id}`
          );
        });
        let notificationpayload = {
          data: {
            to: to.value.id,
            from: from.value.id,
            data: "sent you a message",
            type: "chat",
            notification_room_id: getUserNotificationRoom.id,
            chat_room_id: id,
          },
        };
        store.dispatch(
          "Notification/sendChatNotification",
          notificationpayload
        );
        store.dispatch("Notification/Sendnotification", notificationpayload);
*/

    return {
      tabs,
      Data,
      addToCart,
      handymanId,
      authUserId,
      loggedIn
    };
  },
};
</script>

<style>
</style>
