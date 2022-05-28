<template>
  <div class="px-4 py-5 sm:px-0 sm:py-0 mt-10 lg:flex lg:flex dark:bg-prblue-500">
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
        <dd class="mt-1 text-md text-gray-900 dark:text-white sm:mt-0 sm:ml-6 sm:col-span-2 dark:text-white">
          <p>
            {{ authUserData.bio }}
          </p>
          <div v-if="authUserData.bio === null">
            <router-link
              class="flex font-bold items-center text-prgreen-900"
              to="/edit/profile"
            >
              <PlusCircleIcon
                class="w-6 h-6 stroke-1 mr-3"
                aria-hidden="true"
              />
              <span class="">Add Bio</span>
            </router-link>
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
        <dd class="mt-1 text-md text-gray-900 dark:text-white sm:mt-0 sm:ml-6 sm:col-span-2 dark:text-white">
          {{ authUserData.country }} {{ authUserData.city }}
          {{ authUserData.state }} {{ authUserData.address }}
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
          <router-link
            class="flex font-bold items-center text-prgreen-900"
            to="/edit/profile"
          >
            <PlusCircleIcon class="w-6 h-6 stroke-1 mr-3" aria-hidden="true" />
            <span class="">Add Location</span>
          </router-link>
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
        <dd class="mt-1 text-md text-gray-900 dark:text-white sm:mt-0 sm:ml-6 sm:col-span-2 dark:text-white">
          {{ authUserData.website }}
        </dd>
        <div class="flex" v-if="authUserData.website === null">
          <router-link
            class="flex font-bold items-center text-prgreen-900"
            to="/edit/profile"
          >
            <PlusCircleIcon class="w-6 h-6 stroke-1 mr-3" aria-hidden="true" />
            <span class="">Add website</span>
          </router-link>
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
        <dd class="mt-1 text-md text-gray-900 dark:text-white sm:mt-0 sm:ml-6 sm:col-span-2">
          {{ authUserData.date_of_birth }}
        </dd>

        <div class="flex" v-if="authUserData.date_of_birth === null">
          <router-link
            class="flex font-bold items-center text-prgreen-900"
            to="/edit/profile"
          >
            <PlusCircleIcon class="w-6 h-6 stroke-1 mr-3" aria-hidden="true" />
            <span class="">Add Birthday</span>
          </router-link>
        </div>
      </div>

    </dl>
  </div>
</template>

<script>
import {

} from "@heroicons/vue/solid";
import { PlusCircleIcon } from "@heroicons/vue/outline";
import { computed } from "@vue/runtime-core";
export default {
  components: {


    PlusCircleIcon,
  },
  props: ["Data"],
  setup(props) {
    let authUserData = computed(() => {
      return props.Data;
    });
    console.log(authUserData);

    return {
      authUserData,
    };
  },
};
</script>

<style>
</style>
