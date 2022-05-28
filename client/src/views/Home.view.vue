<template>
  <div class="flex flex-col  justify-center dark:bg-prblue-500">
    <Hero />
    <Trusted />
    <Features />
    <CustomerAd />
    <HandymanAd />
    <Testemonials />
    <Stats />
    <Faq />
  </div>
</template>

<script>
import Features from '../components/Home/Features.component.vue';
import CustomerAd from '../components/Home/Customer_ad.component.vue';
import HandymanAd from '../components/Home/Handyman_ad.component.vue';
import Hero from '../components/Home/Hero.component.vue';
import Stats from '../components/Home/Stats.component.vue';
import Testemonials from '../components/Home/Testemonials.component.vue';
import Faq from '../components/Home/Faq.component.vue';
import Trusted from '../components/Home/Trusted.component.vue';
import { watchEffect } from '@vue/runtime-core';
import { useStore } from 'vuex';
import { useRouter } from 'vue-router';

export default {
  components: {
    Features,
    CustomerAd,
    HandymanAd,
    Hero,
    Stats,
    Testemonials,
    Faq,
    Trusted,
  },
  setup() {
    let store = useStore();
    let router = useRouter();
     watchEffect(async () => {
      const authUser = await store.getters["auth/loggedIn"];
      console.log(authUser === true);
      if (authUser) {
        router.push("/profile");
      }
    });
    return {};
  },
};
</script>

<style>
</style>
