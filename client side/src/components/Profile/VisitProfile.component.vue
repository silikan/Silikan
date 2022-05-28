<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div>
    <div>
      <img
        class="h-32 w-full object-cover lg:h-48"
        :src="profile.backgroundImage"
        alt=""
      />
    </div>
    <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
        <div class="flex justify-center items-center md:flex-none">
          <div
            class="h-40 w-40 rounded-full ring-4 ring-white sm:h-48 sm:w-48"
            aria-hidden="true"
          >
            <img
            referrerpolicy="no-referrer"
              class="h-40 w-40 rounded-full ring-4 ring-white sm:h-48 sm:w-48"
              :src="avatar_svg"
              v-if="avatarWithoutLocalhost === null"
              alt=""
            />
            <img
            referrerpolicy="no-referrer"
              class="h-40 w-40 rounded-full ring-4 ring-white sm:h-48 sm:w-48"
              :src="avatar"
              v-if="avatarWithoutLocalhost !== null"
              alt=""
            />
          </div>
        </div>
        <div
          class="
            mt-6
            sm:flex-1
            sm:min-w-0
            sm:flex
            sm:items-center
            sm:justify-end
            sm:space-x-6
            sm:pb-1
          "
        >
          <div class="mt-6 sm:ml-6 sm:flex-1">
            <div class="flex flex-col items-center sm:block">
              <div class="flex items-center sm:mt-6 min-w-0 flex-1">
                <h3 class="font-bold text-xl text-gray-900 sm:text-2xl">
                  {{ VisitUserData.name }}
                </h3>
                <span
                  v-if="VisitUserData.is_online === true"
                  class="
                    ml-2.5
                    bg-green-400
                    flex-shrink-0
                    inline-block
                    h-2
                    w-2
                    rounded-full
                  "
                >
                  <span class="sr-only">Online</span>
                </span>
                <span
                  v-if="VisitUserData.is_online === false"
                  class="
                    ml-2.5
                    bg-red-400
                    flex-shrink-0
                    inline-block
                    h-2
                    w-2
                    rounded-full
                  "
                >
                  <span class="sr-only">Offline</span>
                </span>
                    <span v-if="VisitUserData.emailVerified !== null">
                  <CheckCircleIcon
                    class="w-5 h-5 stroke-1 mr-3 text-blue-400"
                    aria-hidden="true"
                  />
                  <span class="sr-only">virified</span>
                </span>
              </div>
              <p
                class="text-sm text-gray-500"
                v-if="VisitUserData.username !== null"
              >
                @{{ VisitUserData.username }}
              </p>
              <div class="flex" v-if="VisitUserData.username === null">
                <div class="flex font-bold items-center text-prgreen-800">
                  <span class="">No Username</span>
                </div>
              </div>
            </div>
            <div
              class="mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3"
            >
              <ChatButton :UserId="id" />

              <span class="ml-3 inline-flex sm:ml-0">
                <Menu as="div" class="relative inline-block text-left w-full">
                  <MenuButton
                    class="
                      inline-flex
                      items-center
                      px-4
                      py-2
                      border border-gray-300
                      rounded-md
                      shadow-sm
                      text-sm
                      font-medium
                      text-gray-400
                      bg-white
                      hover:bg-gray-50
                      focus:outline-none
                      focus:ring-2
                      focus:ring-offset-2
                      focus:ring-prgreen-500
                    "
                  >
                    <span class="sr-only">Open options menu</span>
                    <DotsVerticalIcon class="h-5 w-5" aria-hidden="true" />
                  </MenuButton>
                  <transition
                    enter-active-class="transition ease-out duration-100"
                    enter-from-class="transform opacity-0 scale-95"
                    enter-to-class="transform opacity-100 scale-100"
                    leave-active-class="transition ease-in duration-75"
                    leave-from-class="transform opacity-100 scale-100"
                    leave-to-class="transform opacity-0 scale-95"
                  >
                    <MenuItems
                      class="
                        origin-top-right
                        absolute
                        right-0
                        mt-2
                        w-48
                        rounded-md
                        shadow-lg
                        bg-white
                        ring-1 ring-black ring-opacity-5
                        focus:outline-none
                      "
                    >
                      <div class="py-1">
                        <MenuItem v-slot="{ active }">
                          <a
                            href="#"
                            :class="[
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            ]"
                            >Download Resume</a
                          >
                        </MenuItem>
                        <MenuItem v-slot="{ active }">
                          <a
                            href="#"
                            :class="[
                              active
                                ? 'bg-gray-100 text-gray-900'
                                : 'text-gray-700',
                              'block px-4 py-2 text-sm',
                            ]"
                            @click="copy"
                            >Copy profile link</a
                          >
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </transition>
                </Menu>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-6 sm:mt-2 2xl:mt-5">
      <div class="border-b border-gray-200">
        <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav class="-mb-px flex space-x-8" aria-label="Tabs">
            <a
              v-for="tab in tabs"
              :key="tab.number"
              @click="navigateTabs(tab)"
              :href="tab.href"
              :class="[
                tab.current
                  ? 'border-prgreen-500  text-gray-900'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
                'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm cursor-pointer',
              ]"
              :aria-current="tab.current ? 'page' : undefined"
            >
              {{ tab.name }}
            </a>
          </nav>
          <About :Data="VisitUserData" v-if="tabs[0].current === true" />
          <Info :Data="VisitUserData" v-if="tabs[1].current === true" />
          <Resume :Data="VisitUserData" v-if="tabs[2].current === true" />
          <div class="sm:flex sm:px-6 sm:py-5 mt-10 sm:mt-0">
            <div class="flex flex-col">
              <div class="mb-5 mt-2 flex items-center text-sm text-gray-500">
                <BriefcaseIcon
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <dd
                  class="
                    mt-1
                    text-md text-gray-900
                    sm:mt-0 sm:ml-6 sm:col-span-2
                  "
                >
                  <p v-if="VisitUserData.work_time_length !== null">
                    {{ VisitUserData.work_time_length }}
                  </p>
                  <div v-if="VisitUserData.work_time_length === null">
                    <div class="flex font-bold items-center text-prgreen-800">
                      <span class="">No Work Time Length</span>
                    </div>
                  </div>
                </dd>
              </div>
              <div class="mb-5 flex items-center text-sm text-gray-500">
                <LocationMarkerIcon
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <dd
                  class="
                    mt-1
                    text-md text-gray-900
                    sm:mt-0 sm:ml-6 sm:col-span-2
                  "
                >
                  <p v-if="VisitUserData.work_place !== null">
                    {{ VisitUserData.work_place }}
                  </p>
                  <div v-if="VisitUserData.work_place === null">
                    <div class="flex font-bold items-center text-prgreen-800">
                      <span class="">No Work Place</span>
                    </div>
                  </div>
                </dd>
              </div>
              <div class="mb-5 flex items-center text-sm text-gray-500">
                <CurrencyDollarIcon
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <dd
                  class="
                    mt-1
                    text-md text-gray-900
                    sm:mt-0 sm:ml-6 sm:col-span-2
                  "
                >
                  <p v-if="VisitUserData.salary !== null">
                    {{ VisitUserData.salary }}$
                  </p>
                  <div v-if="VisitUserData.salary === null">
                    <div class="flex font-bold items-center text-prgreen-800">
                      <span class="">No Salary</span>
                    </div>
                  </div>
                </dd>
              </div>
              <div class="flex items-center text-sm text-gray-500">
                <CalendarIcon
                  class="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
                <dd
                  class="
                    mt-1
                    text-md text-gray-900
                    sm:mt-0 sm:ml-6 sm:col-span-2
                  "
                >
                  <p v-if="VisitUserData.work_hours !== null">
                    <!--                     FROM {{ timerange.start }}:00 am TO {{ timerange.end }}:00
 -->
                    pm
                  </p>
                  <div v-if="VisitUserData.work_hours === null">
                    <div class="flex font-bold items-center text-prgreen-800">
                      <span class="">No Work Hours</span>
                    </div>
                  </div>
                </dd>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="mt-6 sm:mt-2 2xl:mt-5">
    <div class="border-b border-gray-200">
      <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav class="-mb-px flex space-x-8" aria-label="Tabs">
          <a
            v-for="tab in Gigs_Requests_tabs"
            :key="tab.name"
            @click="GigRequestNavigation(tab)"
            class="cursor-pointer"
            :class="[
              tab.current
                ? 'border-prgreen-500  text-gray-900'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300',
              'whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm',
            ]"
            :aria-current="tab.current ? 'page' : undefined"
          >
             <span v-if="tab.name == 'Gigs' && isHandyman === true">
              {{ tab.name }}
            </span>
            <span v-if="tab.name == 'Requests' && tab.name !== 'Gigs'">
              {{ tab.name }}

            </span>
          </a>
        </nav>
      </div>
    </div>
  </div>
  <ClientRequests v-show="loading === false && Gigs_Requests_tabs[0].current === true" />
  <Table v-show="loading === true && Gigs_Requests_tabs[0].current === true" />

  <HandymanGigs
    v-show="loading === false &&  Gigs_Requests_tabs[1].current === true  && isHandyman === true "

  />
    <GigLoadingSkeleton
    v-show="
      loading === true &&
      Gigs_Requests_tabs[1].current === true &&
      isHandyman === true
    "
  />
  <VisitReview/>
</template>

<script>
import GigLoadingSkeleton from "@/components/Loading/Skeletons/Gig.component.vue";
import VisitReview from "@/components/Profile/Visit_Reviews.component.vue";
import useClipboard from 'vue-clipboard3'

import Table from "@/components/Loading/Skeletons/Table.component.vue";
import {
  BriefcaseIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  LocationMarkerIcon,
    CheckCircleIcon,

} from "@heroicons/vue/solid";
import About from "./Visit_About.component.vue";
import Resume from "./Visit_Resume.component.vue";
import Info from "./VisitInfo.component.vue";

import ClientRequests from "./Visit_Client_Requests.component.vue";
import HandymanGigs from "./Visit_Handyman_Gigs.component.vue";

import { DotsVerticalIcon } from "@heroicons/vue/solid";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/vue";
import {  computed, reactive, ref } from "@vue/runtime-core";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-initials-sprites";
import UserService from "@/services/UserService.js";
import { useRoute, useRouter } from "vue-router";
import { useStore } from "vuex";
import ChatButton from "../Chat/ChatButton.component.vue";

const profile = {
  name: "Ricardo Cooper",
  email: "ricardo.cooper@example.com",
  avatar:
    "https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80",
  backgroundImage:
    "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
  fields: [
    ["Phone", "(555) 123-4567"],
    ["Email", "ricardocooper@example.com"],
    ["Title", "Senior Front-End Developer"],
    ["Team", "Product Development"],
    ["Location", "San Francisco"],
    ["Sits", "Oasis, 4th floor"],
    ["Salary", "$145,000"],
    ["Birthday", "June 8, 1990"],
  ],
};

export default {
  components: {
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,

    DotsVerticalIcon,
    ClientRequests,
    HandymanGigs,
    About,
    Resume,
    Info,
    BriefcaseIcon,
    CalendarIcon,

    CurrencyDollarIcon,

    LocationMarkerIcon,
    ChatButton,
    CheckCircleIcon,
    Table,
    GigLoadingSkeleton,
    VisitReview
  },

  setup() {
    let route = useRoute();
    let store = useStore();
    let router = useRouter();
    let timerange = reactive(null);
    let id = route.params.id;
    let VisitUserData = ref({});
    let avatar_svg = ref("");
    let avatar = ref("");
    let OathAvatar = ref("");
    let avatarWithoutLocalhost = ref("");
    let isHandyman = ref(false);
    let isClient = ref(false);
    let ParsedTime = ref(null);
    UserService.getUser(id).then(async (data) => {
      VisitUserData.value = data.data.data;
      //get isloggedin
      let isLoggedIn = await store.getters["auth/loggedIn"];
      console.log(isLoggedIn);
      if (isLoggedIn) {
        const idGetter = await store.getters["auth/id"];
        console.log(idGetter, id);
        if (idGetter == id) {
          router.push("/profile");
        }
      }
console.log(VisitUserData.value);

        isHandyman.value = VisitUserData.value.isHandyman;
        isClient.value = VisitUserData.value.isClient;


      avatar_svg.value = createAvatar(style, {
        seed: VisitUserData.value.name,
        dataUri: true,
        // ... and other options
      });
      avatar.value = `${process.env.VUE_APP_API_URL}/${VisitUserData.value.avatar}`;
      OathAvatar.value = VisitUserData.value.avatar;

      avatarWithoutLocalhost.value = VisitUserData.value.avatar;

      if (VisitUserData.value.avatar !== null) {
        if (
          VisitUserData.value.avatar.includes("googleusercontent.com") ||
          VisitUserData.value.avatar.includes("graph.facebook.com") ||
          VisitUserData.value.avatar.includes("licdn.com")
        ) {
          avatar.value = OathAvatar.value;
        }
      }

      ParsedTime = JSON.parse(VisitUserData.value.work_hours);
      if (ParsedTime !== null) {
        timerange = reactive({
          start: ParsedTime[0].hours,
          end: ParsedTime[1].hours,
        });
      } else {
        timerange = reactive(null);
      }
    });

    const tabs = reactive([
      { name: "About", number: 1, current: true },
      { name: "Info", number: 2, current: false },
      { name: "Resume", number: 3, current: false },
    ]);


const Gigs_Requests_tabs = reactive([
  { name: "Requests", href: "#", current: true , number: 1 },
  { name: "Gigs", href: "#", current: false, isHandyman: true ,  number: 2, },
]);

    const navigateTabs = (tab) => {
      if (tab.name === "About" && tab.number === 1) {
        tab.current = true;
        tabs[1].current = false;
        tabs[2].current = false;
      } else if (tab.name === "Info" && tab.number === 2) {
        tab.current = true;
        tabs[2].current = false;
        tabs[0].current = false;
      } else if (tab.name === "Resume" && tab.number === 3) {
        tab.current = true;
        tabs[0].current = false;
        tabs[1].current = false;
      }
    };
const GigRequestNavigation = (tab) =>{
  console.log(tab);
if(tab.name === "Requests" && tab.number === 1){
 tab.current = true
  Gigs_Requests_tabs[1].current = false
}else
if(tab.name === "Gigs" && tab.number === 2){
   tab.current = true
  Gigs_Requests_tabs[0].current = false

}



}
    let vueAuuUrl =`${process.env.VUE_APP_URL}`;
    const { toClipboard } = useClipboard()

 const copy = async () => {

      try {
        await toClipboard(`${vueAuuUrl}/user/${id}`)
        console.log('Copied to clipboard' , `${vueAuuUrl}/user/${id}`)
      } catch (e) {
        console.error(e)
      }
    }

    let loading = computed(() => store.getters["Loading/loading"]);

    return {
      VisitUserData,

      avatar,
      avatar_svg,
      avatarWithoutLocalhost,
      isHandyman,
      isClient,
      navigateTabs,
      timerange,
      OathAvatar,
      Gigs_Requests_tabs,
      profile,
      tabs,
      ParsedTime,
      id,
      copy,

      GigRequestNavigation,
      loading

    };
  },
};
</script>

<style>
</style>
