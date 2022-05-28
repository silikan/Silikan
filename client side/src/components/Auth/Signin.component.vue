<template>
  <div class="">
    <div class="min-h-full flex">
      <div class="flex flex-col justify-center py-12 px-4 flex-1">
        <div class="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <img
              class="h-10 w-auto"
              src="@/assets/Logos/full-green.svg"
              alt="Silikan"
            />
            <h2
              class="mt-6 text-3xl font-extrabold text-gray-900 dark:text-white"
            >
              Sign in to your account
            </h2>
            <p class="mt-2 text-sm text-gray-600 dark:text-white">
              Or
              {{ " " }}
              <router-link
                to="/signup"
                class="font-medium text-prgreen-600 hover:text-prgreen-500"
              >
                Create a New Account
              </router-link>
            </p>
          </div>

          <div class="mt-8">
            <div>
              <div>
                <p
                  class="text-sm font-medium text-gray-700 dark:text-white"
                >
                  Sign in with
                </p>

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

              <div class="mt-6 relative">
                <div
                  class="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div class="w-full border-t border-gray-300" />
                </div>
                <div class="relative flex justify-center text-sm">
                  <span class="px-2 bg-white text-gray-500 dark:bg-prblue-500 dark:font-bold">
                    Or continue with
                  </span>
                </div>
              </div>
            </div>

            <div class="mt-6">
              <form
                action="#"
                method="POST"
                class="space-y-6"
                @submit.prevent="login()"
              >
                <div>
                  <label
                    for="email"
                    class="
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      dark:text-white
                    "
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
                  <p
                    v-if="errorData.email"
                    class="mt-2 text-sm text-red-600"
                    id="email-error"
                  >
                    {{ errorData.email[0] }}
                  </p>
                </div>

                <div class="space-y-1">
                  <label
                    for="password"
                    class="
                      block
                      text-sm
                      font-medium
                      text-gray-700
                      dark:text-white
                    "
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
                        errorData.email
                          ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  shadow-smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                          : 'dark:bg-prblue-500 block w-full px-3 py-2 border border-gray-300 rounded-md  shadow-smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
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
                  <p
                    v-if="errorData.email"
                    class="mt-2 text-sm text-red-600"
                    id="email-error"
                  >
                    {{ errorData.email[0] }}
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
                      "
                    />
                    <label
                      for="remember-me"
                      class="ml-2 block text-sm text-gray-900 dark:text-white"
                    >
                      Remember me
                    </label>
                  </div>

                  <router-link class="text-sm" :to="'/forgot-password'">
                    <a
                      href="#"
                      class="
                        font-medium
                        text-prgreen-600
                        hover:text-prgreen-500
                      "
                    >
                      Forgot your password?
                    </a>
                  </router-link>
                </div>

                <div>
                  <button
                    v-if="loading == false"
                    type="submit"
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
                    Sign in
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
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="hidden lg:flex w-full flex-1 justify-center items-center">
        <img
          class="self-center mr-10"
          src="@\assets\undraw_safe_re_kiil.svg "
          alt=""
        />
      </div>
    </div>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService";
import { getError } from "@/utils/helpers";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";

import ErrorMessage from "@/components/Alerts/ErrorMessage.componenet.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref } from "vue";

export default {
  components: {
    ErrorMessage,
    ExclamationCircleIcon,
  },
  setup() {
    let email;
    let password;

    let google = `${process.env.VUE_APP_API_URL}/social/google`;
    let facebook = `${process.env.VUE_APP_API_URL}/social/facebook`;
    let linkedin = `${process.env.VUE_APP_API_URL}/social/linkedin`;

    email = ref("");
    password = ref("");
    let loading = ref(false);
    const store = useStore();
    const router = useRouter();

    let errorData = ref("");
    let errorMessage = ref("");

    const login = async () => {
      store.dispatch("Loading/changeLoading", loading.value);

      loading.value = store.getters["Loading/loading"];
      const payload = {
        email: email.value,
        password: password.value,
      };
      try {
        await AuthService.login(payload);
        const authUser = await store.dispatch("auth/getAuthUser");
        if (authUser) {
          store.dispatch("auth/setGuest", { value: "isNotGuest" });
          store.dispatch("Loading/changeLoading", loading.value);

          loading.value = store.getters["Loading/loading"];
          router.push("/profile");
        } else {
          store.dispatch("Loading/changeLoading", loading.value);

          loading.value = store.getters["Loading/loading"];
          /*
          const error = Error(
            "Unable to fetch user after login, check your API settings."
          );
          error.name = "Fetch User";
          throw error; */
        }
      } catch (err) {
        console.log(err);
        store.dispatch("Loading/changeLoading", loading.value);

        loading.value = store.getters["Loading/loading"];

        errorData.value = getError(err);
        console.log(errorData.value);
      }
    };

    return {
      email,
      password,
      errorData,
      login,
      google,
      facebook,
      linkedin,
      loading,
      errorMessage,
    };
  },
};
</script>

<style></style>
