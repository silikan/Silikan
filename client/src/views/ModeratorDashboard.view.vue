<template>
  <ModeratorDashboard/>
</template>

<script>
import ModeratorDashboard from '@/components/Dashboard/Moderator/ModeratorDashboard.component.vue'
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
	components: {
		ModeratorDashboard
	},

		  setup() {
    let router = useRouter();
    onMounted(() => {
      router.push("/dashboard/moderator/home");
    });
    return {};
  },


}
</script>

<style>

</style>
