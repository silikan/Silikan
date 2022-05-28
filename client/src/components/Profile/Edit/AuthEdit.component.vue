<template>
  <div class="divide-y divide-gray-200 lg:col-span-9">
    <form
      v-if="isEmailVerified == null"
      class="divide-y divide-gray-200 lg:col-span-9"
      action="#"
      method="POST"
      @submit.prevent="sendVerification"
    >
      <!-- Privacy section -->
      <div class="pt-6 divide-gray-200">
        <div class="px-4 sm:px-6">
          <div>
            <h2 class="text-lg leading-6 font-medium text-gray-900">
              Verify Email
            </h2>
            <p class="mt-1 text-sm text-gray-500">
              verify your email address and get verified badge
            </p>
          </div>
        </div>
        <div class="mt-4 py-4 px-4 flex justify-end sm:px-6">
          <button
            type="submit"
            class="
              ml-5
              bg-prgreen-700
              border border-transparent
              rounded-md
              shadow-sm
              py-2
              px-12
              inline-flex
              justify-center
              text-sm
              font-medium
              text-white
              hover:bg-prgreen-800
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-prgreen-500
            "
          >
            Verify Email
          </button>
        </div>
      </div>
    </form>
   <form
      v-if="password_is_null === true"
      class="divide-y divide-gray-200 lg:col-span-9"
      action="#"
      method="POST"
      @submit.prevent="updatePassword"
    >
      <!-- Privacy section -->
      <div class="pt-6 divide-y divide-gray-200">
        <div class="px-4 sm:px-6">
          <div>
            <h2 class="text-lg leading-6 font-medium text-gray-900">
              Change Oath Password
            </h2>
            <p class="mt-1 text-sm text-gray-500">
              change your password
            </p>
          </div>

          <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 sm:px-10">
              <form class="space-y-6" action="#" method="POST">


                <div>
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    New Password
                  </label>
                  <div class="mt-1">
                    <input
                      id="password"
                      v-model="password"
                      name="password"
                      type="password"
                      autocomplete="password"
                      required
                      class="
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
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="confirm-password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div class="mt-1">
                    <input
                      id="confirm-password"
                      v-model="passwordConfirm"
                      name="confirm-password"
                      type="password"
                      autocomplete="current-password"
                      required
                      class="
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
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="mt-4 py-4 px-4 flex justify-end sm:px-6">
          <button
            type="submit"
            class="
              ml-5
              bg-prgreen-700
              border border-transparent
              rounded-md
              shadow-sm
              py-2
              px-10
              inline-flex
              justify-center
              text-sm
              font-medium
              text-white
              hover:bg-prgreen-800
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-prgreen-500
            "
          >
            Change Password
          </button>
        </div>
      </div>
    </form>
    <form
      v-if="password_is_null === false"
      class="divide-y divide-gray-200 lg:col-span-9"
      action="#"
      method="POST"
      @submit.prevent="updatePassword"
    >
      <!-- Privacy section -->
      <div class="pt-6 divide-y divide-gray-200">
        <div class="px-4 sm:px-6">
          <div>
            <h2 class="text-lg leading-6 font-medium text-gray-900">
              Change Password
            </h2>
            <p class="mt-1 text-sm text-gray-500">
              Ornare eu a volutpat eget vulputate. Fringilla commodo amet.
            </p>
          </div>

          <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div class="bg-white py-8 px-4 sm:px-10">
              <form class="space-y-6" action="#" method="POST">
                <div>
                  <label
                    for="current-password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Current Password
                  </label>
                  <div class="mt-1">
                    <input
                      id="current-password"
                      v-model="currentPassword"
                      name="current-password"
                      type="password"
                      autocomplete="current-password"
                      required
                      class="
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
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    New Password
                  </label>
                  <div class="mt-1">
                    <input
                      id="password"
                      v-model="password"
                      name="password"
                      type="password"
                      autocomplete="password"
                      required
                      class="
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
                    />
                  </div>
                </div>

                <div>
                  <label
                    for="confirm-password"
                    class="block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <div class="mt-1">
                    <input
                      id="confirm-password"
                      v-model="passwordConfirm"
                      name="confirm-password"
                      type="password"
                      autocomplete="current-password"
                      required
                      class="
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
                    />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div class="mt-4 py-4 px-4 flex justify-end sm:px-6">
          <button
            type="submit"
            class="
              ml-5
              bg-prgreen-700
              border border-transparent
              rounded-md
              shadow-sm
              py-2
              px-10
              inline-flex
              justify-center
              text-sm
              font-medium
              text-white
              hover:bg-prgreen-800
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-prgreen-500
            "
          >
            Change Password
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";
import AuthService from "@/services/AuthService";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};

export default {
  components: {},
  setup() {
    const availableToHire = ref(true);
    const privateAccount = ref(false);
    const allowCommenting = ref(true);
    const allowMentions = ref(true);
    let router = useRouter();

    let currentPassword;
    let password;
    let passwordConfirm;
    currentPassword = ref("");
    password = ref("");
    passwordConfirm = ref("");

    const updatePassword = () => {
      const payload = {
        current_password: currentPassword.value,
        password: password.value,
        password_confirmation: passwordConfirm.value,
      };
      AuthService.updatePassword(payload)
        .then(() => console.log("Password updated."))
        .catch((error) => console.log(error))
        .then(() => router.push("/profile")) ;
    };

    const store = useStore();

    let authUser  = reactive("")

    authUser = computed(() => store.getters["auth/authUser"]);
    const sendVerification = () => {
      const payload = {
        user: authUser.value.id,
      };
      AuthService.sendVerification(payload)
        .then(() => console.log("Verification email sent."))
        .catch((error) => console.log(error));
    };
    console.log(authUser.value.email);
    const forgotPassword = () => {
      const payload = {
        email: authUser.value.email,
      };

      AuthService.forgotPassword(payload).then(() =>
        console.log("Reset password email sent.")
      );
    };
    const isEmailVerified = computed(() => store.getters["auth/emailVerified"]);
    const password_is_null = computed(
      () => store.getters["auth/password_is_null"]
    );
    return {
      user,

      availableToHire,
      privateAccount,
      allowCommenting,
      allowMentions,
      currentPassword,
      password,
      passwordConfirm,
      updatePassword,
      sendVerification,
      authUser,
      isEmailVerified,
      password_is_null,
      forgotPassword,
    };
  },
};
</script>
