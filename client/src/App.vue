<template>
  <div
    class="
      h-screen
      min-h-full
      flex flex-col
      justify-between

dark:bg-prblue-500
    "
  >
    <Teleport to=".notifications">
      <BasicNotification class="z-50 mt-10" v-if="isLoggedin" />
    </Teleport>
    <FeedbackModalComponent />
    <Teleport to=".action">
      <FloatingActionButton />
    </Teleport>
    <Navbar :authUser="authUser" v-if="path" class="mb-0" />
    <LoadingBar class="mt-0" />
    <router-view />
    <Footer />
  </div>
</template>
<script>
import FloatingActionButton from "./components/Action/FloatingActionButton.component.vue";
import FeedbackModalComponent from "./components/FeedBack/FeedbackModalComponent.component.vue";

import LoadingBar from "./components/Loading/LoadingBar.component.vue";
import { computed, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { useStore } from "vuex";
import Footer from "./components/Footer.component.vue";
import Navbar from "./components/Navbar/Navbar.component.vue";
import BasicNotification from "./components/Notification/Notifications/Basic.component.vue";

export default {
  name: "App",
  components: {
    Footer,
    Navbar,
    LoadingBar,
    BasicNotification,
    FloatingActionButton,
    FeedbackModalComponent,
  },

  setup() {
    const route = useRoute();
    const path = computed(() => route.path !== "/");
    const store = useStore();

    watchEffect(async () => {
      const authUser = await store.getters["auth/loggedIn"];
      console.log(authUser === true);
      if (authUser) {
        store.dispatch("auth/setGuest", { value: "isNotGuest" });
      }
    });

    const authUser = computed(() => store.getters["auth/authUser"]);
    const isLoggedin = computed(() => store.getters["auth/loggedIn"]);
    return { path, isLoggedin, authUser };
  },
};
</script>

<style>
</style>
