<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-10">
    <!-- We've used 3xl here, but feel free to try other max-widths based on your needs -->
    <div class="max-w-3xl mx-auto">
      <div class="flow-root" >
        <ul role="list" class="-mb-8">
          <li v-for="(event, eventIdx) in timeline" :key="event.id">
            <div class="relative pb-8" v-if="event.condition === true">
              <span
                v-if=" event.condition === true && eventIdx  !== timeline.length - 1 "
                class="absolute top-4 left-4 -ml-px h-full w-0.5 bg-gray-200"
                aria-hidden="true"
              />
              <div class="relative flex space-x-3" >
                <div>
                  <span
                    :class="[
                      event.iconBackground,
                      'h-8 w-8 rounded-full flex items-center justify-center ring-8 ring-white',
                    ]"
                  >
                    <component
                      :is="event.icon"
                      class="h-5 w-5 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <div
                  class="min-w-0 flex-1 pt-1.5 flex justify-between space-x-4"
                >
                  <div>
                    <p class="text-sm text-gray-500">
                      {{ event.content }}
                      <a :href="event.href" class="font-medium text-gray-900">{{
                        event.target
                      }}</a>
                    </p>
                  </div>
                  <div
                    class="text-right text-sm whitespace-nowrap text-gray-500"
                  >
                    <p>{{ event.status }}</p>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon, ThumbUpIcon, UserIcon , XCircleIcon , BanIcon , FlagIcon  , CurrencyDollarIcon} from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { ref } from "@vue/reactivity";

export default {
  setup() {
    let store = useStore();
    let route = useRoute();
    let id = route.params.id;
    let payload = {
      id: id,
    };

    let timeline = ref([]);
    store
      .dispatch("Cart/getCartItemById", payload)
      .then((result) => {
        console.log(result);
        timeline.value = [
          {
            id: 1,
            content: "Client Added The Request To Task",
            status: "pending",
            handyman: result.handyman,
            client: result.client,

            condition: result.cart_item.is_pending,
            icon: UserIcon,
            iconBackground: "bg-gray-400",
          },
          {
            id: 2,
            content: "Client Accepted The Gig",
            status: "accepted",
            handyman: result.handyman,
            client: result.client,

            condition: result.cart_item.is_accepted,
            icon: ThumbUpIcon,
            iconBackground: "bg-blue-500",
          },
          {
            id: 3,
            content: "Handyman Started The Gig",
            status: "in progress",
            handyman: result.handyman,
            client: result.client,

            condition: result.cart_item.is_in_progress,

            icon: FlagIcon,
            iconBackground: "bg-green-500",
          },
          {
            id: 4,
            content: "Handyman Completed The Gig",
            status: "completed",
            handyman: result.handyman,
            client: result.client,

            condition: result.cart_item.is_completed,
            icon: CheckIcon,
            iconBackground: "bg-green-500",
          },

          {
            id: 5,
            content: "Client Declined The Gig",
            status: "declined",
            handyman: result.handyman,
            client: result.client,

            condition: result.cart_item.is_declined,
                       icon: BanIcon,
            iconBackground: "bg-red-500",
          },

          {
            id: 6,
            content: "Handyman cancelled The Gig",
            status: "cancelled",
            handyman: result.handyman,
            client: result.client,

            condition: result.cart_item.is_cancelled,
            icon: XCircleIcon,
            iconBackground: "bg-red-500",
          },
          {
            id: 7,
            content: "Transaction is on Checkout",
            status: "checkout",
            handyman: result.handyman,
            client: result.client,

            condition: result.cart_item.is_on_checkout,
            icon: CurrencyDollarIcon,
            iconBackground: "bg-yellow-500",
          },
             {
            id: 8,
            content: "Transaction is on Completed",
            status: "paid",
            handyman: result.handyman,
            client: result.client,

            condition: result.cart_item.is_paid,
            icon: CurrencyDollarIcon,
            iconBackground: "bg-green-500",
          },
             {
            id: 9,
            content: "Transaction is on Confirmed",
            status: "confirmed",
            handyman: result.handyman,
            client: result.client,
            condition: result.cart_item.is_confirmed,
            icon: CheckIcon,
            iconBackground: "bg-prgreen-500",
            }
        ];
      })
      .catch((error) => {
        console.log(error);
      });
    return {
      timeline,
    };
  },
};
</script>
