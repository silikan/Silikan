<template>

  <div class="flex flex-col md:p-10 m-5 sm:m-1">
    <div class="profile flex justify-between flex-col ml-5 md:ml-0 mt-10">
      <nav class="flex mb-3" aria-label="Breadcrumb">
        <ol role="list" class="flex items-center space-x-4">
          <li>
            <div>
              <router-link to="/gigs" class="text-gray-400 hover:text-gray-500">
                <HomeIcon class="flex-shrink-0 h-5 w-5" aria-hidden="true" />
                <span class="sr-only">Home</span>
              </router-link>
            </div>
          </li>
          <li v-for="page in pages" :key="page.name">
            <div class="flex items-center">
              <ChevronRightIcon
                class="flex-shrink-0 h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
              <router-link
                to="/categories"
                class="
                  ml-4
                  text-sm
                  font-medium
                  text-gray-500
                  hover:text-gray-700
                "
                :aria-current="page.current ? 'page' : undefined"
                >{{ page.title }}</router-link
              >
            </div>
          </li>
        </ol>
      </nav>
      <div class="flex text-gray-400 items-center">
        <EyeIcon
          class="text-gray-400 flex-shrink-0 h-5 w-5 mr-2"
          aria-hidden="true"
        />
        <span>{{ views }}</span>
      </div>

      <h1 class="mb-2 text-3xl font-medium">{{ title }}</h1>
      <a href="#" class="flex-shrink-0 group block mb-5">
        <div class="flex items-center">
          <div>
            <Avatar v-if="name" :url="avatar" :name="name" />
          </div>
          <div class="ml-3">
            <p
              class="
                text-sm
                font-medium
                text-gray-700
                group-hover:text-gray-900
              "
            >
              {{ name }}
            </p>
            <router-link :to="`/user/${userId}`">
              <p
                class="
                  text-xs
                  font-medium
                  text-gray-500
                  group-hover:text-gray-700
                "
              >
                View profile
              </p>
            </router-link>
          </div>
        </div>
      </a>
    </div>

    <div
      id="carouselExampleControls"
      class="carousel slide relative md:mb-3 h-full md:h-auto"
      data-bs-ride="carousel"
    >
      <el-carousel
        :interval="4000"
        class="hidden lg:block"
        type="card"
        height="30rem"
      >
        <el-carousel-item v-for="img in gigImages" :key="img.id">
          <img
            :src="`${preurl}/${img.url}`"
            class="block w-full"
            alt="Wild Landscape"
          />
        </el-carousel-item>
      </el-carousel>

      <el-carousel
        :interval="4000"
        class="overflow-hidden lg:hidden"
        autoplay="false"
        height="30rem"
      >
        <el-carousel-item v-for="img in gigImages" :key="img.id">
          <img
            :src="`${preurl}/${img.url}`"
            class="block w-full"
            alt="Wild Landscape"
          />
        </el-carousel-item>
      </el-carousel>
    </div>

    <div class="container mx-auto sm:px-6 lg:px-8 my-10">
      <h4 class="text-lg font-bold">Description</h4>
      <div class="mt-5 prose prose-indigo text-gray-500">
        <p class="mt-1">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { ChevronRightIcon, HomeIcon, EyeIcon } from "@heroicons/vue/solid";
import Avatar from "@/components/Avatar/Avatar.component.vue";

import "tw-elements";
import { computed, ref } from "@vue/runtime-core";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  components: {
    ChevronRightIcon,
    HomeIcon,
    Avatar,
    EyeIcon,
  },
  props: ["images"],
  setup(props) {
    let store = useStore();
    let route = useRoute();
    let id = route.params.id;

    let pages = ref([]);
    store.dispatch("Gig/getGigCategory", id).then(async (result) => {
      console.log(result[0].title);
      pages.value = result
    });

    let gigImages = computed(() => {
      return props.images;
    });
    //`${process.env.VUE_APP_API_URL}`
    let gigImagesData = computed(() => {
      return gigImages.value;
    });

    let category = ref(null);

    let description = ref("");
    let title = ref("");
    let name = ref(null);
    let avatar = ref(null);
    let userId = ref(null);
    let views = ref(null);
    store
      .dispatch("Gig/getGig", id)
      .then((result) => {
        console.log(result);
        description.value = result.description;
        title.value = result.title;
        views.value = result.total_views;
        category.value = result.category;
      })
      .catch((err) => {
        console.log(err);
      });

    store
      .dispatch("Gig/getGigUser", id)
      .then((result) => {
        name.value = result.name;
        avatar.value = result.avatar;
        userId.value = result.id;
      })
      .catch((err) => {
        console.log(err);
      });

    let preurl = `${process.env.VUE_APP_API_URL}`;

    let carouselType = "";
    return {
      pages,
      gigImages,
      gigImagesData,
      preurl,
      carouselType,
      description,
      title,
      name,
      avatar,
      userId,
      views,
      category,
    };
  },
};
</script>
<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel__item {
  height: auto;
}
</style>
