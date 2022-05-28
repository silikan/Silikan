
<template>
  <div class="bg-white">
    <main>
      <!-- Category section -->
      <section
        aria-labelledby="category-heading"
        class="pt-24 sm:pt-32 xl:max-w-7xl xl:mx-auto xl:px-8"
      >
        <div
          class="
            px-4
            sm:px-6 sm:flex sm:items-center sm:justify-between
            lg:px-8
            xl:px-0
          "
        >
          <h2
            id="category-heading"
            class="text-2xl font-extrabold tracking-tight text-gray-900"
          >
            Browse Requests by Category
          </h2>
          <router-link
            :to="`/categories`"
            class="
              hidden
              text-sm
              font-semibold
              text-prgreen-600
              hover:text-prgreen-500
              sm:block
            "
            >all categories<span aria-hidden="true"> &rarr;</span></router-link
          >
        </div>

        <div class="mt-4 flow-root">
          <div class="-my-2">
            <div
              class="
                box-content
                py-2
                relative
                h-80
                overflow-x-auto
                xl:overflow-visible
                scrollbar
              "
            >
              <div
                class="
                  absolute
                  min-w-screen-xl
                  px-4
                  flex
                  space-x-8
                  sm:px-6
                  lg:px-8
                  xl:relative
                  xl:px-0
                  xl:space-x-0
                  xl:grid
                  xl:grid-cols-5
                  xl:gap-x-8
                "
              >
                <router-link
                  v-for="category in categories"
                  :key="category.name"
                  :to="category.link"
                  class="
                    relative
                    w-56
                    h-80
                    rounded-lg
                    p-6
                    flex flex-col
                    overflow-hidden
                    hover:opacity-75
                    xl:w-auto
                  "
                >
                  <span aria-hidden="true" class="absolute inset-0">
                    <img
                      :src="`${category.imageSrc}`"
                      class="w-full h-full object-center object-cover"
                    />
                  </span>
                  <span
                    aria-hidden="true"
                    class="
                      absolute
                      inset-x-0
                      bottom-0
                      h-2/3
                      bg-gradient-to-t
                      from-gray-800
                      opacity-50
                    "
                  />
                  <span
                    class="
                      relative
                      mt-auto
                      text-center text-xl
                      font-bold
                      text-white
                    "
                    >{{ category.name }}</span
                  >
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-6 px-4 sm:hidden">
          <a
            href="#"
            class="
              block
              text-sm
              font-semibold
              text-prgreen-600
              hover:text-prgreen-500
            "
            >Browse all categories<span aria-hidden="true"> &rarr;</span></a
          >
        </div>
      </section>

      <!-- Featured section -->
      <section
        aria-labelledby="social-impact-heading"
        class="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8"
      >
        <div class="relative rounded-lg overflow-hidden">
          <div class="absolute inset-0">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
              alt=""
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div
            class="
              relative
              bg-gray-900 bg-opacity-75
              py-32
              px-6
              sm:py-40 sm:px-12
              lg:px-16
            "
          >
            <div
              class="
                relative
                max-w-3xl
                mx-auto
                flex flex-col
                items-center
                text-center
              "
            >
              <h2
                id="social-impact-heading"
                class="
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                <span class="block sm:inline">Clients</span>
              </h2>
              <p class="mt-3 text-xl text-white">
                Check out the best clients and their requests for your business and services.
              </p>
              <a
                href="#"
                class="
                  mt-8
                  w-full
                  block
                  bg-white
                  border border-transparent
                  rounded-md
                  py-3
                  px-8
                  text-base
                  font-medium
                  text-gray-900
                  hover:bg-gray-100
                  sm:w-auto
                "
                >Check All Handymen</a
              >
            </div>
          </div>
        </div>
      </section>

      <!-- Collection section -->
      <section
        aria-labelledby="collection-heading"
        class="mb-10 mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2
          id="collection-heading"
          class="text-2xl font-extrabold tracking-tight text-gray-900"
        >
          Discover Clients Requests
        </h2>


        <RequestCarousel class="mt-10" />
      </section>

      <!-- Featured section -->
      <section
        aria-labelledby="social-impact-heading"
        class="max-w-7xl mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:px-8"
      >
        <div class="relative rounded-lg overflow-hidden">
          <div class="absolute inset-0">
            <img
              src="https://tailwindui.com/img/ecommerce-images/home-page-01-feature-section-01.jpg"
              alt=""
              class="w-full h-full object-center object-cover"
            />
          </div>
          <div
            class="
              relative
              bg-gray-900 bg-opacity-75
              py-32
              px-6
              sm:py-40 sm:px-12
              lg:px-16
            "
          >
            <div
              class="
                relative
                max-w-3xl
                mx-auto
                flex flex-col
                items-center
                text-center
              "
            >
              <h2
                id="social-impact-heading"
                class="
                  text-3xl
                  font-extrabold
                  tracking-tight
                  text-white
                  sm:text-4xl
                "
              >
                <span class="block sm:inline">Requests</span>
              </h2>
              <p class="mt-3 text-xl text-white">
                Check out the latest requests from our dear clients , and get in
                contact with them.
              </p>
              <router-link
                to="/requests"
                class="
                  mt-8
                  w-full
                  block
                  bg-white
                  border border-transparent
                  rounded-md
                  py-3
                  px-8
                  text-base
                  font-medium
                  text-gray-900
                  hover:bg-gray-100
                  sm:w-auto
                "
                >Check All Client Requests</router-link
              >
            </div>
          </div>
        </div>
      </section>
      <section
        aria-labelledby="collection-heading"
        class="mb-10 mx-auto pt-24 px-4 sm:pt-32 sm:px-6 lg:max-w-7xl lg:px-8"
      >
        <h2
          id="collection-heading"
          class="text-2xl font-extrabold tracking-tight text-gray-900"
        >
          Discover Clients
        </h2>


        <ClientCarousel class="mt-10" />
      </section>
    </main>
  </div>
</template>

<script>
import { ref } from "vue";
import ClientCarousel from "./ClientCarousel.component.vue";
import RequestCarousel from "./RequestCarousel.component.vue";
const currencies = ["CAD", "DZD", "AUD", "EUR", "GBP"];
const navigation = {
  pages: [
    { name: "Company", href: "#" },
    { name: "Stores", href: "#" },
  ],
};
const categories = [
  {
    name: "Cooking",
    link: "/category/Cooking/requests",
    imageSrc: require("../../assets/categories/cooking.jpg"),
  },
  {
    name: "Cleaning",
    link: "/category/Cleaning/requests",
    imageSrc: require("../../assets/categories/cleaning.jpg"),
  },
  {
    name: "WoodWork",
    link: "/category/WoodWork/requests",
    imageSrc: require("../../assets/categories/woodwork.jpg"),
  },
  {
    name: "Massage",
    link: "/category/Massage/requests",
    imageSrc: require("../../assets/categories/massage.jpg"),
  },
  {
    name: "Plumbing",
    link: "/category/Plumbing/requests",
    imageSrc: require("../../assets/categories/plumbing.jpg"),
  },
];
const collections = [
  {
    name: "Handcrafted Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-01.jpg",
    imageAlt:
      "Brown leather key ring with brass metal loops and rivets on wood table.",
    description:
      "Keep your phone, keys, and wallet together, so you can lose everything at once.",
  },
  {
    name: "Organized Desk Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-02.jpg",
    imageAlt:
      "Natural leather mouse pad on white desk next to porcelain mug and keyboard.",
    description:
      "The rest of the house will still be a mess, but your desk will look great.",
  },
  {
    name: "Focus Collection",
    href: "#",
    imageSrc:
      "https://tailwindui.com/img/ecommerce-images/home-page-01-collection-03.jpg",
    imageAlt:
      "Person placing task list card into walnut card holder next to felt carrying case on leather desk pad.",
    description:
      "Be more productive than enterprise project managers with a single piece of paper.",
  },
];
const footerNavigation = {
  shop: [
    { name: "Bags", href: "#" },
    { name: "Tees", href: "#" },
    { name: "Objects", href: "#" },
    { name: "Home Goods", href: "#" },
    { name: "Accessories", href: "#" },
  ],
  company: [
    { name: "Who we are", href: "#" },
    { name: "Sustainability", href: "#" },
    { name: "Press", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Terms & Conditions", href: "#" },
    { name: "Privacy", href: "#" },
  ],
  account: [
    { name: "Manage Account", href: "#" },
    { name: "Returns & Exchanges", href: "#" },
    { name: "Redeem a Gift Card", href: "#" },
  ],
  connect: [
    { name: "Contact Us", href: "#" },
    { name: "Twitter", href: "#" },
    { name: "Instagram", href: "#" },
    { name: "Pinterest", href: "#" },
  ],
};

export default {
  components: { ClientCarousel, RequestCarousel },
  setup() {
    const mobileMenuOpen = ref(false);

    return {
      currencies,
      navigation,
      categories,
      collections,
      footerNavigation,
      mobileMenuOpen,
    };
  },
};
</script>
<style scoped>
.scrollbar {
  cursor: pointer;
}
.scrollbar::-webkit-scrollbar {
  width: 15px;
  height: 20px;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #e2e8f0;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #94a3b8;
  border-radius: 100vh;
  border: 3px solid #e2e8f0;
}

.scrollbar::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
