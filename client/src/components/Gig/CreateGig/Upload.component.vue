<template>
  <div
    class="
      sm:grid
      sm:grid-cols-3
      sm:gap-4
      sm:items-start
      sm:border-t
      sm:border-gray-200
      pt-5
      w-full
    "
  >
    <div class="mt-1 sm:mt-0 sm:col-span-3">
      <div
        class="
          w-full
          flex
          justify-center
          px-6
          pt-5
          pb-6
          border-2 border-gray-300 border-dashed
          rounded-md
          max-w-7xl
          mx-auto
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div class="space-y-1 text-center">
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 48 48"
            aria-hidden="true"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div class="flex text-sm text-gray-600">
            <label
              for="GigImages"
              class="
                relative
                cursor-pointer
                bg-white
                rounded-md
                font-medium
                text-prgreen-600
                hover:text-prgreen-500
                focus-within:outline-none
                focus-within:ring-2
                focus-within:ring-offset-2
                focus-within:ring-prgreen-500
              "
            >
              <span>Upload a file</span>
              <input
                id="GigImages"
                name="GigImages"
                type="file"
                accept="image/*"
                class="sr-only"
                multiple
                @change="onChange"
              />
            </label>
            <p class="pl-1">or drag and drop</p>
          </div>
          <p class="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
export default {
  setup() {
    let store = useStore();
    let imagesArray = reactive([]);
    const onChange = (event) => {
   if (event.target.files.length > 5) {
        alert("more than 6 files");

      }else {
  imagesArray = event.target.files;
      const GigImages = new FormData();
      for (const i of Object.keys(imagesArray)) {
        GigImages.append("GigImages[" + i + "]", imagesArray[i]);
      }

      store.commit("Gig/SET_GIG_IMAGES", GigImages);
      }


    };

    return {
      onChange,
    };
  },
};
</script>

<style>
</style>
