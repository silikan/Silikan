<template>
  <div class="px-4 py-5 sm:px-0 sm:py-0 mt-10 lg:flex lg:flex">
    <dl>
      <div class="sm:flex sm:px-6 sm:py-5 px-4 py-5 sm:px-6">
        <dt
          class="
            text-sm
            font-medium
            text-gray-500
            sm:w-40 sm:flex-shrink-0
            lg:w-48
          "
        >
          Education
        </dt>
        <dd class="mt-1 text-md text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          <div class="m-10" v-if="education !== null && education.length > 0">
            <ul role="list" class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <li v-for="person in education" :key="person.id">
                <button
                  type="button"
                  class="
                    group
                    p-2
                    w-full
                    flex
                    items-center
                    justify-between
                    rounded-full
                    border border-gray-300
                    shadow-sm
                    space-x-3
                    text-left
                    hover:bg-gray-50
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                  "
                >
                  <span class="min-w-0 flex-1 flex items-center space-x-3">
                    <span class="block flex-shrink-0">
                      <AcademicCapIcon class="w-7 h-7" />
                    </span>

                    <span class="block min-w-0 flex-1">
                      <span
                        class="block text-sm font-medium text-gray-900 truncate"
                        >{{ person.name }}</span
                      >
                      <span
                        class="block text-sm font-medium text-gray-500 truncate"
                        >{{ person.role }}</span
                      >
                    </span>
                  </span>
                  <span
                    class="
                      flex-shrink-0
                      h-10
                      w-10
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                  </span>
                </button>
              </li>
            </ul>
          </div>
          <div v-if="education === null || education.length === 0">
            <div
              class="flex font-bold items-center text-prgreen-800"
            >

              <span class="">No Education</span>
            </div>
          </div>
        </dd>
      </div>
      <div class="sm:flex sm:px-6 sm:py-5 px-4 py-5 sm:px-6">
        <dt
          class="
            text-sm
            font-medium
            text-gray-500
            sm:w-40 sm:flex-shrink-0
            lg:w-48
          "
        >
          Skills
        </dt>
        <dd class="mt-1 text-md text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          <div class="m-10" v-if="skills !== null && skills.length > 0">
            <ul role="list" class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <li v-for="person in skills" :key="person.id">
                <button
                  type="button"
                  class="
                    group
                    p-2
                    w-full
                    flex
                    items-center
                    justify-between
                    rounded-full
                    border border-gray-300
                    shadow-sm
                    space-x-3
                    text-left
                    hover:bg-gray-50
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                  "
                >
                  <span class="min-w-0 flex-1 flex items-center space-x-3">
                    <span class="block flex-shrink-0">
                      <PuzzleIcon class="w-7 h-7" />
                    </span>

                    <span class="block min-w-0 flex-1">
                      <span
                        class="block text-sm font-medium text-gray-900 truncate"
                        >{{ person.name }}</span
                      >
                      <span
                        class="block text-sm font-medium text-gray-500 truncate"
                        >{{ person.role }}</span
                      >
                    </span>
                  </span>
                  <span
                    class="
                      flex-shrink-0
                      h-10
                      w-10
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </dd>
        <div class="flex" v-if="skills === null || skills.length === 0">
          <div
            class="flex font-bold items-center text-prgreen-800"
            to="/edit/profile"
          >
            <span class="">No skills</span>
          </div>
        </div>
      </div>
      <div class="sm:flex sm:px-6 sm:py-5 px-4 py-5 sm:px-6">
        <dt
          class="
            text-sm
            font-medium
            text-gray-500
            sm:w-40 sm:flex-shrink-0
            lg:w-48
          "
        >
          Experience
        </dt>
        <dd class="mt-1 text-md text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          <div class="m-10" v-if="experience !== null && experience.length > 0">
            <ul role="list" class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <li v-for="person in experience" :key="person.id">
                <button
                  type="button"
                  class="
                    group
                    p-2
                    w-full
                    flex
                    items-center
                    justify-between
                    rounded-full
                    border border-gray-300
                    shadow-sm
                    space-x-3
                    text-left
                    hover:bg-gray-50
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                  "
                >
                  <span class="min-w-0 flex-1 flex items-center space-x-3">
                    <span class="block flex-shrink-0">
                      <BriefcaseIcon class="w-7 h-7" />
                    </span>

                    <span class="block min-w-0 flex-1">
                      <span
                        class="block text-sm font-medium text-gray-900 truncate"
                        >{{ person.name }}</span
                      >
                      <span
                        class="block text-sm font-medium text-gray-500 truncate"
                        >{{ person.role }}</span
                      >
                    </span>
                  </span>
                  <span
                    class="
                      flex-shrink-0
                      h-10
                      w-10
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </dd>
        <div class="flex" v-if="experience === null || experience.length === 0">
          <div
            class="flex font-bold items-center text-prgreen-800"
            to="/edit/profile"
          >
            <span class="">No experience</span>
          </div>
        </div>
      </div>
      <div class="sm:flex sm:px-6 sm:py-5 px-4 py-5 sm:px-6">
        <dt
          class="
            text-sm
            font-medium
            text-gray-500
            sm:w-40 sm:flex-shrink-0
            lg:w-48
          "
        >
          Certifications
        </dt>
        <dd class="mt-1 text-md text-gray-900 sm:mt-0 sm:ml-6 sm:col-span-2">
          <div
            class="m-10"
            v-if="certifications !== null && certifications.length > 0"
          >
            <ul role="list" class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <li v-for="person in certifications" :key="person.id">
                <button
                  type="button"
                  class="
                    group
                    p-2
                    w-full
                    flex
                    items-center
                    justify-between
                    rounded-full
                    border border-gray-300
                    shadow-sm
                    space-x-3
                    text-left
                    hover:bg-gray-50
                    focus:outline-none
                    focus:ring-2
                    focus:ring-offset-2
                    focus:ring-prgreen-500
                  "
                >
                  <span class="min-w-0 flex-1 flex items-center space-x-3">
                    <span class="block flex-shrink-0">
                      <BadgeCheckIcon class="w-7 h-7" />
                    </span>

                    <span class="block min-w-0 flex-1">
                      <span
                        class="block text-sm font-medium text-gray-900 truncate"
                        >{{ person.name }}</span
                      >
                      <span
                        class="block text-sm font-medium text-gray-500 truncate"
                        >{{ person.role }}</span
                      >
                    </span>
                  </span>
                  <span
                    class="
                      flex-shrink-0
                      h-10
                      w-10
                      inline-flex
                      items-center
                      justify-center
                    "
                  >
                  </span>
                </button>
              </li>
            </ul>
          </div>
        </dd>

        <div
          class="flex"
          v-if="certifications === null || certifications.length === 0"
        >
          <div
            class="flex font-bold items-center text-prgreen-800"
            to="/edit/profile"
          >
            <span class="">No certifications</span>
          </div>
        </div>
      </div>


    </dl>
  </div>
</template>

<script>
import {
  AcademicCapIcon,
  PuzzleIcon,
  BriefcaseIcon,
  BadgeCheckIcon,

} from "@heroicons/vue/solid";
import { computed } from "@vue/runtime-core";
export default {
  components: {
    AcademicCapIcon,
    PuzzleIcon,
    BriefcaseIcon,
    BadgeCheckIcon,


  },
  props: ["Data"],
  setup(props) {
    let authUserData = computed(() => {
      return props.Data;
    });
    let education = computed(() => {
      return JSON.parse(authUserData.value.education);
    });
    let experience = computed(() => {
      return JSON.parse(authUserData.value.experience);
    });
    let certifications = computed(() => {
      return JSON.parse(authUserData.value.certifications);
    });
    let skills = computed(() => {
      return JSON.parse(authUserData.value.skills);
    });


    return {
      authUserData,
      education,
      experience,
      certifications,
      skills,
    };
  },
};
</script>

<style>
</style>
