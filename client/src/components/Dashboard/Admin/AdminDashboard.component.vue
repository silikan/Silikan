
<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen" class="z-50">
      <Dialog
        as="div"
        class="fixed inset-0 flex z-40 lg:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <DialogOverlay class="fixed inset-0 bg-gray-600 bg-opacity-75" />
        </TransitionChild>
        <TransitionChild
          as="template"
          enter="transition ease-in-out duration-300 transform"
          enter-from="-translate-x-full"
          enter-to="translate-x-0"
          leave="transition ease-in-out duration-300 transform"
          leave-from="translate-x-0"
          leave-to="-translate-x-full"
        >
          <div
            class="
              relative
              flex-1 flex flex-col
              max-w-xs
              w-full
              pt-5
              pb-4
              bg-prgreen-700
            "
          >
            <TransitionChild
              as="template"
              enter="ease-in-out duration-300"
              enter-from="opacity-0"
              enter-to="opacity-100"
              leave="ease-in-out duration-300"
              leave-from="opacity-100"
              leave-to="opacity-0"
            >
              <div class="absolute top-0 right-0 -mr-12 pt-2">
                <button
                  type="button"
                  class="
                    ml-1
                    flex
                    items-center
                    justify-center
                    h-10
                    w-10
                    rounded-full
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-white
                  "
                  @click="sidebarOpen = false"
                >
                  <span class="sr-only">Close sidebar</span>
                  <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                </button>
              </div>
            </TransitionChild>
            <div class="md:flex-shrink-0 my-3">
              <img
                class="h-10"
                src="@/assets/Logos/full-white.svg"
                alt="Silikan"
              />
            </div>
            <nav
              class="
                mt-5
                flex-shrink-0
                h-full
                divide-y divide-prgreen-800
                overflow-y-auto
              "
              aria-label="Sidebar"
            >
              <div class="px-2 space-y-1">
                <router-link
                  v-for="item in navigation"
                  :key="item.name"
                  :to="item.link"
                  class="cursor-pointer"
                  :class="[
                    item.current
                      ? 'bg-prgreen-800 text-white'
                      : 'text-prgreen-100 hover:text-white hover:bg-prgreen-600',
                    'group flex items-center px-2 py-2 text-base font-medium rounded-md',
                  ]"
                  :aria-current="item.current ? 'page' : undefined"
                >
                  <component
                    :is="item.icon"
                    class="mr-4 flex-shrink-0 h-6 w-6 text-prgreen-200"
                    aria-hidden="true"
                  />
                  {{ item.name }}
                </router-link>
              </div>
              <div class="mt-6 pt-6">
                <div class="px-2 space-y-1">
                  <router-link
                    v-for="item in secondaryNavigation"
                    :key="item.name"
                    :to="item.link"
                    class="
                      group
                      flex
                      items-center
                      px-2
                      py-2
                      text-base
                      font-medium
                      rounded-md
                      text-prgreen-100
                      hover:text-white hover:bg-prgreen-600
                    "
                  >
                    <component
                      :is="item.icon"
                      class="mr-4 h-6 w-6 text-prgreen-200"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </router-link>
                </div>
              </div>
            </nav>
          </div>
        </TransitionChild>
        <div class="flex-shrink-0 w-14" aria-hidden="true">
          <!-- Dummy element to force sidebar to shrink to fit close icon -->
        </div>
      </Dialog>
    </TransitionRoot>

    <!-- Static sidebar for desktop -->
    <div class="hidden lg:flex lg:w-64 lg:flex-col lg:fixed lg:inset-y-0">
      <!-- Sidebar component, swap this element with another sidebar if you like -->
      <div
        class="flex flex-col flex-grow bg-prgreen-700 pt-5 pb-4 overflow-y-auto"
      >
        <nav
          class="
            mt-5
            flex-1 flex flex-col
            divide-y divide-prgreen-800
            overflow-y-auto
          "
          aria-label="Sidebar"
        >
          <div class="px-2 space-y-1">
            <router-link
              class="cursor-pointer"
              v-for="item in navigation"
              :key="item.name"
              :to="item.link"
              :class="[
                item.current
                  ? 'bg-prgreen-800 text-white'
                  : 'text-prgreen-100 hover:text-white hover:bg-prgreen-600',
                'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md',
              ]"
              :aria-current="item.current ? 'page' : undefined"
            >
              <component
                :is="item.icon"
                class="mr-4 flex-shrink-0 h-6 w-6 text-prgreen-200"
                aria-hidden="true"
              />
              {{ item.name }}
            </router-link>
          </div>
          <div class="mt-6 pt-6">
            <div class="px-2 space-y-1">
              <router-link
                v-for="item in secondaryNavigation"
                :key="item.name"
                :to="item.link"
                class="
                  group
                  flex
                  cursor-pointer
                  items-center
                  px-2
                  py-2
                  text-sm
                  leading-6
                  font-medium
                  rounded-md
                  text-prgreen-100
                  hover:text-white hover:bg-prgreen-600
                "
              >
                <component
                  :is="item.icon"
                  class="mr-4 h-6 w-6 text-prgreen-200"
                  aria-hidden="true"
                />
                {{ item.name }}
              </router-link>
            </div>
          </div>
        </nav>
      </div>
    </div>

    <div class="lg:pl-64 flex flex-col flex-1">
      <div
        class="
          relative
          z-10
          flex-shrink-0 flex
          h-16
          bg-white
          border-b border-gray-200
          lg:border-none
        "
      >
        <button
          type="button"
          class="
            px-4
            border-r border-gray-200
            text-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-inset
            focus:ring-prgreen-500
            lg:hidden
          "
          @click="sidebarOpen = true"
        >
          <span class="sr-only">Open sidebar</span>
          <MenuAlt1Icon class="h-6 w-6" aria-hidden="true" />
        </button>
        <!-- Search bar -->
        <div
          class="
            flex-1
            px-4
            flex
            justify-between
            sm:px-6
            lg:max-w-6xl lg:mx-auto lg:px-8
          "
        >
          <div class="flex-1 flex">
            <form class="w-full flex md:ml-0" action="#" method="GET">
              <label for="search-field" class="sr-only">Search</label>
              <div
                class="relative w-full text-gray-400 focus-within:text-gray-600"
              >
                <div
                  class="
                    absolute
                    inset-y-0
                    left-0
                    flex
                    items-center
                    pointer-events-none
                  "
                  aria-hidden="true"
                >
                  <SearchIcon class="h-5 w-5" aria-hidden="true" />
                </div>
                <input
                  id="search-field"
                  name="search-field"
                  v-model="search"
                  class="
                    block
                    w-full
                    h-full
                    pl-8
                    pr-3
                    py-2
                    border-transparent
                    text-gray-900
                    placeholder-gray-500
                    focus:outline-none focus:ring-0 focus:border-transparent
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
            </form>
          </div>
        </div>
      </div>
      <main class="flex-1 pb-8">
        <!-- Page header -->
        <div class="bg-white shadow">
          <div class="px-4 sm:px-6 lg:max-w-6xl lg:mx-auto lg:px-8">
            <div
              class="
                py-6
                md:flex md:items-center md:justify-between
                lg:border-t lg:border-gray-200
              "
            >
              <div class="flex-1 min-w-0">
                <!-- Profile -->
                <div class="flex items-center">
                  <div>
                    <div class="flex items-center">
                      <Avatar
                        v-if="authUser.name"
                        :url="authUser.avatar"
                        :name="authUser.name"
                      />
                      <h1
                        class="
                          ml-3
                          text-2xl
                          font-bold
                          leading-7
                          text-gray-900
                          sm:leading-9 sm:truncate
                        "
                        v-if="authUser.name"
                      >
                        Good morning, {{ authUser.name }}
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
              <div class="mt-6 flex space-x-3 md:mt-0 md:ml-4">
                <router-link
                  :to="`/profile`"
                  type="button"
                  class="
                    inline-flex
                    items-center
                    px-4
                    py-2
                    border border-gray-300
                    shadow-sm
                    text-sm
                    font-medium
                    rounded-md
                    text-gray-700
                    bg-white
                    hover:bg-gray-50
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                  "
                >
                  Go To Profile
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <router-view />
      </main>
    </div>
  </div>
</template>

<script>
import SearchList from "@/components/Search/SearchList.component.vue";
import Avatar from "./Avatar.component.vue";
import { computed, ref } from "vue";

import {
  Dialog,
  DialogOverlay,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  BellIcon,
  CogIcon,
  CreditCardIcon,
  HomeIcon,
  MenuAlt1Icon,
  ScaleIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from "@heroicons/vue/solid";
import {
  CashIcon,
  CheckCircleIcon,
  ChevronDownIcon,
  ChevronRightIcon,
  OfficeBuildingIcon,
  SearchIcon,
} from "@heroicons/vue/solid";
import { useStore } from "vuex";

const navigation = [
  {
    name: "Home",
    link: "/dashboard/admin/home",
    icon: HomeIcon,
    current: true,
  },
  {
    name: "Transactions",
    link: "/dashboard/admin/transactions",
    icon: CreditCardIcon,
    current: false,
  },
  {
    name: "Feedback",

    link: "/dashboard/admin/feedback",
    icon: QuestionMarkCircleIcon,
    current: false,
  },
];
const secondaryNavigation = [
  { name: "Settings", link: "/dashboard/admin/settings", icon: CogIcon },
];
const cards = [
  { name: "Account balance", href: "#", icon: ScaleIcon, amount: "$30,659.45" },
  // More items...
];
const transactions = [
  {
    id: 1,
    name: "Payment to Molly Sanders",
    href: "#",
    amount: "$20,000",
    currency: "DZD",
    status: "success",
    date: "July 11, 2020",
    datetime: "2020-07-11",
  },
  // More transactions...
];
const statusStyles = {
  success: "bg-prgreen-600 text-prgreen-50",
  processing: "bg-yellow-100 text-yellow-800",
  failed: "bg-gray-100 text-gray-800",
};

export default {
  components: {
    Dialog,
    DialogOverlay,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    BellIcon,
    CashIcon,
    CheckCircleIcon,
    ChevronDownIcon,
    ChevronRightIcon,
    MenuAlt1Icon,
    OfficeBuildingIcon,
    SearchIcon,
    XIcon,
    SearchList,
    Avatar,
  },
  setup() {
    const sidebarOpen = ref(false);
    let search = ref("");
    let store = useStore();

    let authUser = computed(() => store.getters["auth/authUser"]);

    return {
      navigation,
      secondaryNavigation,
      cards,
      transactions,
      statusStyles,
      sidebarOpen,
      search,

      authUser,
    };
  },
};
</script>
