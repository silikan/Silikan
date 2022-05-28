<template>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="max-w-3xl mx-auto">
		<RequestPage/>
    </div>
  </div>
</template>
<script>
import { useRoute } from 'vue-router';
import { useStore } from 'vuex';
import RequestPage from "../components/Request/RequestPage/RequestPage.component.vue";
export default {
components: {
RequestPage
}
,
setup() {
  let store = useStore();
  let route = useRoute();
      let id = route.params.id;
      store.dispatch('Request/requestPageViews', id);

return {
};
}
}
</script>

<style>

</style>
