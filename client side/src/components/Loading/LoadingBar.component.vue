<template>

  <div class="relative" v-if="loading === true">
    <div class="overflow-hidden h-0.5 mb-4 text-xs flex bg-prgreen-200">


      <div
        class="
          shadow-none
          flex flex-col
          text-center
          whitespace-nowrap
          text-white
          justify-center
          bg-prgreen-600
        ease-in duration-300
        "

         :style="{'width':  progress  + '%'}"
      >

      </div>
    </div>
  </div>
</template>

<script>
import { ref, watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    let store = useStore();
    let loading = ref(false);
    let progress = ref(0);
    watchEffect(() => {

      loading.value = store.getters["Loading/loading"];
progress.value = store.getters["Loading/progress"];
      return {
        loading,
        progress,
      };
    });

    return { loading, progress };
  },
};
</script>

<style>
</style>
