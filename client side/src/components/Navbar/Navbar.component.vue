<template>
  <Disclosure
    v-slot="{ open }"
    as="header"
    class="bg-white dark:bg-prblue-500 shadow"
  >
    <div
      class="
        max-w-7xl
        mx-auto
        px-2
        sm:px-4
        lg:divide-y lg:divide-gray-200 lg:px-8
      "
    >
      <div class="relative h-16 flex justify-between">
        <div class="flex-shrink-0 flex items-center h-full z-50">
          <router-link type="button" to="/" class="cursor-pointer">
            <img
              class="block h-16 w-auto cursor-pointer"
              src="@/assets/Logos/s-green.svg"
              alt="Silikan"
            />
          </router-link>
        </div>

        <div
          class="
            relative
            z-0
            flex-1
            px-2
            flex
            items-center
            justify-center
            sm:absolute sm:inset-0
          "
        >
          <div class="w-full sm:max-w-xs">
            <label for="search" class="sr-only">Search</label>
            <div class="relative">
              <div
                class="
                  pointer-events-none
                  absolute
                  inset-y-0
                  left-0
                  pl-3
                  flex
                  items-center
                "
              >
                <SearchIcon class="h-5 w-5 text-gray-400" aria-hidden="true" />
              </div>
              <input
                id="search"
                name="search"
                v-model="search"
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
              />
              <SearchList
                v-if="search != ''"
                :searchData="search"
                class="absolute z-50 shadow-lg w-full"
              />
            </div>

            <div></div>
          </div>
        </div>
        <div class="relative z-10 flex items-center lg:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:bg-gray-100 hover:text-gray-500
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-prgreen-500
              dark:hover:bg-prblue-100
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>

        <div class="hidden lg:relative lg:z-10 lg:ml-4 lg:flex lg:items-center">
          <div class="flex justify-between" v-if="isLoggedin === false">
            <div class="hidden md:flex mx-4" v-if="signin === false">
              <router-link
                to="/signin"
                class="
                  inline-flex
                  items-center
                  px-5
                  py-2
                  border
                  text-sm
                  font-medium
                  rounded-full
                  shadow-sm
                  text-black
                  bg-white
                  hover:bg-transparent hover:border-white
                "
              >
                Signin
              </router-link>
            </div>
            <div class="hidden md:flex">
              <router-link
                v-if="signup === false"
                to="/signup"
                class="
                  inline-flex
                  items-center
                  px-5
                  py-2
                  border border-transparent
                  text-sm
                  font-medium
                  rounded-full
                  shadow-sm
                  text-white
                  bg-prgreen-600
                  hover:bg-prgreen-700
                "
              >
                Signup
              </router-link>
            </div>
          </div>
          <router-link
            v-if="isLoggedin && isHandyman === true && buying === true"
            to="/selling"
            class="
              inline-flex
              items-center
              px-5
              py-2
              border border-transparent
              text-sm
              rounded-full
              text-prgreen-600
              font-bold
            "
          >
            Switch To Selling
          </router-link>
          <router-link
            v-if="isLoggedin && buying === false"
            to="/buying"
            class="
              inline-flex
              items-center
              px-5
              py-2
              border border-transparent
              text-sm
              rounded-full
              text-prgreen-600
              font-bold
            "
          >
            {{ isHandyman === true ? "Switch To Buying" : "Go To Buying" }}
          </router-link>
          <router-link
            to="/rooms"
            v-if="isLoggedin === true"
            type="button"
            class="
              flex-shrink-0
              bg-white
              rounded-full
              p-1
              text-gray-400
              hover:text-gray-500
                 dark:bg-prblue-500
              dark:text-white
              dark:hover:bg-prblue-500
              dark:hover:text-white
            "
          >
            <span class="sr-only">chat rooms</span>
            <ChatAlt2Icon class="h-6 w-6" aria-hidden="true" />
          </router-link>
          <router-link
            v-if="isLoggedin === true && isHandyman === true"
            type="router-link"
            class="
              flex-shrink-0
              bg-white
              rounded-full
              p-1
              text-gray-400
              hover:text-gray-500
                 dark:bg-prblue-500
              dark:text-white
              dark:hover:bg-prblue-500
              dark:hover:text-white
            "
            to="/task"
          >
            <span class="sr-only">View notifications</span>
            <ClipboardCheckIcon class="h-6 w-6" aria-hidden="true" />
          </router-link>
          <router-link
            v-if="isLoggedin === true"
            type="button"
            class="
              flex-shrink-0
              bg-white
              rounded-full
              p-1
              text-gray-400
              hover:text-gray-500
               dark:bg-prblue-500
              dark:text-white

            "
            to="/cart"
          >
            <span class="sr-only">View notifications</span>
            <ShoppingBagIcon class="h-6 w-6" aria-hidden="true" />
          </router-link>
          <button
            v-if="isLoggedin === true"
            type="button"
            class="
              flex-shrink-0
              bg-white
              rounded-full
              p-1
              text-gray-400
              hover:text-gray-500
              inline-block
              relative
              dark:bg-prblue-500
              dark:text-white
              dark:hover:bg-prblue-500
              dark:hover:text-white

            "
            @click="createNotificationRoom"
          >
            <span class="sr-only">View notifications</span>
            <BellIcon class="h-6 w-6" aria-hidden="true" />
            <span
              class="
                absolute
                top-0
                right-0
                block
                h-2
                w-2
                rounded-full
                ring-2 ring-white
                dark:ring-prblue-500
                bg-red-400
                font-size-sm font-bold
              "
              v-if="notifications.length > 0"
            />
          </button>

          <!-- Profile dropdown -->
          <Menu as="div" class="flex-shrink-0 relative ml-4">
            <div>
              <MenuButton
                v-if="isLoggedin === true"
                class="
                  bg-white
                  rounded-full
                  flex
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-prgreen-500
                "
              >
                <span class="sr-only">Open user menu</span>
                <img
                  class="h-8 w-8 rounded-full"
                  :src="navBarImg.avatar_svg"
                  v-if="navBarImg.avatarWithoutLocalhost === null"
                  alt=""
                />
                <img
                  class="h-8 w-8 rounded-full"
                  :src="navBarImg.avatar"
                  v-if="navBarImg.avatarWithoutLocalhost !== null"
                  alt=""
                />
              </MenuButton>
            </div>
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
                  py-1
                  focus:outline-none
                  dark:bg-prblue-500
                "
              >
                <router-link to="/profile">
                  <MenuItem v-slot="{ active }">
                    <a
                      class="dark:text-white dark:hover:bg-prblue-500 dark:hover:text-white"

                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block py-2 px-4 text-sm text-gray-700',
                      ]"
                    >
                      Your Profile
                    </a>
                  </MenuItem>
                </router-link>
                <router-link to="/edit/profile">
                  <MenuItem v-slot="{ active }">
                    <a
                                            class="dark:text-white dark:hover:bg-prblue-500 dark:hover:text-white"

                      :class="[
                        active ? 'bg-gray-100' : '',
                        'block py-2 px-4 text-sm text-gray-700',
                      ]"
                    >
                      Settings
                    </a>
                  </MenuItem>
                </router-link>
                <MenuItem v-slot="{ active }" class="cursor-pointer">
                  <a
                                          class="dark:text-white dark:hover:bg-prblue-500 dark:hover:text-white"

                    :class="[
                      active ? 'bg-gray-100' : '',
                      'block py-2 px-4 text-sm text-gray-700',
                    ]"
                    @click="logout"
                    >Sign out</a
                  >
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
      </div>
      <nav class="hidden lg:py-2 lg:flex lg:space-x-8" aria-label="Global">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="item.link"
          :class="[
            item.current
              ? 'bg-gray-100 text-gray-900 dark:text-white'
              : 'dark:text-white text-gray-900 hover:bg-gray-50 dark:hover:text-white dark:hover:bg-prblue-500 hover:text-gray-900',
            'rounded-md py-2 px-3 inline-flex items-center text-sm font-medium',
          ]"
          :aria-current="item.current ? 'page' : undefined"
        >
          {{ item.name }}
        </router-link>
        <router-link
          v-if="isLoggedin === true"
          to="/blog"
          class="
            text-gray-900
            hover:bg-gray-50 hover:text-gray-900
            dark:text-white
            rounded-md
            py-2
            px-3
            inline-flex
            items-center
            text-sm
            font-medium
            dark:hover:bg-prblue-500
            dark:hover:text-white
          "
        >
          Blog
        </router-link>
      </nav>
    </div>

    <DisclosurePanel as="nav" class="lg:hidden" aria-label="Global">
      <router-link v-for="item in navigation" :key="item.name" :to="item.link"
        ><div class="pt-2 pb-3 px-2 space-y-1">
          <DisclosureButton
            as="a"
            :class="[
              item.current
                ? 'dark:bg-prblue-500 dark:text-white bg-gray-100 text-gray-900'
                : 'dark:bg-prblue-500 dark:text-white text-gray-900 hover:bg-gray-50 hover:text-gray-900',
              'block rounded-md py-2 px-3 text-base font-medium',
            ]"
            :aria-current="item.current ? 'page' : undefined"
          >
            {{ item.name }}
          </DisclosureButton>
        </div>
      </router-link>
      <router-link to="/blog" v-if="isLoggedin === true">
        <div class="pt-2 pb-3 px-2 space-y-1">
          <DisclosureButton
            class="
              text-gray-900
              hover:bg-gray-50 hover:text-gray-900,
              block
              rounded-md
              py-2
              px-3
              text-base
              font-medium
              dark:text-white dark:hover:bg-prblue-500 dark:hover:text-white
            "
          >
            Blog
          </DisclosureButton>
        </div>
      </router-link>
      <div
        class="m-5 flex flex-col justify-between space-y-4 items-start"
        v-if="isLoggedin === false"
      >
        <div class="flex" v-if="signin === false">
          <router-link
            to="/signin"
            class="
              inline-flex
              items-center
              px-5
              py-2
              border
              text-sm
              font-medium
              rounded-full
              shadow-sm
              text-black
              bg-white
              hover:bg-transparent hover:border-white
            "
          >
            Signin
          </router-link>
        </div>
        <div class="flex">
          <router-link
            v-if="signup === false"
            to="/signup"
            class="
              inline-flex
              items-center
              px-5
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-full
              shadow-sm
              text-white
              bg-prgreen-600
              hover:bg-prgreen-700
            "
          >
            Signup
          </router-link>
        </div>
      </div>
      <div
        v-if="isLoggedin === true"
        class="border-t border-gray-200 pt-4 pb-3"
      >
        <div class="px-4 flex items-center">
          <router-link to="/profile" class="cursor-pointer flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-10 w-10 rounded-full"
                :src="navBarImg.avatar_svg"
                v-if="navBarImg.avatarWithoutLocalhost === null"
                alt=""
              />
              <img
                class="h-10 w-10 rounded-full"
                :src="navBarImg.avatar"
                v-if="navBarImg.avatarWithoutLocalhost !== null"
                alt=""
              />
            </div>
            <div class="ml-3">
              <div class="text-base font-medium text-gray-800 dark:text-white">
                {{ authUserData.name }}
              </div>
              <div class="text-sm font-medium text-gray-500 dark:text-white">
                {{ authUserData.username }}
              </div>
            </div>
          </router-link>
          <router-link
            v-if="isHandyman === true && buying === true"
            to="/selling"
            class="
              inline-flex
              items-center
              px-5
              py-2
              border border-transparent
              text-sm
              rounded-full
              flex-1
              text-prgreen-600
              font-bold
            "
          >
            Switch To Selling
          </router-link>
          <router-link
            v-if="buying === false"
            to="/buying"
            class="
              inline-flex
              items-center
              px-5
              py-2
              border border-transparent
              text-sm
              rounded-full
              flex-1
              text-prgreen-600
              font-bold
            "
          >
            {{ isHandyman === true ? "Switch To Buying" : "Go To Buying" }}
          </router-link>
          <router-link
            v-if="isLoggedin === true"
            type="button"
            class="
              flex-shrink-0
              bg-white
              rounded-full
              p-1
              text-gray-400
              hover:text-gray-500
              dark:bg-prblue-500 dark:text-white
            "
            to="/rooms"
          >
            <span class="sr-only">View notifications</span>
            <ChatAlt2Icon class="h-6 w-6" aria-hidden="true" />
          </router-link>
          <router-link
            v-if="isLoggedin === true"
            type="button"
            class="
              flex-shrink-0
              bg-white
              rounded-full
              p-1
              text-gray-400
              hover:text-gray-500
              dark:bg-prblue-500 dark:text-white
            "
            to="/cart"
          >
            <span class="sr-only">View notifications</span>
            <ShoppingBagIcon class="h-6 w-6" aria-hidden="true" />
          </router-link>
          <router-link
            v-if="isLoggedin === true && isHandyman === true"
            type="button"
            class="
              flex-shrink-0
              bg-white
              rounded-full
              p-1
              text-gray-400
              hover:text-gray-500
              dark:bg-prblue-500 dark:text-white
            "
            to="/task"
          >
            <span class="sr-only">View notifications</span>
            <ClipboardCheckIcon class="h-6 w-6" aria-hidden="true" />
          </router-link>
          <button
            v-if="isLoggedin === true"
            type="button"
            class="
              flex-shrink-0
              bg-white
              rounded-full
              p-1
              text-gray-400
              hover:text-gray-500
              inline-block
              relative
              dark:bg-prblue-500 dark:text-white
            "
            @click="createNotificationRoom"
          >
            <span class="sr-only">View notifications</span>

            <BellIcon class="h-6 w-6" aria-hidden="true" />
            <span
              class="
                absolute
                top-0
                right-0
                block
                h-2
                w-2
                rounded-full
                ring-2 ring-white
                 dark:ring-prblue-500
                bg-red-400
                font-size-sm font-bold
                dark:bg-prblue-500 dark:text-white
              "
              v-if="notifications.length > 0"
            />
          </button>
        </div>
        <div class="mt-3 px-2 space-y-1">
          <router-link to="/profile">
            <DisclosureButton
              class="
                block
                rounded-md
                py-2
                px-3
                text-base
                font-medium
                text-gray-500
                hover:bg-gray-50 hover:text-gray-900
                cursor-pointer
                dark:text-white dark:hover:bg-prblue-500 dark:hover:text-white
              "
            >
              Your Profile
            </DisclosureButton>
          </router-link>
          <router-link to="/edit/profile">
            <DisclosureButton
              class="
                block
                rounded-md
                py-2
                px-3
                text-base
                font-medium
                text-gray-500
                hover:bg-gray-50 hover:text-gray-900
                cursor-pointer
                dark:text-white dark:hover:bg-prblue-500 dark:hover:text-white
              "
            >
              Settings
            </DisclosureButton>
          </router-link>
          <DisclosureButton
            class="
              block
              rounded-md
              py-2
              px-3
              text-base
              font-medium
              text-gray-500
              hover:bg-gray-50 hover:text-gray-900
              cursor-pointer
              dark:text-white dark:hover:bg-prblue-500 dark:hover:text-white
            "
            @click="logout"
          >
            Logout
          </DisclosureButton>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script>
import SearchList from "@/components/Search/SearchList.component.vue";
import { io } from "socket.io-client";

import { computed, ref } from "@vue/runtime-core";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-initials-sprites";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import { SearchIcon } from "@heroicons/vue/solid";
import {
  BellIcon,
  MenuIcon,
  XIcon,
  ShoppingBagIcon,
  ClipboardCheckIcon,
  ChatAlt2Icon,
} from "@heroicons/vue/outline";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Categories", link: "/categories" },
  { name: "Requests", link: "/requests" },
  { name: "Handymen", link: "/handymen" },
  { name: "Gigs", link: "/gigs" },
  { name: "About", link: "/aboutus" },
  { name: "Contact Us", link: "/contactus" },
];
const userNavigation = [
  { name: "Your Profile", href: "#", route: "/profile" },
  { name: "Settings", href: "#", route: "/edit/profile" },
  { name: "Sign out", href: "#", mthd: "logout()" },
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    BellIcon,
    MenuIcon,
    SearchIcon,
    XIcon,
    ShoppingBagIcon,
    ClipboardCheckIcon,
    ChatAlt2Icon,
    SearchList,
  },
  props: ["authUser"],

  setup(props) {
    const route = useRoute();
    const store = useStore();
    let router = useRouter();
    let isHandyman = computed(() => store.getters["auth/isHandyman"]);
    let search = ref("");
    let isLoggedin = computed(() => store.getters["auth/loggedIn"]);

    const signin = computed(() => route.path === "/signin");
    const signup = computed(() => route.path === "/signup");
    const buying = computed(() => route.path === "/buying");
    const selling = computed(() => route.path === "/selling");
    let authUserData = computed(() => {
      return props.authUser;
    });
    const logout = () => {
      store.dispatch("auth/logout");
      console.log("logout");
    };
    let avatar_svg;
    let avatar;
    let avatarWithoutLocalhost;
    let OathAvatar;
    console.log(authUserData.value);
    const navBarImg = computed(() => {
      avatar_svg = createAvatar(style, {
        seed: authUserData.value.name,
        dataUri: true,
        // ... and other options
      });
      avatar = `${process.env.VUE_APP_API_URL}/${authUserData.value.avatar}`;
      OathAvatar = authUserData.value.avatar;

      avatarWithoutLocalhost = authUserData.value.avatar;

      if (authUserData.value.avatar !== null) {
        if (
          authUserData.value.avatar.includes("googleusercontent.com") ||
          authUserData.value.avatar.includes("graph.facebook.com") ||
          authUserData.value.avatar.includes("licdn.com")
        ) {
          avatar = OathAvatar;
        }
      }

      return {
        avatar_svg,
        avatar,
        avatarWithoutLocalhost,
      };
    });

    let createNotificationRoom = () => {
      store.dispatch("Notification/createNotificationRoom").then(() => {
        router.push({
          name: "Notification",
        });
      });
    };

    let notifications = ref([]);

    if (isLoggedin.value && authUserData.value.NotificationRoom) {
      let notificationSocket = io("http://localhost:4000");

      let roomId = authUserData.value.NotificationRoom.id;
      console.log(roomId);
      notificationSocket.on("connect", function () {
        // Connected, let's sign-up for to receive messages for this room
        console.log(`room-${roomId}`);
        notificationSocket.emit(
          "notificationRoom",
          `notification-room-${roomId}`
        );
      });
      notificationSocket.on("notification", function (data) {
        console.log("notification");
        console.log(data);
        notifications.value.push(data);
      });
    }
    return {
      user,
      navigation,
      userNavigation,
      logout,
      avatar,
      avatar_svg,
      avatarWithoutLocalhost,
      authUserData,
      isLoggedin,
      signin,
      signup,
      navBarImg,
      search,
      isHandyman,
      buying,
      selling,
      OathAvatar,
      createNotificationRoom,
      notifications,
    };
  },
};
</script>


<style scoped>
</style>
