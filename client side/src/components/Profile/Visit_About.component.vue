<template>
  <div class="px-4 py-5 sm:px-0 sm:py-0 mt-10 lg:flex lg:flex">
    <dl>
      <div class="sm:flex sm:px-6 sm:py-5 px-4 py-5 sm:px-6">
        <dt
          class="
            text-sm
            font-medium
            text-gray-500
            sm:w-40 sm:flex-shrink-0
            lg:w-48
          "
        >
          Bio
        </dt>
        <dd class="mt-1 text-md text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          <p>
            {{ authUserData.bio }}
          </p>
          <div v-if="authUserData.bio === null">
            <div class="flex font-bold items-center text-prgreen-800">

              <span class="">No Bio</span>
            </div>
          </div>
        </dd>
      </div>
      <div class="sm:flex sm:px-6 sm:py-5 px-4 py-5 sm:px-6">
        <dt
          class="
            text-sm
            font-medium
            text-gray-500
            sm:w-40 sm:flex-shrink-0
            lg:w-48
          "
        >
          Location
        </dt>
        <dd class="mt-1 text-md text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          {{ authUserData.country }} {{ authUserData.city }}
          {{ authUserData.state }} {{ authUserData.Noress }}
        </dd>
        <div
          class="flex"
    v-if="
            authUserData.country === null &&
            authUserData.state === null &&
            authUserData.city === null &&
            authUserData.address === null
          "
        >
          <div class="flex font-bold items-center text-prgreen-800">
            <span class="">No Location</span>
          </div>
        </div>
      </div>
      <div class="sm:flex sm:px-6 sm:py-5 px-4 py-5 sm:px-6">
        <dt
          class="
            text-sm
            font-medium
            text-gray-500
            sm:w-40 sm:flex-shrink-0
            lg:w-48
          "
        >
          Website
        </dt>
        <dd class="mt-1 text-md text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          {{ authUserData.website }}
        </dd>
        <div class="flex" v-if="authUserData.website === null">
          <div class="flex font-bold items-center text-prgreen-800">
            <span class="">No website</span>
          </div>
        </div>
      </div>
      <div class="sm:flex sm:px-6 sm:py-5 px-4 py-5 sm:px-6">
        <dt
          class="
            text-sm
            font-medium
            text-gray-500
            sm:w-40 sm:flex-shrink-0
            lg:w-48
          "
        >
          Birthday
        </dt>
        <dd class="mt-1 text-md text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          {{ authUserData.date_of_birth }}
        </dd>

        <div class="flex" v-if="authUserData.date_of_birth === null">
          <div class="flex font-bold items-center text-prgreen-800">
            <span class="">No Birthday</span>
          </div>
        </div>
      </div>
    </dl>
  </div>
</template>

<script>
import {} from "@heroicons/vue/solid";
import { computed } from "@vue/runtime-core";
export default {
  components: {

  },
  props: ["Data"],
  setup(props) {
    let authUserData = computed(() => {
      return props.Data;
    });

    return {
      authUserData,
    };
  },
};
</script>

<style>
</style>
