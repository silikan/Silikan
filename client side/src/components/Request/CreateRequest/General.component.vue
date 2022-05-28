
<template>
  <form
    class="space-y-8 divide-y divide-gray-200 w-full"
    method="post"
    autocomplete="on"
  >
    <div class="space-y-8 divide-y max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Request</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">create that Request</p>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div class="-gray-300 rounded-lg -sm overflow-hidden">
            <label
              for="title"
              class="block text-sm font-medium text-black sm:mt-px sm:pt-2"
            >
              Title
            </label>

            <div class="mt-1 relative rounded-md -sm">
              <input
                v-model="title"
                type="text"
                name="title"
                id="title"
                autocomplete="on"
                :class="[
                  titleErrorMessage
                    ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                    : ' block w-full px-3 py-2 border border-gray-300 rounded-md  -smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
                ]"
              />
              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  pr-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <ExclamationCircleIcon
                  class="h-5 w-5 text-red-500"
                  aria-hidden="true"
                  v-if="titleErrorMessage"
                />
              </div>
            </div>
            <p
              v-if="titleErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            >
              {{ titleErrorMessage }}
            </p>
          </div>

          <div class="-gray-300 rounded-lg -sm overflow-hidden">
            <label
              for="category"
              class="block text-sm font-medium text-black sm:mt-px sm:pt-2"
            >
              Category
            </label>
            <div class="mt-1 sm:mt-0 sm:col-span-2">
              <select
                v-model="category"
                id="category"
                name="category"
                autocomplete="on"
                :class="[
                  categoryErrorMessage
                    ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                    : ' block w-full px-3 py-2 border border-gray-300 rounded-md  -smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
                ]"
              >
                <option v-for="item in categories" :key="item" :value="item">
                  {{ item }}
                </option>
              </select>
              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  pr-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <ExclamationCircleIcon
                  class="h-5 w-5 text-red-500"
                  aria-hidden="true"
                  v-if="categoryErrorMessage"
                />
              </div>
            </div>
            <p
              v-if="categoryErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            >
              {{ categoryErrorMessage }}
            </p>
          </div>
        </div>
      </div>

      <div class="flex items-start space-x-4 pb-">
        <div class="min-w-0 flex-1">
          <div action="#" class="relative">
            <div class="-gray-300 rounded-lg -sm overflow-hidden">
              <label
                for="description"
                class="block text-sm font-medium text-black sm:mt-px sm:pt-2"
              >
                Description
              </label>
              <textarea
                autocomplete="on"
                v-model="description"
                rows="3"
                name="description"
                id="description"
                :class="[
                  descriptionErrorMessage
                    ? 'block w-full py-3 h-40 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-red-300 rounded-md-sm placeholder-red-400 text-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : ' block w-full py-3 h-40 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-gray-300 rounded-md-sm placeholder-gray-400 focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500',
                ]"
                placeholder="Add your description..."
              />

              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  pr-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <ExclamationCircleIcon
                  class="h-5 w-5 text-red-500"
                  aria-hidden="true"
                  v-if="descriptionErrorMessage"
                />
              </div>
            </div>
            <p
              v-if="descriptionErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            >
              {{ descriptionErrorMessage }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
let categories = [
  "Cleaning",
  "Cooking",
  "Plumbing",
  "Electrical",
  "Painting",
  "Moving",
  "Carpentry",
  "Building",
  "Massage",
  "Tutoring",
  "Woodwork",
  "Cooking",
  "Other",
];

import { useStore } from "vuex";
import { watchEffect } from "@vue/runtime-core";
import { useField } from "vee-validate";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import * as yup from "yup";

export default {
  components: {ExclamationCircleIcon},
  setup() {
    let store = useStore();

let titleValidation = yup
      .string()
      .required("Title is required")
      .min(3, "Title must be at least 3 characters long")
      .max(50, "Title must be less than 50 characters long");
    let descriptionValidation = yup
      .string()
      .required("Description is required")
      .min(3, "Description must be at least 3 characters long")
      .max(500, "Description must be less than 500 characters long");
    let categoryValidation = yup.string().required("Category is required");
    const { value: title, errorMessage: titleErrorMessage } = useField(
      "title",
      titleValidation
    );
    const { value: description, errorMessage: descriptionErrorMessage } =
      useField("description", descriptionValidation);
    const { value: category, errorMessage: categoryErrorMessage } = useField(
      "category",
      categoryValidation
    );
    watchEffect(() => {
      store.commit("Request/SET_TITLE", title.value);
      store.commit("Request/SET_DESCRIPTION", description.value);
      store.commit("Request/SET_CATEGORY", category.value);
    });

    return {
      title,
      description,
      category,
          categories,
      titleErrorMessage,
      descriptionErrorMessage,
      categoryErrorMessage,
    };
  },
};
</script>
