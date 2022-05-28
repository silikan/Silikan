<template>
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <Carousel
      :value="people"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      :autoplayInterval="1500"
      :circular="true"
    >
      <template #item="handyman">
        <div class="space-y-12 mb-10">
          <ul role="list" class="space-y-12 mx-5">
            <li>
              <div class="space-y-4">
                <div class="aspect-w-3 aspect-h-2">
                  <router-link :to="`/user/${handyman.data.id}`">
                    <img
                      class="
                        md:h-60 md:w-96
                        object-cover
                        shadow-lg
                        rounded-lg
                        h-69
                      "
                      :src="handyman.data.avatar_svg"
                      v-if="handyman.data.avatarWithoutLocalhost === null"
                      alt=""
                    />
                    <img
                      class="
                        md:h-60 md:w-96
                        object-cover
                        shadow-lg
                        rounded-lg
                        h-69
                      "
                      :src="handyman.data.avatar"
                      v-if="handyman.data.avatarWithoutLocalhost !== null"
                      alt=""
                    />
                  </router-link>
                </div>
                <div class="flex justify-between">
                  <div class="space-y-2">
                    <div class=" text-xl leading-6 font-medium space-y-1">
                      <h3 class="">{{ handyman.data.name }}</h3>
                      <p class="text-sm font-bold text-prgreen-600">
                        @{{ handyman.data.username }}
                      </p>
                    </div>
                    <ul role="list" class="flex space-x-5">
                      <li>
                        <a
                          :href="handyman.data.twitterUrl"
                          class="text-gray-400 hover:text-gray-500"
                        >
                          <span class="sr-only">Twitter</span>
                          <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84"
                            />
                          </svg>
                        </a>
                      </li>
                      <li>
                        <a
                          :href="handyman.data.linkedinUrl"
                          class="text-gray-400 hover:text-gray-500"
                        >
                          <span class="sr-only">LinkedIn</span>
                          <svg
                            class="w-5 h-5"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="self-end">
                    <router-link :to="`/user/${handyman.data.id}`">
                      <button
                        class="
                          inline-flex
                          items-center
                          px-12
                          py-1
                          border border-transparent
                          text-sm
                          font-medium
                          rounded-full
                          shadow-sm
                          text-white
                          bg-prgreen-600
                          hover:bg-prgreen-700
                          focus:outline-none
                          focus:ring-2
                          focus:ring-offset-2
                          focus:ring-prgreen-500
                        "
                      >
                        Hire
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </template>
    </Carousel>
  </div>
</template>

<script>
import Carousel from "primevue/carousel";
import { useStore } from "vuex";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-initials-sprites";
import { reactive, ref } from "@vue/reactivity";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import { computed } from "@vue/runtime-core";

export default {
  components: {
    Carousel,
  },
  setup() {
    let avatar_svg, avatar, avatarWithoutLocalhost, OathAvatar;

    let store = useStore();
    let handymen = ref([]);
    const responsiveOptions = ref([
      {
        breakpoint: "1024px",
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: "768px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "768px",
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: "560px",
        numVisible: 1,
        numScroll: 1,
      },
    ]);
    let users = ref([]);
    store.dispatch("BuyerFeed/getThreeRandomHandymen").then((res) => {
      console.log(res.data);
      users.value = res.data;
    });
    let people = computed(() => {
      let data = reactive([]);

      users.value.forEach((user) => {
        avatar_svg = createAvatar(style, {
          seed: user.name,
          dataUri: true,
          // ... and other options
        });
        avatar = `${process.env.VUE_APP_API_URL}/${user.avatar}`;
        OathAvatar = user.avatar;

        avatarWithoutLocalhost = user.avatar;

        if (user.avatar !== null) {
          if (
            user.avatar.includes("googleusercontent.com") ||
            user.avatar.includes("graph.facebook.com") ||
            user.avatar.includes("licdn.com")
          ) {
            avatar = OathAvatar;
          }
        }

        data.push({
          id: user.id,
          name: user.name,
          avatar_svg: avatar_svg,
          avatar: avatar,
          avatarWithoutLocalhost: avatarWithoutLocalhost,
          email: user.email,
          username: user.username,
        });
      });
      return data;
    });
    let preurl = `${process.env.VUE_APP_API_URL}`;
    return {
      handymen,
      preurl,
      responsiveOptions,
      people,
      avatar_svg,
      avatar,
      avatarWithoutLocalhost,
      OathAvatar,
    };
  },
};
</script>

<style>
.p-carousel-indicators {
  display: none;
}
</style>
