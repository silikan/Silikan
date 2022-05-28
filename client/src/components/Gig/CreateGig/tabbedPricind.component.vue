<template>


<div class="w-full mx-auto sm:px-6 lg:px-8 ">
  <div>

          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <a
              v-for="tab in tabs"
              :key="tab.number"
              @click="navigateTabs(tab)"
              :href="tab.href"
              :class="[
                tab.current
                  ? 'border-prgreen-500  text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer',
              ]"
              :aria-current="tab.current ? 'page' : undefined"
            >
              {{ tab.name }}
            </a>
          </nav>
          <Pricing :Data="tabs[0]" v-show="tabs[0].current === true" />
          <Pricing :Data="tabs[1]" v-show="tabs[1].current === true" />
          <Pricing :Data="tabs[2]" v-show="tabs[2].current === true" />



  </div>
  </div>
</template>

<script>
import Pricing from "./Pricing.component.vue";
 import {reactive} from "@vue/runtime-core";

export default {
  components: { Pricing },



 setup(){


     const tabs = reactive([
      { name: "Basic", number: 1, current: true , price: 'basicPrice' , description : 'basicDescription' },
       { name: "Standard", number: 2, current: false,   price: 'standardPrice' , description : 'standardDescription' },
       { name: "Premium", number: 3, current: false,   price: 'premiumPrice' , description : 'premiumDescription' },
    ]);

     const navigateTabs = (tab) => {
       if (tab.name === "Basic" && tab.number === 1) {
        tab.current = true;
        tabs[1].current = false;
         tabs[2].current = false;
      } else if (tab.name === "Standard" && tab.number === 2) {
         tab.current = true;
        tabs[2].current = false;
        tabs[0].current = false;
      } else if (tab.name === "Premium" && tab.number === 3) {
        tab.current = true;
        tabs[0].current = false;
        tabs[1].current = false;
       }
    };
     let timerange = reactive(null);




    return {
      tabs,
       navigateTabs,
      timerange,
    };
  }

};


</script>

<style>
</style>
