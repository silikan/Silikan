<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div
    class="
      border-t border-gray-200
      relative
      bg-gray-50
      pt-16
      pb-20
      px-4F
      sm:px-6

    "
  >
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
          v-for="post in posts"
          :key="post.title"
          class="
            flex flex-col
            rounded-lg
            border-x border-b border-gray-200
            overflow-hidden
               shadow-inner
          "
        >
          <div class="flex justify-center  relative w-full h-72  overflow-hidden">
              <img :src="post.imageUrl" class="w-full h-full object-center object-cover " />
            </div>
          <div class="flex-1 bg-white px-5  pt-5 flex flex-col justify-between  ">
            <div class="flex items-center ">
              <div class="flex-shrink-0">
                <a :href="post.author.href">
                  <span class="sr-only">{{ post.author.name }}</span>
                  <img
                    class="h-10 w-10 rounded-full"
                    :src="post.author.imageUrl"
                    alt=""
                  />
                </a>
              </div>
              <div class="ml-3">
                <p class="text-md font-medium text-gray-600">
                  <a :href="post.author.href" class="hover:underline">
                    {{ post.author.name }}
                  </a>
                </p>
              </div>
            </div>
            <div class="">
                <p class="text-md font-medium text-gray-500 mt-2">
                  {{ post.title }}
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
              <p class="font-bold text-2xl text-gray-400">35$</p>
              <div class="flex justify-center items-center">
                <button class="text-black font-bold  rounded-full">
                  <span class="sr-only">Button</span>
                  <span class="icon">
                    <ShoppingCartIcon
                      class="flex-shrink-0 mr-1.5 h-6 w-6 text-gray-400"
                    />
                  </span>
                </button>
                <button class="text-black font-bold rounded-full">
                  <span class="sr-only">Button</span>
                  <span class="icon">
                    <BookmarkIcon
                      class="flex-shrink-0 mr-1.5 h-6 w-6 text-gray-400"
                    />
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { BookmarkIcon, ShoppingCartIcon } from "@heroicons/vue/solid";
const posts = [

  {
    title: "I Will How to use search engine optimization to drive sales",
    href: "#",
    category: { name: "Video", href: "#" },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.",
    date: "Mar 10, 2022",
    datetime: "2022-03-10",
    imageUrl:
      "https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "4 min",
    author: {
      name: "Brenna Goyette",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },

];

export default {
  components: {
    BookmarkIcon,
    ShoppingCartIcon,
  },
  setup() {
    return {
      posts,
    };
  },
};
</script>
