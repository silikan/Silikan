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
          email
        </dt>
        <dd class="mt-1 text-md text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          <p>
            {{ authUserData.email }}
          </p>
          <div v-if="authUserData.email === null">
            <div
              class="flex font-bold items-center text-prgreen-800"

            >

              <span class="">No email</span>
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
          gender
        </dt>
        <dd class="mt-1 text-md text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          <p>
            {{ authUserData.gender }}
          </p>
          <div v-if="authUserData.gender === null">
            <div
              class="flex font-bold items-center text-prgreen-800"

            >

              <span class="">No gender</span>
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
          Phone number
        </dt>
        <dd class="mt-1 text-md text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          {{ authUserData.phone_number }}
        </dd>
        <div class="flex" v-if="authUserData.phone_number === null">
          <div
            class="flex font-bold items-center text-prgreen-800"

          >
            <span class="">No a phone number</span>
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
        <dd
          class="flex mt-1 text-md text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2"
        >
          <a :href="authUserData.facebook_social_link" class="facebook cursor-pointer" v-if="authUserData.facebook_social_link !== null">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              style="fill: #000000"
            >
              <path
                d="M15,3C8.373,3,3,8.373,3,15c0,6.016,4.432,10.984,10.206,11.852V18.18h-2.969v-3.154h2.969v-2.099c0-3.475,1.693-5,4.581-5 c1.383,0,2.115,0.103,2.461,0.149v2.753h-1.97c-1.226,0-1.654,1.163-1.654,2.473v1.724h3.593L19.73,18.18h-3.106v8.697 C22.481,26.083,27,21.075,27,15C27,8.373,21.627,3,15,3z"
              ></path>
            </svg>
          </a>
          <a :href="authUserData.twitter_social_link" class="twitter cursor-pointer" v-if="authUserData.twitter_social_link !== null">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              style="fill: #000000"
            >
              <path
                d="M15,3C8.373,3,3,8.373,3,15c0,6.627,5.373,12,12,12s12-5.373,12-12C27,8.373,21.627,3,15,3z M21.464,12.535 c0.006,0.133,0.009,0.265,0.009,0.397c0,4.068-3.095,8.756-8.756,8.756c-1.739,0-3.356-0.509-4.717-1.383 c0.241,0.029,0.486,0.042,0.735,0.042c1.443,0,2.769-0.491,3.821-1.318c-1.347-0.025-2.484-0.915-2.875-2.137 c0.188,0.036,0.381,0.055,0.579,0.055c0.281,0,0.554-0.038,0.811-0.108c-1.408-0.282-2.469-1.526-2.469-3.017 c0-0.013,0-0.026,0-0.039c0.415,0.231,0.889,0.369,1.394,0.385c-0.825-0.551-1.369-1.494-1.369-2.561 c0-0.565,0.151-1.094,0.416-1.547c1.518,1.862,3.786,3.088,6.343,3.216c-0.052-0.225-0.079-0.46-0.079-0.701 c0-1.699,1.378-3.078,3.077-3.078c0.885,0,1.685,0.374,2.246,0.972c0.701-0.139,1.36-0.394,1.955-0.747 c-0.23,0.719-0.718,1.321-1.354,1.703c0.622-0.074,1.215-0.239,1.768-0.484C22.588,11.559,22.067,12.1,21.464,12.535z"
              ></path>
            </svg>
          </a>
          <a :href="authUserData.linkedin_social_link" class="linkedin cursor-pointer" v-if="authUserData.linkedin_social_link !== null">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 30 30"
              style="fill: #000000"
            >
              <path
                d="M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z"
              ></path>
            </svg>
          </a>
        </dd>
        <div
          class="flex"
          v-if="
            authUserData.twitter_social_link === null &&
            authUserData.facebook_social_link === null &&
            authUserData.linkedin_social_link === null
          "
        >
          <div
            class="flex font-bold items-center text-prgreen-800"

          >
            <span class="">No Social Links </span>
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
          Zip Code
        </dt>
        <dd class="mt-1 text-md text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
         {{authUserData.zip_code}}
        </dd>

        <div class="flex" v-if="authUserData.zip_code === null">
          <div
            class="flex font-bold items-center text-prgreen-800"

          >
            <span class="">No zip code</span>
          </div>
        </div>
      </div>


    </dl>
  </div>
</template>

<script>
import {

} from "@heroicons/vue/solid";
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
