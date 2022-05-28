<template>
  <div>
    <TransitionRoot as="template" :show="open">
      <Dialog
        as="div"
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="toggleFeedback"
      >
        <div
          class="
            flex
            items-end
            justify-center
            min-h-screen
            pt-4
            px-4
            pb-20
            text-center
            sm:block sm:p-0
          "
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="
                inline-block
                align-bottom
                bg-white
                rounded-lg
                px-4
                pt-5
                pb-4
                text-left
                overflow-hidden
                shadow-xl
                transform
                transition-all
                sm:my-8 sm:align-middle sm:max-w-lg sm:w-full sm:p-6
              "
            >
              <div>
                <div
                  class="
                    mx-auto
                    flex
                    items-center
                    justify-center
                    h-12
                    w-12
                    rounded-full
                    bg-prgreen-100
                  "
                >
                  <QuestionMarkCircleIcon
                    class="h-6 w-6 text-prgreen-600"
                    aria-hidden="true"
                  />
                </div>
                <div class="mt-3 sm:mt-5">
                  <DialogTitle
                    as="h3"
                    class="
                      text-center text-lg
                      leading-6
                      font-medium
                      text-gray-900
                    "
                  >
                    FeedBack
                  </DialogTitle>
                  <form
                    class="space-y-8 divide-y divide-gray-200 w-full"
                    method="post"
                    autocomplete="on"
                  >
                    <div
                      class="
                        space-y-8
                        divide-y
                        max-w-7xl
                        mx-auto
                        px-4
                        sm:px-6
                        lg:px-8
                      "
                    >
                      <div class="pt-8 space-y-6 sm:pt-10 sm:space-y-5">
                        <div class="space-y-6 sm:space-y-5">
                          <div class="-gray-300 rounded-lg -sm overflow-hidden">
                            <label
                              for="title"
                              class="
                                block
                                text-sm
                                font-medium
                                text-black
                                sm:mt-px sm:pt-2
                              "
                            >
                              Name
                            </label>

                            <div class="mt-1 relative rounded-md -sm">
                              <input
                                v-model="name"
                                type="text"
                                name="name"
                                id="name"
                                autocomplete="on"
                                :class="[
                                  nameErrorMessage
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
                                  v-if="nameErrorMessage"
                                />
                              </div>
                            </div>

                            <p
                              v-if="nameErrorMessage"
                              class="mt-2 text-sm text-red-600"
                              id="email-error"
                            >
                              {{ nameErrorMessage }}
                            </p>
                          </div>
                          <div class="-gray-300 rounded-lg -sm overflow-hidden">
                            <label
                              for="email"
                              class="
                                block
                                text-sm
                                font-medium
                                text-black
                                sm:mt-px sm:pt-2
                              "
                            >
                              Email
                            </label>

                            <div class="mt-1 relative rounded-md -sm">
                              <input
                                v-model="email"
                                type="text"
                                name="email"
                                id="email"
                                autocomplete="on"
                                :class="[
                                  emailErrorMessage
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
                                  v-if="emailErrorMessage"
                                />
                              </div>
                            </div>

                            <p
                              v-if="emailErrorMessage"
                              class="mt-2 text-sm text-red-600"
                              id="email-error"
                            >
                              {{ emailErrorMessage }}
                            </p>
                          </div>
                          <div class="-gray-300 rounded-lg -sm overflow-hidden">
                            <label
                              for="phone"
                              class="
                                block
                                text-sm
                                font-medium
                                text-black
                                sm:mt-px sm:pt-2
                              "
                            >
                              Phone
                            </label>

                            <div class="mt-1 relative rounded-md -sm">
                              <input
                                v-model="phone"
                                type="text"
                                name="phone"
                                id="phone"
                                autocomplete="on"
                                :class="[
                                  phoneErrorMessage
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
                                  v-if="phoneErrorMessage"
                                />
                              </div>
                            </div>

                            <p
                              v-if="phoneErrorMessage"
                              class="mt-2 text-sm text-red-600"
                              id="email-error"
                            >
                              {{ phoneErrorMessage }}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div class="flex items-start space-x-4 pb-">
                        <div class="min-w-0 flex-1">
                          <div action="#" class="relative">
                            <div
                              class="-gray-300 rounded-lg -sm overflow-hidden"
                            >
                              <label
                                for="message"
                                class="
                                  block
                                  text-sm
                                  font-medium
                                  text-black
                                  sm:mt-px sm:pt-2
                                "
                              >
                                Message
                              </label>
                              <textarea
                                autocomplete="on"
                                v-model="message"
                                rows="3"
                                name="message"
                                id="message"
                                :class="[
                                  messageErrorMessage
                                    ? 'block w-full py-3 h-40 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-red-300 rounded-md-sm placeholder-red-400 text-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500'
                                    : ' block w-full py-3 h-40 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-gray-300 rounded-md-sm placeholder-gray-400 focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500',
                                ]"
                                placeholder="Add your message..."
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
                                  v-if="messageErrorMessage"
                                />
                              </div>
                            </div>
                            <p
                              v-if="messageErrorMessage"
                              class="mt-2 text-sm text-red-600"
                              id="email-error"
                            >
                              {{ messageErrorMessage }}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div
                class="
                  mt-5
                  sm:mt-6 sm:grid sm:grid-cols-2 sm:gap-3 sm:grid-flow-row-dense
                "
              >
                <button
                  type="button"
                  class="
                    w-full
                    inline-flex
                    justify-center
                    rounded-md
                    border border-transparent
                    shadow-sm
                    px-4
                    py-2
                    bg-prgreen-600
                    text-base
                    font-medium
                    text-white
                    hover:bg-prgreen-700
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                    sm:col-start-2 sm:text-sm
                  "
                  @click="postFeedback"
                >
                  Post
                </button>
                <button
                  type="button"
                  class="
                    mt-3
                    w-full
                    inline-flex
                    justify-center
                    rounded-md
                    border border-gray-300
                    shadow-sm
                    px-4
                    py-2
                    bg-white
                    text-base
                    font-medium
                    text-gray-700
                    hover:bg-gray-50
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                    sm:mt-0 sm:col-start-1 sm:text-sm
                  "
                  @click="toggleFeedback"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import { useField } from "vee-validate";
import * as yup from "yup";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";

import { computed } from "vue";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { QuestionMarkCircleIcon } from "@heroicons/vue/outline";
import { useStore } from 'vuex';

export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    QuestionMarkCircleIcon,
    ExclamationCircleIcon
  },
  setup() {
    let nameValidation = yup.string().required("Name is required");
    let emailValidation = yup.string().email("Email is invalid");
let store = useStore();
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    let phoneValidation = yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid");

    let messageValidation = yup
      .string()
      .min(10)
      .max(500)
      .required("Message is required");
    const { value: name, errorMessage: nameErrorMessage } = useField(
      "name",
      nameValidation
    );
    const { value: email, errorMessage: emailErrorMessage } = useField(
      "email",
      emailValidation
    );
    const { value: phone, errorMessage: phoneErrorMessage } = useField(
      "phone",
      phoneValidation
    );
    const { value: message, errorMessage: messageErrorMessage } = useField(
      "message",
      messageValidation
    );
    let postFeedback = () => {
      let payload = {
        name: name.value,
        email: email.value,
        phone: phone.value,
        message: message.value,
      }
      store.dispatch('FeedBack/postFeedBack', payload);
    };

let toggleFeedback = () => {
        store.dispatch('FeedBack/toggleFeedBack');
}
let open = computed(()=>store.getters['FeedBack/open'])
    return {
      open,
      name,
      email,
      phone,
      message,
      nameErrorMessage,
      emailErrorMessage,
      phoneErrorMessage,
      messageErrorMessage,
      postFeedback,
      toggleFeedback
    };
  },
};
</script>
