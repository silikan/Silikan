<template>
  <div class="grid grid-cols-1 md:grid-cols-2 bg-prblue-500 max-w-7xl mx-auto sm:px-6 lg:px-8 md:mx-10 self-center py-10 mb-10">
    <div class="flex justify-center">
      <img
        src="@\assets\undraw_interview_re_e5jn.svg"
        class="w-60 lg:w-96 h-96"
        alt=""
      >
    </div>

    <div
      class="
        m-10
        px-4
        sm:px-6 sm:text-center
        md:max-w-2xl md:mx-auto
        lg:text-left lg:flex lg:items-center
      "
    >
      <div>
        <h2
          class="
            text-base
            font-semibold
            tracking-wider
            text-prgreen-600
            uppercase
          "
        >
          Work and get paid
        </h2>
        <p
          class="
            mt-2
            lg:text-4xl
            font-extrabold
            text-white
            tracking-tight
            sm:text-4xl
          "
        >
          For service providers
        </p>
        <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500 mb-7">
          If you're a service provider, signup and get paid for your services
        </p>
        <router-link
          to="/signup"
          type="button"
          class="
            inline-flex
            items-center
            px-10
            py-2
            border border-transparent
            text-sm
            font-medium
            rounded-full
            shadow-sm
             text-white
            bg-prgreen-600
            hover:bg-prgreen-700
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-prgreen-500
          "
        >
          signup
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  setup() {
    return {};
  },
};
</script>
