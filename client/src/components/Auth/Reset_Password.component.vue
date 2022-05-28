<template>
  <div class="p-10 bg-white border rounded shadow m-20">
    <form @submit.prevent="resetPassword">
      <div class="divide-y divide-gray-200">
        <h2 class="text-lg leading-6 font-medium text-gray-900 mb-5">
          Change password
        </h2>
      </div>
      <div>
        <label
          for="email"
          class="block text-sm font-medium text-gray-700"
        >
          Email address
        </label>
        <div class="mt-1">
          <input
            id="email"
            v-model="email"
            name="email"
            type="email"
            autocomplete="email"
            required=""
            class="
              appearance-none
              block
              w-full
              pl-5
              pr-20
              px-20
              py-2
              border border-gray-300
              rounded-md
              shadow-sm
              placeholder-gray-400
              focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500
              sm:text-sm
            "
          >
        </div>
      </div>
      <div class="space-y-1">
        <label
          for="password"
          class="block text-sm font-medium text-gray-700"
        >
          Password
        </label>
        <div class="mt-1">
          <input
            id="password"
            v-model="password"
            name="password"
            type="password"
            autocomplete="current-password"
            required=""
            class="
              appearance-none
              block
              w-full
              pl-5
              pr-20
              px-20
              py-2
              border border-gray-300
              rounded-md
              shadow-sm
              placeholder-gray-400
              focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500
              sm:text-sm
            "
          >
        </div>
      </div>
      <div class="space-y-1">
        <label
          for="confirm password"
          class="block text-sm font-medium text-gray-700"
        >
          confirm Password
        </label>
        <div class="mt-1">
          <input
            id="confirm password"
            v-model="passwordConfirm"
            name="confirm password"
            type="password"
            autocomplete="confirm password"
            required=""
            class="
              appearance-none
              block
              w-full
              pl-5
              pr-20
              py-2
              border border-gray-300
              rounded-md
              shadow-sm
              placeholder-gray-400
              focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500
              sm:text-sm
            "
          >
        </div>
      </div>
      <div class="mt-2 flex justify-end">
        <button
          type="submit"
          class="
            inline-flex
            justify-center
            items-center
            w-full
            py-1
            border border-transparent
            shadow-sm
            text-base
            font-medium
            rounded-md
            text-white
            bg-prgreen-600
            hover:bg-prgreen-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-prgreen-500
          "
        >
          Change Password
        </button>
      </div>
    </form>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRoute } from 'vue-router';
import AuthService from '@/services/AuthService';

export default {
  setup() {
    const email = ref('');
    const password = ref('');
    const passwordConfirm = ref('');

    const route = useRoute();

    const resetPassword = () => {
      const payload = {
        email: email.value,
        password: password.value,
        password_confirmation: passwordConfirm.value,
        token: route.query.token,
      };
      AuthService.resetPassword(payload).then(() => console);
    };

    return {
      email,
      password,
      passwordConfirm,
      resetPassword,
    };
  },
};
</script>

<style></style>
