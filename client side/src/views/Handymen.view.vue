<template>
  <div class="dark:bg-prblue-500">
    <div v-if="loading === true">
      <HandymenLoadingSkeleton />
    </div>
    <div
      class="flex flex-col justify-center items-center m-10"
      v-if="loading === false"
    >
      <HandymanList
        :path="path"
        :meta="meta"
        :links="links"
        action="handyman/paginateHandymen"
        v-if="meta && meta.last_page >= 1"
      />
    </div>
  </div>
</template>

<script>
import HandymanList from "@/components/Handymen_List.component.vue";
import HandymenLoadingSkeleton from "@/components/Loading/Skeletons/UserCard.component.vue";

import store from "@/store/index";
import { computed } from "@vue/runtime-core";
export default {
  components: {
    HandymanList,
    HandymenLoadingSkeleton,
  },

  setup() {
    let action = "handyman/paginateHandymen";

    let path = "handymen";
    const meta = computed(() => store.getters["handyman/meta"]);
    const links = computed(() => store.getters["handyman/links"]);

    let loading = computed(() => store.getters["handyman/loading"]);

    return {
      meta,
      links,

      action,
      path,
      loading,
    };
  },

  beforeRouteEnter(to, from, next) {
    const currentPage = parseInt(to.query.page) || 1;
    store.dispatch("handyman/getHandymen", currentPage).then(() => {
      to.params.page = currentPage;
      next();
    });
  },
};
</script>

<style>
</style>
