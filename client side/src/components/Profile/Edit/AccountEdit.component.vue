<template>
  <form
    class="divide-y divide-gray-200 lg:col-span-9"
    action="#"
    @submit.prevent="updateUser"
  >
    <div class="pt-6 divide-y divide-gray-200">
      <div class="px-4 sm:px-6">
        <div>
          <h2 class="text-lg leading-6 font-medium text-gray-900">Account</h2>
          <p class="mt-1 text-sm text-gray-500">
            General account settings
          </p>
        </div>
        <ul role="list" class="mt-2 divide-y divide-gray-200">
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                                Available to hire

              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                If you are available to hire, you will be visible to employers
                and other candidates.
              </SwitchDescription>
            </div>
            <Switch
              v-model="availableToHire"
              :class="[
                availableToHire ? 'bg-prgreen-600' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prgreen-500',
              ]"
            >
              <span
                aria-hidden="true"
                :class="[
                  availableToHire ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                Handyman
              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                Let employers know you are a handyman
              </SwitchDescription>
            </div>
            <Switch
              v-model="Handyman"
              :class="[
                Handyman ? 'bg-prgreen-600' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prgreen-500',
              ]"
            >
              <span
                aria-hidden="true"
                :class="[
                  Handyman ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
          <SwitchGroup as="li" class="py-4 flex items-center justify-between">
            <div class="flex flex-col">
              <SwitchLabel
                as="p"
                class="text-sm font-medium text-gray-900"
                passive
              >
                Online
              </SwitchLabel>
              <SwitchDescription class="text-sm text-gray-500">
                let other know you are online
              </SwitchDescription>
            </div>
            <Switch
              v-model="Online"
              :class="[
                Online ? 'bg-prgreen-600' : 'bg-gray-200',
                'ml-4 relative inline-flex flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-prgreen-500',
              ]"
            >
              <span
                aria-hidden="true"
                :class="[
                  Online ? 'translate-x-5' : 'translate-x-0',
                  'inline-block h-5 w-5 rounded-full bg-white shadow transform ring-0 transition ease-in-out duration-200',
                ]"
              />
            </Switch>
          </SwitchGroup>
          <div class="bg-white">
            <div class="px-4 py-5 sm:p-6">
              <h3 class="text-lg leading-6 font-medium text-gray-900">
                Delete your account
              </h3>
              <div class="mt-2 max-w-xl text-sm text-gray-500">
                <p>
                  Once you delete your account, you will lose all data
                  associated with it.
                </p>
              </div>
              <div class="mt-5 flex justify-end">
                <button
                  type="button"
                  class="
                    inline-flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    border border-transparent
                    font-medium
                    rounded-md
                    text-red-700
                    bg-red-100
                    hover:bg-red-200
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-red-500
                    sm:text-sm
                  "
                  @click="openDeleteAcoountModal"
                >
                  Delete account
                </button>
                <div>
                  <TransitionRoot as="template" :show="open">
                    <Dialog
                      as="div"
                      class="fixed z-10 inset-0 overflow-y-auto"
                      @close="open = false"
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
                            class="
                              fixed
                              inset-0
                              bg-gray-500 bg-opacity-75
                              transition-opacity
                            "
                          />
                        </TransitionChild>

                        <!-- This element is to trick the browser into centering the modal contents. -->
                        <span
                          class="
                            hidden
                            sm:inline-block sm:align-middle sm:h-screen
                          "
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
                              sm:my-8
                              sm:align-middle
                              sm:max-w-lg
                              sm:w-full
                              sm:p-6
                            "
                          >
                            <div class="sm:flex sm:items-start">
                              <div
                                class="
                                  mx-auto
                                  flex-shrink-0 flex
                                  items-center
                                  justify-center
                                  h-12
                                  w-12
                                  rounded-full
                                  bg-red-100
                                  sm:mx-0 sm:h-10 sm:w-10
                                "
                              >
                                <ExclamationIcon
                                  class="h-6 w-6 text-red-600"
                                  aria-hidden="true"
                                />
                              </div>
                              <div
                                class="
                                  mt-3
                                  text-center
                                  sm:mt-0 sm:ml-4 sm:text-left
                                "
                              >
                                <DialogTitle
                                  as="h3"
                                  class="
                                    text-lg
                                    leading-6
                                    font-medium
                                    text-gray-900
                                  "
                                >
                                  Delete account
                                </DialogTitle>
                                <div class="mt-2">
                                  <p class="text-sm text-gray-500">
                                    Are you sure you want to delete your
                                    account? All of your data will be
                                    permanently removed from our servers
                                    forever. This action cannot be undone.
                                  </p>
                                </div>
                              </div>
                            </div>
                            <div
                              class="mt-5 sm:mt-4 sm:flex sm:flex-row-reverse"
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
                                  bg-red-600
                                  text-base
                                  font-medium
                                  text-white
                                  hover:bg-red-700
                                  focus:outline-none
                                  focus:ring-2
                                  focus:ring-offset-2
                                  focus:ring-red-500
                                  sm:ml-3 sm:w-auto sm:text-sm
                                "
                                @click="deleteUserAccount"
                              >
                                Delete
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
                                  sm:mt-0 sm:w-auto sm:text-sm
                                "
                                @click="open = false"
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
              </div>
            </div>
          </div>
        </ul>
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
            px-20
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
          Save
        </button>
      </div>
    </div>
  </form>
</template>

<script>
import { onMounted, computed, ref } from "vue";
import AuthService from "@/services/AuthService";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import { ExclamationIcon } from "@heroicons/vue/outline";
import UserService from "@/services/UserService";
import {
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
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
  components: {
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
    ExclamationIcon,
  },
  setup() {
    const availableToHire = ref(false);
    const Handyman = ref(false);
    const Online = ref(false);
    const store = useStore();
    const authUser = computed(() => store.getters["auth/authUser"]);
    const open = ref(false);
    let router = useRouter();

    const openDeleteAcoountModal = () => {
      open.value = true;
    };

    onMounted(() => {
      availableToHire.value = authUser.value.is_available_to_hire;
      Handyman.value = authUser.value.isHandyman;
      Online.value = authUser.value.is_online;
    });

    const updateUser = () => {
      const payload = {
        is_available_to_hire: availableToHire.value,
        is_handyman: Handyman.value,
        is_online: Online.value,
        name: authUser.value.name,
        email: authUser.value.email,
        is_admin: authUser.value.isAdmin,
        is_moderator: authUser.value.isModerator,

        username: authUser.value.username,
        bio: authUser.value.bio,
        date_of_birth: authUser.value.date_of_birth,
        phone_number: authUser.value.phone_number,
        address: authUser.value.address,
        country: authUser.value.country,
        city: authUser.value.city,
        state: authUser.value.state,
        zip_code: authUser.value.zip_code,
        website: authUser.value.website,
        education: authUser.value.education,
        certifications: authUser.value.certifications,
        gender: authUser.value.gender,
        facebook_social_link: authUser.value.facebook_social_link,
        linkedin_social_link: authUser.value.linkedin_social_link,
        twitter_social_link: authUser.value.twitter_social_link,
        experience: authUser.value.experience,
        skills: authUser.value.skills,
        work_time_length: authUser.value.work_time_length,
        work_hours: authUser.value.work_hours,
        work_place: authUser.value.work_place,
        salary: authUser.value.salary,
      };

      AuthService.updateUser(payload)
        .then(() => store.dispatch("auth/getAuthUser"))
        .then(() => console.log("User updated."))
        .catch(() => console.log(payload))
        .then(() => router.push("/profile"));
    };

    const deleteUserAccount = () => {
      let userId = authUser.value.id;
      UserService.deleteUser(userId)
        .then(() => store.dispatch("auth/logout"))
        .then(() => console.log("User deleted."))
        .catch(() => console.log(userId));
    };
    return {
      user,

      availableToHire,
      Handyman,
      Online,
      updateUser,
      openDeleteAcoountModal,
      open,
      deleteUserAccount,
    };
  },
};
</script>
