<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="
      border-t border-gray-200
      relative
      bg-gray-50
      dark:bg-prblue-500
      pt-16
      pb-20
      px-4F
      sm:px-6
    "
  >
    <h2
      class="
        mb-5
        text-3xl
        font-extrabold
        tracking-tight
        hidden
        md:block
        dark:text-white
      "
    >
      Gigs
    </h2>
    <div class="relative mx-auto">
      <div
        class="
          lg:mx-10
          grid
          gap-5
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-4
          lg:max-w-non
        "
      >
        <div
          v-for="gig in gigs"
          :key="gig.id"
          class="
            flex flex-col
            rounded-lg
            border border-gray-200
            overflow-hidden
            shadow-inner
          "
        >
          <router-link
            :to="`/gig/${gig.id}`"
            class="flex justify-center relative w-full h-72 overflow-hidden"
          >
            <img
              :src="`${preurl}/${gig.Image}`"
              class="w-full h-full object-center object-cover"
            />
          </router-link>
          <div
            class="
              flex-1
              bg-white
              px-5
              pt-5
              flex flex-col
              justify-between
              dark:bg-prblue-500
            "
          >
            <div class="flex items-center">
              <div class="flex-shrink-0">
                <a href="#">
                  <span class="sr-only">{{ gig.username }}</span>
                  <Avatar
                    v-if="gig.username"
                    :url="gig.userAvatar"
                    :name="gig.username"
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-md font-medium text-gray-600 dark:text-white">
                  <a href="gig.author.href" class="hover:underline">
                    {{ gig.username }}
                  </a>
                </p>
              </div>
            </div>
            <div class="">
              <p class="text-md font-medium text-gray-500 mt-2 dark:text-white">
                {{ gig.title }}
              </p>
            </div>
            <div
              class="
                border-t border-gray-200
                mt-4
                flex
                justify-between
                items-center
                p-3
              "
            >
              <p class="font-bold text-2xl text-gray-400 dark:text-white">
                {{ gig.basic.price }}$
              </p>
              <div class="flex justify-center items-center"></div>
            </div>
          </div>
        </div>
        <router-link
          to="/gig/create"
          type="button"
          class="
            relative
            flex flex-col
            justify-center
            items-center
            w-full
            border-2 border-gray-300 border-dashed
            rounded-lg
            p-12
            text-center
            hover:border-gray-400
            focus:outline-none
            focus:ring-2
            focus:ring-offset-2
            focus:ring-prgreen-500
          "
        >
          <svg
            class="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            aria-hidden="true"
          >
            <path
              vector-effect="non-scaling-stroke"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
            />
          </svg>
          <span
            class="mt-2 block text-sm font-medium text-gray-900 dark:text-white"
          >
            Create a new Gig
          </span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from "vuex";
import { reactive } from "@vue/reactivity";
import Avatar from "@/components/Avatar/Avatar.component.vue";
import { computed } from "@vue/runtime-core";

export default {
  components: {
    Avatar,
  },
  setup() {
    let store = useStore();
    let gigs = reactive([]);
    let myId = computed(() => store.getters["auth/id"]);
    store
      .dispatch("Gig/getUserGigs", myId.value)
      .then((result) => {
        let dataArray = Object.values(result);
        dataArray.forEach((element) => {
          console.log(element.gig.images);
          gigs.push({
            id: element.gig.data.id,
            title: element.gig.data.title,
            basic: JSON.parse(element.gig.data.basic),
            username: element.gig.user.name,
            userId: element.gig.user.id,
            userAvatar: element.gig.user.avatar,
            Image: element.gig.images[0].url,
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
    let preurl = `${process.env.VUE_APP_API_URL}`;

    return {
      gigs,
      preurl,
    };
  },
};
</script>
