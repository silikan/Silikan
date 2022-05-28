<template>
  <div class="rounded-md bg-red-50 p-4" v-if="error.length > 0">
    <div class="flex">
      <div class="flex-shrink-0">
        <XCircleIcon class="h-5 w-5 text-red-400" aria-hidden="true" />
      </div>
      <div class="ml-3">
        <h3 class="text-sm font-medium text-red-800">
          There were {{error.length}} errors with your submission
        </h3>
        <div class="mt-2 text-sm text-red-700">
          <ul role="list" class="list-disc pl-5 space-y-1">
            <li v-for="err in error" :key="err">{{ err }}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/runtime-core";
export default {
  props: ["errorData"],
  setup(props) {
    console.log(props);
    let error = computed(() => {
      return  Object.values(props.errorData).map  ((err) => {
        return err[0];
      })
    });


    return {
      error,
    };
  },
};
</script>

<style>
</style>
