
<template>
  <form class="space-y-8 divide-y divide-gray-200 w-full">
    <div class="space-y-8 divide-y max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div>
          <h3 class="text-lg leading-6 font-medium text-gray-900">Pricing</h3>
          <p class="mt-1 max-w-2xl text-sm text-gray-500">create that gig</p>
        </div>
        <div class="space-y-6 sm:space-y-5">
          <div class="-gray-300 rounded-lg shadow-sm overflow-hidden">
            <label for="price" class="block text-sm font-medium text-gray-700"
              >Price</label
            >
            <div class="mt-1 relative rounded-md shadow-sm">
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
                <span class="text-gray-500 sm:text-sm"> $ </span>
              </div>
              <input
                type="number"
                name="price"
                id="price"
                v-model="price"
                :class="[
                  priceErrorMessage
                    ? 'block w-full  pr-12  pl-7 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                    : ' block w-full pr-12  pl-7 px-3 py-2 border border-gray-300 rounded-md  -smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
                ]"
                placeholder="0.00"
                aria-describedby="price-currency"
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
                <span class="text-gray-500 sm:text-sm" id="price-currency">
                  DZD
                </span>
              </div>

              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <ExclamationCircleIcon
                  class="h-5 w-5 text-red-500"
                  aria-hidden="true"
                  v-if="priceErrorMessage"
                />
              </div>
            </div>
            <p
              v-if="priceErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            >
              {{ priceErrorMessage }}
            </p>
          </div>
        </div>
      </div>
      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
        <div class="space-y-6 sm:space-y-5">
          <div class="-gray-300 rounded-lg shadow-sm overflow-hidden">
            <label for="price" class="block text-sm font-medium text-gray-700"
              >Duration</label
            >
            <div class="mt-1 relative rounded-md shadow-sm">

              <input
                type="number"
                name="duration"
                id="duration"
                v-model="duration"
                :class="[
                  durationErrorMessage
                    ? 'block w-full  pr-12  pl-7 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                    : ' block w-full pr-12  pl-7 px-3 py-2 border border-gray-300 rounded-md  -smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
                ]"
                placeholder="0.00"
                aria-describedby="duration"
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
                <span class="text-gray-500 sm:text-sm" id="price-currency">
                  Days
                </span>
              </div>

              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <ExclamationCircleIcon
                  class="h-5 w-5 text-red-500"
                  aria-hidden="true"
                  v-if="durationErrorMessage"
                />
              </div>
            </div>
            <p
              v-if="durationErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            >
              {{ durationErrorMessage }}
            </p>
          </div>
        </div>
      </div>
      <div class="flex items-start space-x-4 pb-">
        <div class="min-w-0 flex-1">
          <div action="#" class="relative">
            <div class="-gray-300 rounded-lg shadow-sm overflow-hidden">
              <label
                for="description"
                class="block text-sm font-medium text-black sm:mt-px sm:pt-2"
              >
                Description
              </label>
              <textarea
                v-model="description"
                rows="3"
                name="description"
                id="description"
                class="
                  block
                  w-full
                  py-3
                  h-40
                  -0
                  resize-none
                  focus:ring-0
                  sm:text-sm
                  appearance-none
                  block
                  w-full
                  px-3
                  py-2
                  border border-gray-300
                  rounded-md
                  shadow-sm
                  placeholder-gray-400
                  focus:outline-none
                  focus:ring-prgreen-500
                  focus:border-prgreen-500
                  sm:text-sm
                "
                placeholder="Add your description..."
              />

              <!-- Spacer element to match the height of the toolbar -->
              <div class="py-2" aria-hidden="true">
                <!-- Matches height of button in toolbar (1px  + 36px content height) -->
                <div class="py-px">
                  <div class="h-9" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </form>
</template>
<script>
import { watchEffect } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useField } from "vee-validate";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import * as yup from "yup";

export default {
  components: { ExclamationCircleIcon },
  setup() {
    let store = useStore();

    let priceValidation = yup
      .number()
      .min(0.01, "Price must be greater than 0")
      .required("Price is required");
    let durationValidation = yup
      .number()
      .min(0.01, "Duration must be greater than 0")
      .required("Duration is required");
    let descriptionValidation = yup
      .string()
      .required("Description is required")
      .min(3, "Description must be at least 3 characters long")
      .max(500, "Description must be less than 500 characters long");
    const { value: duration, errorMessage: durationErrorMessage } = useField(
      "duration",
      durationValidation
    );
    const { value: price, errorMessage: priceErrorMessage } = useField(
      "price",
      priceValidation
    );
    const { value: description, errorMessage: descriptionErrorMessage } =
      useField("description", descriptionValidation);

    watchEffect(() => {
      store.commit("Request/SET_PRICE", price.value);
      store.commit("Request/SET_PRICE_DESCRIPTION", description.value);
      store.commit("Request/SET_DURATION", duration.value);
    });
    return {
      price,
      description,
      duration,
      priceErrorMessage,
      descriptionErrorMessage,
      durationErrorMessage,
    };
  },
};
</script>
