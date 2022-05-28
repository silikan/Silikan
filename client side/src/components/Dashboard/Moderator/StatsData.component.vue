<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <dl class="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <div
        v-for="item in stats"
        :key="item.id"
        class="
          relative
          bg-white
          pt-5
          px-4
          sm:pt-6 sm:px-6
          shadow
          rounded-lg
          overflow-hidden
        "
      >
        <dt>
          <div class="absolute bg-prgreen-500 rounded-md p-3">
            <component
              :is="item.icon"
              class="h-6 w-6 text-white"
              aria-hidden="true"
            />
          </div>
          <p class="ml-16 text-sm font-medium text-gray-500 truncate">
            {{ item.name }}
          </p>
        </dt>
        <dd class="ml-16 pb-6 flex items-baseline sm:pb-7">
          <p class="text-2xl font-semibold text-gray-900">
            {{ item.stat }}
          </p>
        </dd>
      </div>
    </dl>
  </div>
</template>

<script>
import {
  AdjustmentsIcon,
  ShieldCheckIcon,
  BriefcaseIcon,
  UsersIcon,
  HandIcon,
  CreditCardIcon,
  SpeakerphoneIcon,
  HashtagIcon,
  AtSymbolIcon
} from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";

export default {
  components: {},
  setup() {
    let store = useStore();

    const stats = ref([]);

    store.dispatch("Admin/stats").then((res) => {
      stats.value = [
        {
          id: 1,
          name: "Total Users",
          stat: res.users,
          icon: AtSymbolIcon,
        },
        {
          id: 2,
          name: "Total Clients",
          stat: res.clients,
          icon: UsersIcon,
        },
        {
          id: 3,
          name: "Total Handymen",
          stat: res.handymen,
          icon: BriefcaseIcon,
        },
        {
          id: 4,
          name: "Total Gigs",
          stat: res.gigs,
          icon: SpeakerphoneIcon,
        },
        {
          id: 5,
          name: "Total Requests",
          stat: res.clientRequests,
          icon: HandIcon,
        },
        {
          id: 6,
          name: "Total Transactions",
          stat: res.transactions,
          icon: CreditCardIcon,
        },
        {
          id: 7,
          name: "Total Admins",
          stat: res.admins,
          icon: ShieldCheckIcon,
        },
        {
          id: 7,
          name: "Total Moderatos",
          stat: res.moderators,
          icon: AdjustmentsIcon,
        },
        {
          id: 7,
          name: "Total Categories",
          stat: res.categories,
          icon: HashtagIcon,
        },
      ];
    });
    return {
      stats,
    };
  },
};
</script>
