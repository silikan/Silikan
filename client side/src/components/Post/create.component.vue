<!--
  This example requires Tailwind CSS v2.0+

  This example requires some changes to your config:

  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <form action="#" class="relative">
    <div
      class="
        border border-gray-300
        rounded-lg
        shadow-sm
        overflow-hidden
        focus-within:border-prgreen-500
        focus-within:ring-1
        focus-within:ring-prgreen-500
      "
    >
      <label for="title" class="sr-only">Title</label>
      <input
        type="text"
        name="title"
        id="title"
        v-model="title"
        :class="[
          titleErrorMessage
            ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm  w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
            : ' block w-full px-3 py-2 placeholder-gray-400   sm:text-sm',
        ]"
        placeholder="Title"
      />
      <label for="content" class="sr-only">content</label>
      <textarea
        rows="2"
        name="content"
        id="content"
        v-model="content"
        :class="[
          contentErrorMessage
            ? 'overflow-auto block w-full py-3 h-40 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-red-300  placeholder-red-400 text-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500'
            : 'overflow-auto block w-full py-3 h-40 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 -sm placeholder-gray-400 focus:outline-none ',
        ]"
        placeholder="Write a content..."
      />
        <div aria-hidden="true">
        <div class="py-2">
          <div class="h-1" />
        </div>
        <div class="h-px" />
        <div class="py-2">
          <div class="py-px">
            <div class="h-1" />
          </div>
        </div>
      </div>
    </div>

    <div class="absolute bottom-0 inset-x-px">
      <div
        class="
          border-t border-gray-200
          px-2
          py-2
          flex
          justify-between
          items-center
          space-x-3
          sm:px-3
        "
      >
        <div class="flex cursor-pointer">
          <div class="rounded-md">
            <div
              class="
                cursor-pointer
                group
                relative
                rounded-md
                py-2
                px-3
                flex
                items-center
                justify-center
              "
            >
              <label
                for="mobile-user-photo"
                class="
                  relative
                  text-sm
                  leading-4
                  font-medium
                  text-gray-700
                  pointer-events-none
                "
              >
                <div
                  type="div"
                  class="
                    -ml-2
                    -my-2
                    rounded-full
                    px-3
                    py-2
                    inline-flex
                    items-center
                    text-left text-gray-400
                    group
                  "
                >
                  <PhotographIcon
                    class="
                      cursor-pointer
                      -ml-1
                      h-5
                      w-5
                      mr-2
                      group-hover:text-gray-500
                    "
                    aria-hidden="true"
                  />
                  <span
                    class="
                      text-sm text-gray-500
                      group-hover:text-gray-600
                      italic
                    "
                    >Attach an Image</span
                  >
                </div>
              </label>
              <input
                id="post-image"
                name="post-image"
                type="file"
                :fileTypes="['image/*']"
                endpoint="/blog/post/image"
                @change="fileChange"
                :accept="fileTypes"
                class="
                  absolute
                  w-full
                  h-full
                  opacity-0
                  cursor-pointer
                  border-gray-300
                  rounded-md
                "
              />
            </div>
          </div>
        </div>
        <div class="w-full flex-1"></div>
        <Listbox as="div" v-model="assigned" class="flex-shrink-0">
          <ListboxLabel class="sr-only"> Assign </ListboxLabel>
          <div class="relative">
            <ListboxButton
              class="
                relative
                inline-flex
                items-center
                rounded-full
                py-2
                px-2
                bg-gray-50
                text-sm
                font-medium
                text-gray-500
                whitespace-nowrap
                hover:bg-gray-100
                sm:px-3
                dark:bg-prblue-600
              "
            >
              <TagIcon
                class="flex-shrink-0 h-5 w-5 text-gray-300 sm:-ml-1"
                aria-hidden="true"
              />



              <span
                :class="[
                  assigned.value === null ? '' : 'text-gray-900',
                  'hidden truncate sm:ml-2 sm:block',
                ]"
                >{{ assigned.value === null ? "Assign" : assigned.name }}</span
              >
            </ListboxButton>

            <transition
              leave-active-class="transition ease-in duration-100"
              leave-from-class="opacity-100"
              leave-to-class="opacity-0"
            >
              <ListboxOptions
                class="
                  absolute
                  right-0
                  z-10
                  mt-1
                  w-52
                  bg-white
                  shadow
                  max-h-56
                  rounded-lg
                  py-3
                  text-base
                  ring-1 ring-black ring-opacity-5
                  overflow-auto
                  focus:outline-none
                  sm:text-sm
                "
              >
                <ListboxOption
                  as="template"
                  v-for="assignee in assignees"
                  :key="assignee.value"
                  :value="assignee"
                  v-slot="{ active }"
                >
                  <li
                    :class="[
                      active ? 'bg-gray-100' : 'bg-white',
                      'cursor-pointer select-none relative py-2 px-3',
                    ]"
                  >
                    <div class="flex items-center">
                      <img
                        v-if="assignee.avatar"
                        :src="assignee.avatar"
                        alt=""
                        class="flex-shrink-0 h-5 w-5 rounded-full"
                      />
                      <TagIcon
                        v-else
                        class="flex-shrink-0 h-5 w-5 text-gray-400"
                        aria-hidden="true"
                      />
                      <span class="ml-3 block font-medium truncate">
                        {{ assignee.name }}
                      </span>
                    </div>
                  </li>
                </ListboxOption>
              </ListboxOptions>
            </transition>
          </div>
        </Listbox>
        <div class="flex-shrink-0">
          <button
            type="submit"
            class="
              inline-flex
              items-center
              px-4
              py-2
              border border-transparent
              text-sm
              font-medium
              rounded-md
              shadow-sm
              text-white
              bg-prgreen-600
              hover:bg-prgreen-700
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-prgreen-500
            "
            @click.prevent="createPost"
          >
            Create
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
import {
  Listbox,
  ListboxButton,
  ListboxLabel,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

import { PhotographIcon, TagIcon } from "@heroicons/vue/solid";
import { useField } from "vee-validate";
import * as yup from "yup";
import FileService from "@/services/FileService";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";
import { watchEffect } from '@vue/runtime-core';
const assignees = [
  {
    name: "Other",
    value: "Other",
  },
  { name: "Cleaning", value: "Cleaning" },
  {
    name: "Cooking",
    value: "Cooking",
  },
  {
    name: "Plumbing",
    value: "Plumbing",
  },
  {
    name: "Moving",
    value: "Moving",
  },
  {
    name: "Electrical",
    value: "Electrical",
  },
  {
    name: "Painting",
    value: "Painting",
  },
  {
    name: "Carpentry",
    value: "Carpentry",
  },
  {
    name: "Building",
    value: "Building",
  },
  {
    name: "Massage",
    value: "Massage",
  },
  {
    name: "Tutoring",
    value: "Tutoring",
  },
  {
    name: "Woodwork",
    value: "Woodwork",
  },
  {
    name: "Cooking",
    value: "Cooking",
  },

];

export default {
  components: {
    PhotographIcon,
    Listbox,
    ListboxButton,
    ListboxLabel,
    ListboxOption,
    ListboxOptions,
    TagIcon,
  },
  setup() {
    let store = useStore();

    let titleValidation = yup
      .string()
      .min(3, "Title must be at least 3 characters")
      .max(50, "Title must be less than 50 characters")
      .required("Title is required");
    let contentValidation = yup
      .string()
      .min(10, "content must be at least 10 characters")
      .max(500, "content must be less than 255 characters")
      .required("content is required");

    const { value: title, errorMessage: titleErrorMessage } = useField(
      "title",
      titleValidation
    );

    const { value: content, errorMessage: contentErrorMessage } = useField(
      "content",
      contentValidation
    );

    let file;

    const fileChange = (event) => {
      file = event.target.files[0];
    };

    let endpoint = "/blog/post/image";

    const uploadFile = (post_id) => {
      const payload = {};
      const formData = new FormData();
      formData.append("post_image", file);
      payload.file = formData;
      payload.endpoint = endpoint;

      FileService.uploadPostFile(payload, post_id)
        .then(() => {
          console.log("fileUploaded");
        })
        .catch(() => console.log("error"));
    };
    const assigned = ref(assignees[0]);

    let createPost = () => {
      let post = {
        title: title.value,
        content: content.value,
        category : assigned.value,
      };
      store.dispatch("Blog/createPost", post).then((result) => {
        uploadFile(result.id);
        store.dispatch("Blog/getAllPostsPaginated", 1)
      });

    };

watchEffect(() => {
  console.log(assigned.value);
});
    return {
      title,
      titleErrorMessage,
      content,
      contentErrorMessage,
      file,
      uploadFile,
      fileChange,
      createPost,
      assigned,
      assignees,
    };
  },
};
</script>
