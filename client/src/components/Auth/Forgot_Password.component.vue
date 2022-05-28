<template>
  <form
    class="p-10 bg-white border rounded shadow m-10"
    @submit.prevent="forgotPassword"
  >
    <div class=" divide-y divide-gray-200">
      <h2 class="text-lg leading-6 font-medium text-gray-900  mb-5 ">
        Verify Email For Password Change
      </h2>
    </div>

    <div class="mb-5">
      <label
        for="email"
        class="block text-sm font-medium text-gray-700"
      >Email</label>
      <div class="mt-1">
        <input
          id="email"
          v-model="email"
          type="email"
          name="email"
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
          placeholder="you@example.com"
          aria-describedby="email-description"
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
        Send
      </button>
    </div>
  </form>
</template>
<script>
import AuthService from '@/services/AuthService';
import { ref } from 'vue';

export default {
  components: {
  },
  setup() {
    const email = ref('');

    const forgotPassword = () => {
      const payload = {
        email: email.value,
      };

      AuthService.forgotPassword(payload).then(
        () => (console.log('Reset password email sent.')),
      );
    };

    return {
      //
      forgotPassword,
      email,
    };
  },
};
</script>
