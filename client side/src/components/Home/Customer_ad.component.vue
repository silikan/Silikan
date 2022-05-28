<template>
  <div
    class="
      grid grid-cols-1
      md:grid-cols-2
      bg-prblue-500
      max-w-7xl
      mx-auto
      sm:px-6
      lg:px-8
      md:mx-10
      self-center
      mb-10
      py-10
    "
  >
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
          Fast and relaible services
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
          Everything you need to get the job done
        </p>
        <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500 mb-7">
          signin and find the best service provider for the task you need
        </p>
        <router-link
          to="/signin"
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
          Signin
        </router-link>
      </div>
    </div>
    <div class="flex justify-center">
      <img
        src="@\assets\undraw_contract_re_ves9.svg"
        class="w-60 lg:w-96 h-96"
        alt=""
      />
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
