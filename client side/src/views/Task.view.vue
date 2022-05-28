<template>
  <div class="w-full mx-auto px-4 py-5 sm:px-6 lg:px-8">
    <h3
      class="
        mt-2
        text-xl
        leading-8
        tracking-tight
        text-gray-900
        sm:text-4xl
		my-10
      "
    >
Task    </h3>

    <div class="w-full mx-auto">
      <Task />
    </div>
  </div>
</template>

<script>
import Task from "../components/Seller/Task/Task.component.vue";
export default {
  components: {
    Task,
  },
};
</script>

<style>
</style>
