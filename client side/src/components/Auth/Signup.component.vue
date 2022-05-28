<template>
  <div class="min-h-full flex ">
    <div class="hidden lg:flex w-full flex-1 justify-center items-center">
      <img
        class="self-center ml-10"
        src="@\assets\undraw_fingerprint_re_uf3f.svg"
        alt=""
      />
    </div>
    <div class="flex flex-col justify-center py-12 px-4 flex-1">
      <div class="mx-auto w-full max-w-sm lg:w-96">
        <div>
                   <img
              class="h-10 w-auto"
              src="@/assets/Logos/full-green.svg"
              alt="Silikan"
            />
          <h2 class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white">
            Create a New Account
          </h2>
          <p class="mt-2 text-sm text-gray-600 dark:text-white">
            Or
            {{ " " }}
            <router-link
              to="/signin"
              class="font-medium text-prgreen-600 hover:text-prgreen-500"
            >
              Signin To Your Account
            </router-link>
          </p>
        </div>
        <div class="flex justify-center m-10">
          <nav aria-label="Progress">
            <ol role="list" class="flex items-center">
              <li
                v-for="(step, stepIdx) in steps"
                :key="step.name"
                :class="[
                  stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : '',
                  'relative',
                ]"
              >
                <template v-if="step.status === 'complete'">
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="h-0.5 w-full bg-prgreen-600" />
                  </div>
                  <a
                    href="#"
                    class="
                      relative
                      w-8
                      h-8
                      flex
                      items-center
                      justify-center
                      bg-prgreen-600
                      rounded-full
                      hover:bg-prgreen-900
                    "
                  >
                    <CheckIcon class="w-5 h-5 text-white" aria-hidden="true" />
                    <span class="sr-only">{{ step.name }}</span>
                  </a>
                </template>
                <template
                  v-else-if="step.status === 'current'"
                  condition="step.status === 'current'"
                >
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="h-0.5 w-full bg-gray-200 " />
                  </div>
                  <a
                    href="#"
                    class="
                      relative
                      w-8
                      h-8
                      flex
                      items-center
                      justify-center
                      bg-white
                      dark:bg-prblue-500
                      border-2 border-prgreen-600
                      rounded-full
                    "
                    aria-current="step"
                  >
                    <span
                      class="h-2.5 w-2.5 bg-prgreen-600 rounded-full"
                      aria-hidden="true"
                    />
                    <span class="sr-only">{{ step.name }}</span>
                  </a>
                </template>
                <template v-else>
                  <div
                    class="absolute inset-0 flex items-center"
                    aria-hidden="true"
                  >
                    <div class="h-0.5 w-full bg-gray-200" />
                  </div>
                  <a
                    href="#"
                    class="
                      group
                      relative
                      w-8
                      h-8
                      flex
                      items-center
                      justify-center
                      bg-white
                      border-2 border-gray-300
                      rounded-full
                      hover:border-gray-400
                    "
                  >
                    <span
                      class="
                        h-2.5
                        w-2.5
                        bg-transparent
                        rounded-full
                        group-hover:bg-gray-300
                      "
                      aria-hidden="true"
                    />
                    <span class="sr-only">{{ step.name }}</span>
                  </a>
                </template>
              </li>
            </ol>
          </nav>
        </div>
        <div class="mt-8">
          <RadioGroup v-if="steps[0].status == 'current'" v-model="selected">
            <RadioGroupLabel class="sr-only"> Privacy setting </RadioGroupLabel>
            <div class="bg-white rounded-md -space-y-px">
              <RadioGroupOption
                v-for="(setting, settingIdx) in Roles"
                :key="setting.name"
                v-slot="{ checked, active }"
                as="template"
                :value="setting"
              >
                <div
                  :class="[
                    settingIdx === 0 ? 'rounded-tl-md rounded-tr-md' : '',
                    settingIdx === Roles.length - 1
                      ? 'rounded-bl-md rounded-br-md'
                      : '',
                    checked
                      ? 'bg-prgreen-50 border-prgreen-200 z-10 '
                      : 'border-gray-200 dark:bg-prblue-500 ',
                    'relative border p-4 flex cursor-pointer focus:outline-none',
                  ]"
                >
                  <span
                    :class="[
                      checked
                        ? 'bg-prgreen-600 border-transparent'
                        : 'bg-white border-gray-300',
                      active ? 'ring-2 ring-offset-2 ring-prgreen-500' : '',
                      'h-4 w-4 mt-0.5 cursor-pointer rounded-full border flex items-center justify-center',
                    ]"
                    aria-hidden="true"
                  >
                    <span class="rounded-full bg-white w-1.5 h-1.5" />
                  </span>
                  <div class="ml-3 flex flex-col">
                    <RadioGroupLabel
                      as="span"
                      :class="[
                        checked ? 'text-prgreen-900' : 'text-gray-900 dark:text-white',
                        'block text-sm font-medium',
                      ]"
                    >
                      {{ setting.name }}
                    </RadioGroupLabel>
                    <RadioGroupDescription
                      as="span"
                      :class="[
                        checked ? 'text-prgreen-700' : 'text-gray-500 ',
                        'block text-sm',
                      ]"
                    >
                      {{ setting.description }}
                    </RadioGroupDescription>
                  </div>
                </div>
              </RadioGroupOption>
            </div>
          </RadioGroup>
          <button
            @click="StepsNext"
            v-if="steps[0].status == 'current' && steps[1].status == 'upnext'"
            class="
              mt-5
              w-full
              flex
              justify-center
              py-2
              px-4
              border border-transparent
              rounded-md
              shadow-sm
              text-sm
              font-medium
              text-white
              bg-prgreen-600
              hover:bg-prgreen-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-prgreen-500
            "
          >
            Next
          </button>
          <div v-if="steps[1].status == 'current'" class="signup">
            <div>
              <p class="text-sm font-medium text-gray-700 dark:text-white">Sign up with</p>

               <div class="mt-1 grid grid-cols-3 gap-3">
                  <div>
                    <a
                      :href="facebook"
                      class="
                        w-full
                        inline-flex
                        justify-center
                        py-2
                        px-4
                        border border-gray-300
                        rounded-md
                        shadow-sm
                        bg-white
                        dark:bg-prblue-500
                        text-sm
                        font-medium
                        text-gray-500
                        hover:bg-gray-50
                      "
                    >
                      <span class="sr-only">Sign in with Facebook</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"
                        />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a
                      :href="linkedin"
                      class="
                        w-full
                        inline-flex
                        justify-center
                        py-2
                        px-4
                        border border-gray-300
                        dark:bg-prblue-500
                        rounded-md
                        shadow-sm
                        bg-white
                        text-sm
                        font-medium
                        text-gray-500
                        hover:bg-gray-50
                      "
                    >
                      <span class="sr-only">Sign in with Linkedin</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"
                        />
                      </svg>
                    </a>
                  </div>

                  <div>
                    <a
                      :href="google"
                      class="
                        w-full
                        inline-flex
                        justify-center
                        py-2
                        px-4
                        border border-gray-300
                        dark:bg-prblue-500
                        rounded-md
                        shadow-sm
                        bg-white
                        text-sm
                        font-medium
                        text-gray-500
                        hover:bg-gray-50
                      "
                    >
                      <span class="sr-only">Sign in with Google</span>
                      <svg
                        class="w-5 h-5"
                        aria-hidden="true"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        viewBox="0 0 48 48"
                      >
                        <defs>
                          <path
                            id="a"
                            d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                          />
                        </defs>
                        <clipPath id="b">
                          <use xlink:href="#a" overflow="visible" />
                        </clipPath>
                        <path
                          clip-path="url(#b)"
                          fill="currentColor"
                          d="M0 37V11l17 13z"
                        />
                        <path
                          clip-path="url(#b)"
                          fill="currentColor"
                          d="M0 11l17 13 7-6.1L48 14V0H0z"
                        />
                        <path
                          clip-path="url(#b)"
                          fill="currentColor"
                          d="M0 37l30-23 7.9 1L48 0v48H0z"
                        />
                        <path
                          clip-path="url(#b)"
                          fill="currentColor"
                          d="M48 48L17 24l-4-3 35-10z"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
            </div>

            <div class="mt-6">
              <form
                action="#"
                method="POST"
                class="space-y-6"
                @submit.prevent="registerUser"
              >
                <div>
                  <label
                    for="name"
                    class="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    name
                  </label>
    <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="name"
                      v-model="name"
                      name="name"
                      type="name"
                      autocomplete="name"
                      required=""
                     :class="[
                        errorData.name
                          ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  shadow-smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                          : ' block w-full px-3 py-2 border border-gray-300 rounded-md  shadow-smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
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
                        v-if="errorData.name"
                      />
                    </div>
                  </div>
                  <p v-if="errorData.name" class="mt-2 text-sm text-red-600" id="email-error">
                   {{errorData.name[0]}}
                  </p>
                </div>
                     <div>
                  <label
                    for="username"
                    class="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    username
                  </label>
    <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="username"
                      v-model="username"
                      name="username"
                      type="username"
                      autocomplete="username"
                      required=""
                     :class="[
                        errorData.username
                          ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  shadow-smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                          : ' block w-full px-3 py-2 border border-gray-300 rounded-md  shadow-smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
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
                        v-if="errorData.username"
                      />
                    </div>
                  </div>
                  <p v-if="errorData.username" class="mt-2 text-sm text-red-600" id="email-error">
                   {{errorData.username[0]}}
                  </p>
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Email address
                  </label>
    <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="email"
                      v-model="email"
                      name="email"
                      type="email"
                      autocomplete="email"
                      required=""
                      :class="[
                        errorData.email
                          ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  shadow-smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                          : ' block w-full px-3 py-2 border border-gray-300 rounded-md  shadow-smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
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
                        v-if="errorData.email"
                      />
                    </div>
                  </div>
                  <p v-if="errorData.email" class="mt-2 text-sm text-red-600" id="email-error">
                   {{errorData.email[0]}}
                  </p>
                </div>

                <div class="space-y-1">
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    Password
                  </label>
    <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="password"
                      v-model="password"
                      name="password"
                      type="password"
                      autocomplete="current-password"
                      required=""
                    :class="[
                        errorData.password
                          ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  shadow-smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                          : ' block w-full px-3 py-2 border border-gray-300 rounded-md  shadow-smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
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
                        v-if="errorData.password"
                      />
                    </div>
                  </div>
                  <p v-if="errorData.email" class="mt-2 text-sm text-red-600" id="email-error">
                   {{errorData.password[0]}}
                  </p>
                </div>
                <div class="space-y-1">
                  <label
                    for="confirm password"
                    class="block text-sm font-medium text-gray-700 dark:text-white"
                  >
                    confirm Password
                  </label>
    <div class="mt-1 relative rounded-md shadow-sm">
                    <input
                      id="confirm password"
                      v-model="passwordConfirm"
                      name="confirm password"
                      type="password"
                      autocomplete="confirm password"
                      required=""
                   :class="[
                        errorData.password
                          ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  shadow-smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                          : ' block w-full px-3 py-2 border border-gray-300 rounded-md  shadow-smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
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
                        v-if="errorData.password"
                      />
                    </div>
                  </div>
                  <p v-if="errorData.email" class="mt-2 text-sm text-red-600" id="email-error">
                   {{errorData.password[0]}}
                  </p>
                </div>
                <ErrorMessage :errorData="errorData" />

                <div class="flex items-center justify-between">
                  <div class="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      class="
                        h-4
                        w-4
                        text-prgreen-600
                        focus:ring-prgreen-500
                        border-gray-300
                        rounded
                        dark:text-white
                      "
                    />
                    <label
                      for="remember-me"
                      class="ml-2 block text-sm text-gray-900 dark:text-white"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    v-if="
                      steps[0].status == 'complete' &&
                      steps[1].status == 'current' &&
                      loading == false
                    "
                    class="
                      w-full
                      flex
                      justify-center
                      py-2
                      px-4
                      border border-transparent
                      rounded-md
                      shadow-sm
                      text-sm
                      font-medium
                      text-white
                      bg-prgreen-600
                      hover:bg-prgreen-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-prgreen-500
                    "
                  >
                    sign up
                  </button>
                  <button
                    v-if="loading == true"
                    class="
                      w-full
                      flex
                      justify-center
                      py-2
                      px-4
                      border border-transparent
                      rounded-md
                      shadow-sm
                      text-sm
                      font-medium
                      text-white
                      bg-prgreen-600
                      hover:bg-prgreen-700
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-prgreen-500
                    "
                  >
                    <svg
                      class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        class="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        class="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  </button>
                  <button
                    @click.prevent="StepsPrev"
                    v-if="
                      steps[0].status == 'complete' &&
                      steps[1].status == 'current'
                    "
                    class="
                      w-full
                      mt-3
                      flex
                      justify-center
                      py-2
                      px-4
                      border
                      rounded-md
                      shadow-sm
                      text-sm
                      font-medium
                      text-black
                      bg-white
                      hover:border-transparent
                    "
                  >
                    Previous
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { CheckIcon, ExclamationCircleIcon } from "@heroicons/vue/solid";
import {
  RadioGroup,
  RadioGroupDescription,
  RadioGroupLabel,
  RadioGroupOption,
} from "@headlessui/vue";

import AuthService from "@/services/AuthService";
import { useRouter } from "vue-router";
import { reactive, ref } from "vue";
import { useStore } from "vuex";
import { getError } from "@/utils/helpers";

import ErrorMessage from "@/components/Alerts/ErrorMessage.componenet.vue";

const Roles = [
  {
    name: "Client",
    description: "The Default State Of Any Sillikan User",
  },
  {
    name: "Handyman",
    description: "U have a Skill? Monetize it ",
  },
];

export default {
  components: {
    CheckIcon,
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    ErrorMessage,
    ExclamationCircleIcon,
  },
  setup() {
    const steps = reactive([
      { name: "Role", href: "#", status: "current" },

      { name: "Signup", href: "#", status: "upnext" },
    ]);
    let errorData = ref("");
    let errorMessage = ref("");

    const selected = ref(Roles[0]);
    console.log(selected.value);
    let name;
    let email;
    let password;
    let passwordConfirm;
    let error = ref(null);
    let is_handyman, is_client;
    is_client = ref(true);
    is_handyman = ref(false);
    let username = ref("");

    name = ref("");
    email = ref("");
    password = ref("");
    let loading = ref(false);

    passwordConfirm = ref("");
    const router = useRouter();
    const store = useStore();
    const registerUser = () => {
      loading.value = true;
      if (selected.value.name == "Client") {
        is_client.value = true;
        is_handyman.value = false;
      } else {
        is_client.value = true;
        is_handyman.value = true;
      }

      console.log(is_handyman.value);

      error.value = null;
      const payload = {
        name: name.value,
        email: email.value,
        is_client: is_client.value,
        is_handyman: is_handyman.value,
        password: password.value,
        password_confirmation: passwordConfirm.value,
        username: username.value,
      };
      AuthService.registerUser(payload)
        .then(async () => {
          const authUser = await store.dispatch("auth/getAuthUser");
          if (authUser) {
            loading.value = false;

            store.dispatch("auth/setGuest", { value: "isNotGuest" });
            router.push("/profile");
          }
        })
        .catch((error) => {
          loading.value = false;

          errorData.value = getError(error);
          console.log(errorData.value);
        });
    };

    const StepsNext = () => {
      steps[0].status = "complete";
      steps[1].status = "current";
    };

    const StepsPrev = () => {
      steps[0].status = "current";
      steps[1].status = "upnext";
    };

    let google = `${process.env.VUE_APP_API_URL}/social/google`;
    let facebook = `${process.env.VUE_APP_API_URL}/social/facebook`;
    let linkedin = `${process.env.VUE_APP_API_URL}/social/linkedin`;

    return {
      steps,
      Roles,
      selected,
      name,
      email,
      password,
      passwordConfirm,
      error,
      registerUser,
      StepsNext,
      StepsPrev,
      google,
      facebook,
      linkedin,
      loading,
      errorMessage,
      errorData,

      is_handyman,
      is_client,
      username,
    };
  },
};
</script>
