<template>
  <div>
    <Content/>
  </div>
</template>

<script>
import Content from '@/components/Post/Content.component.vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
export default {
components: {
  Content
},

setup() {
  let store = useStore()
  let route = useRoute()
  let id  = route.params.id
      store.dispatch("Blog/postPageViews" , id);

  return {}
}
}
</script>

<style>

</style>
