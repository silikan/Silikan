<template>
  <AdminDashboard />
</template>

<script>
import AdminDashboard from "@/components/Dashboard/Admin/AdminDashboard.component.vue";
import { onMounted } from "@vue/runtime-core";
import { useRouter } from "vue-router";
export default {
  components: {
    AdminDashboard,
  },
  setup() {
    let router = useRouter();
    onMounted(() => {
      router.push("/dashboard/admin/home");
    });
    return {};
  },
};
</script>

<style>
</style>
