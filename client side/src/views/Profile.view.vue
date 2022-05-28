<template>
  <div class="dark:bg-prblue-500">
    <Profile :authUser="authUser" />
  </div>
</template>

<script>
import Profile from "../components/Profile/Profile.component.vue";
import { computed } from "@vue/runtime-core";
import { useStore } from "vuex";

export default {
  components: { Profile },
  setup() {
    const store = useStore();

    const authUser = computed(() => store.getters["auth/authUser"]);

    return {
      authUser,
    };
  },
};
</script>

<style>
</style>
