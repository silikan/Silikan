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
Cart    </h3>

    <div class="w-full mx-auto">
      <Cart />
    </div>
  </div>
</template>

<script>
import Cart from "../components/Buyer/Cart/Cart.component.vue";
export default {
  components: {
    Cart,
  },
};
</script>

<style>
</style>
