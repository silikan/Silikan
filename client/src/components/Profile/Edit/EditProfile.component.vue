<template>
  <div>
    <main class="">
      <div class="max-w-screen-xl mx-auto pb-6 px-4 sm:px-6 lg:pb-16 lg:px-8">
        <div class="bg-white rounded-lg shadow overflow-hidden dark:bg-prblue-500">
          <div
            class="
              divide-y divide-gray-200
              lg:grid lg:grid-cols-12 lg:divide-y-0 lg:divide-x
            "
          >
            <aside class="py-6 lg:col-span-3">
              <nav class="space-y-1">
                <router-link
                  v-for="item in subNavigation"
                  :key="item.name"
                  :to="item.route"
                  @click="CurrentCondition"
                  :class="[
                    item.current
                      ? 'bg-green-50 border-green-300 text-green-700 hover:bg-green-50 hover:text-green-700 dark:bg-prblue-500 dark:text-prblue-50'
                      : 'border-transparent text-gray-900 hover:bg-gray-50 hover:text-gray-900 dark:hover:bg-prblue-500 dark:text-prblue-50',
                    'group border-l-4 px-3 py-2 flex items-center text-sm font-medium',
                  ]"
                >
                  <component
                    @click="CurrentCondition"
                    :is="item.icon"
                    :class="[
                      item.current
                        ? 'text-prgreen-500 group-hover:text-prgreen-500'
                        : 'text-gray-400 group-hover:text-gray-500',
                      'flex-shrink-0 -ml-1 mr-3 h-6 w-6',
                    ]"
                  />
                  <span class="truncate">
                    {{ item.name }}
                  </span>
                </router-link>
              </nav>
            </aside>
            <router-view />
            <!--          //form
 --<!-
    <ProfileEdit v-if="subNavigation[0].current == true"/>
    <AccountEdit v-if="subNavigation[1].current == true"/>
  <AuthEdit v-if="subNavigation[2].current == true "/> -->
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
/* import AuthEdit from "./AuthEdit.component.vue";
import AccountEdit from "./AccountEdit.component.vue";
import ProfileEdit from "./ProfileEdit.component.vue"; */
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Switch,
  SwitchDescription,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
import { SearchIcon } from "@heroicons/vue/solid";
import {
  BellIcon,
  CogIcon,
  KeyIcon,
  MenuIcon,
  UserCircleIcon,
  XIcon,
} from "@heroicons/vue/outline";
import { ref } from "@vue/reactivity";
import { computed, onMounted } from "@vue/runtime-core";
import { useRoute, useRouter } from "vue-router";

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Jobs", href: "#", current: false },
  { name: "Applicants", href: "#", current: false },
  { name: "Company", href: "#", current: false },
];

const subNavigation = [
  {
    name: "Profile",
    href: "#",
    current: true,
    icon: UserCircleIcon,
    route: "/edit/profile",
  },
  {
    name: "Account",
    href: "#",
    current: true,
    icon: CogIcon,
    route: "/edit/account",
  },
  {
    name: "Auth",
    href: "#",
    current: true,
    icon: KeyIcon,
    route: "/edit/auth",
  },
  /*   { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Integrations", href: "#", icon: ViewGridAddIcon, current: false }, */
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
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
    Switch,
    SwitchDescription,
    SwitchGroup,
    SwitchLabel,
    BellIcon,
    MenuIcon,
    SearchIcon,
    XIcon,
    /*   AuthEdit,
    AccountEdit,
    ProfileEdit */
  },
  setup() {
    const availableToHire = ref(true);
    const privateAccount = ref(false);
    const allowCommenting = ref(true);
    const allowMentions = ref(true);
    const router = useRouter();
    onMounted(() => {
      router.push("/edit/profile");
    });
    const route = useRoute();

    let CurrentCondition = computed(() => {
      if (route.path === subNavigation[0].route) {
        subNavigation[0].current = true;
        subNavigation[1].current = false;
        subNavigation[2].current = false;
      } else if (route.path === subNavigation[1].route) {
        subNavigation[0].current = false;
        subNavigation[1].current = true;
        subNavigation[2].current = false;
      } else if (route.path === subNavigation[2].route) {
        subNavigation[0].current = false;
        subNavigation[1].current = false;
        subNavigation[2].current = true;
      }
      console.log(route.path);
    });

    return {
      user,
      navigation,
      subNavigation,
      userNavigation,
      availableToHire,
      privateAccount,
      allowCommenting,
      allowMentions,
      CurrentCondition,
    };
  },
};
</script>
