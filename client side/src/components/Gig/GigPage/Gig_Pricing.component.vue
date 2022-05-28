<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="items">
    <div class="flex-1">
      <div class="sm:hidden">
        <label for="tabs" class="sr-only">Select a tab</label>
        <!-- Use an "onChange" listener to redirect the user to the selected tab URL. -->
        <select
          id="tabs"
          name="tabs"
          class="
            block
            h-12
            appearance-none
            w-full
            px-3
            py-2
            border border-gray-300
            rounded-md
            shadow-sm
            placeholder-gray-400
            focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500
            sm:text-sm
          "
          @change="selectTab"
        >
          <option v-for="tab in tabs" :key="tab.name" :selected="tab.current">
            {{ tab.name }}
          </option>
        </select>
      </div>
      <div class="hidden sm:block">
        <nav
          class="relative z-0 flex divide-x divide-gray-200"
          aria-label="Tabs"
        >
          <a
            v-for="(tab, tabIdx) in tabs"
            :key="tab.name"
            @click="navigateTabs(tab)"
            class="cursor-pointer"
            :class="[
              tab.current
                ? 'text-gray-900'
                : 'text-gray-500 hover:text-gray-700',
              tabIdx === 0 ? 'rounded-l-lg' : '',
              tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '',
              'group relative min-w-0 flex-1 overflow-hidden bg-white py-4 px-4 text-sm font-medium text-center hover:bg-gray-50 focus:z-10',
            ]"
            :aria-current="tab.current ? 'page' : undefined"
          >
            <span>{{ tab.name }}</span>
            <span
              aria-hidden="true"
              :class="[
                tab.current ? 'bg-prgreen-500' : 'bg-transparent',
                'absolute inset-x-0 bottom-0 h-0.5',
              ]"
            />
          </a>
        </nav>
      </div>
    </div>

    <Pricing :data="basicData" :tiers="basic" v-show="tabs[0].current === true" />
    <Pricing
      :data="standardData"
      :tiers="standard"
      v-show="tabs[1].current === true"
    />
    <Pricing
      :data="premiumData"
      :tiers="Premium"
      v-show="tabs[2].current === true"
    />
  </div>
</template>

<script>
import Pricing from "./pricings/pricingData.component.vue";
import { reactive } from "@vue/reactivity";
const tabs = reactive([
  { name: "Basic", href: "#", current: true, number: 1 },
  { name: "Standard", href: "#", current: false, number: 2 },
  { name: "Premium", href: "#", current: false, number: 3 },
]);
const basic = reactive([
  {
    name: "Basic",
  },
]);
const Premium = reactive([
  {
    name: "Premium",
  },
]);
const standard = reactive([
  {
    name: "Standard",
  },
]);

export default {
  components: {
    Pricing,
  },
  setup() {

    //get current tab
    const navigateTabs = (tab) => {
      tabs.forEach((t) => {
        t.current = false;
      });
      tab.current = true;
    };

    //get selected option from dropdown
    const selectTab = (e) => {
      const tab = tabs.find((t) => t.name === e.target.value);
      navigateTabs(tab);
    };

    return {
      tabs,
      navigateTabs,
      basic,
      Premium,
      standard,
      selectTab,
    };
  },
};
</script>
