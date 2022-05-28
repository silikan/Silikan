<template>
  <div class="flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end">
    <div class="max-w-lg w-full lg:max-w-xs">
      <label
        for="search"
        class="sr-only"
      >Search</label>
      <div class="block">
        <div
          class="
            absolute
            inset-y-0
            left-0
            pl-3
            flex
            items-center
            pointer-events-none
          "
        >
          <SearchIcon
            class="h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </div>
        <input
          id="search"
          name="search"
          class="
            block
            w-full
            bg-white
            border border-gray-300
            rounded-md
            py-2
            pl-10
            pr-3
            text-sm
            placeholder-gray-500
            focus:outline-none
            focus:text-gray-900
            focus:placeholder-gray-400
            focus:ring-1
            focus:ring-prgreen-500
            focus:border-prgreen-500
            sm:text-sm
          "
          placeholder="Search"
          type="search"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { SearchIcon } from '@heroicons/vue/solid';

export default {
  components: { SearchIcon },
};
</script>

<style>
</style>
