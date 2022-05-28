
<template>
  <div class="max-w-md mx-auto sm:max-w-3xl">
    <div>
      <div class="flex flex-col justify-center items-center">
        <AcademicCapIcon v-if="dataTypeComp == 'education'" class="w-10 h-10 dark:text-prblue-50" />
        <PuzzleIcon v-if="dataTypeComp == 'skills'" class="w-10 h-10 dark:text-prblue-50" />
        <BriefcaseIcon v-if="dataTypeComp == 'experience'" class="w-10 h-10 dark:text-prblue-50" />

        <BadgeCheckIcon
          v-if="dataTypeComp == 'certifications'"
          class="w-10 h-10 dark:text-prblue-50"
        />
        <h2 class="mt-2 text-lg font-medium text-gray-900 dark:text-prblue-50">
          Add {{ dataTypeComp }}
        </h2>
      </div>
      <form class="m-6 sm:flex sm:items-center" action="#">
        <div class="flex-1">
          <input
            type="text"
            v-model="data"
            :name="dataTypeComp"
            :id="dataTypeComp"
            class="
              appearance-none
              block
              w-full
              pl-5
              pr-20
              py-3
              border border-gray-300
              rounded-md
              shadow-sm
              placeholder-gray-400
              focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500
              sm:text-sm
            "
          />
        </div>
        <div class="mt-3 sm:mt-0 sm:ml-4 sm:flex-shrink-0">
          <button
            class="
              block
              w-full
              text-center
              px-4
              py-3
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
            @click.prevent="addToArray"
          >
            Add
          </button>
        </div>
      </form>
    </div>
    <div class="m-10">
      <h3 class="text-xs font-semibold text-gray-500 uppercase tracking-wide">
        {{ dataType }}
      </h3>
      <ul role="list" class="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <li v-for="(person, personIdx) in people" :key="personIdx">
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
   <AcademicCapIcon v-if="dataTypeComp == 'education'" class="w-7 h-7" />
        <PuzzleIcon v-if="dataTypeComp == 'skills'" class="w-7 h-7" />
        <BriefcaseIcon v-if="dataTypeComp == 'experience'" class="w-7 h-7" />

        <BadgeCheckIcon
          v-if="dataTypeComp == 'certifications'"
          class="w-7 h-7"
        />              </span>

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
  </div>
</template>

<script>
import {
  AcademicCapIcon,
  PuzzleIcon,
  BriefcaseIcon,
  BadgeCheckIcon,
} from "@heroicons/vue/solid";
import { reactive, ref } from "@vue/reactivity";
import { computed, watchEffect } from "@vue/runtime-core";
import { uuid } from "vue-uuid";

export default {
  components: { AcademicCapIcon, PuzzleIcon, BriefcaseIcon ,BadgeCheckIcon},
  props: ["DataType", "Data"],

  setup(props, { emit }) {
    let people = reactive([]);

    const dataTypeComp = computed(() => props.DataType);
    watchEffect(() => {
      if (dataTypeComp.value === "education") {
        let educationdb = computed(() => props.Data.education.value);

        let educationdbdata = ref(educationdb.value);



 if (educationdbdata.value.length !== null) {
        for (let i = 0; i < educationdbdata.value.length; i++) {
          people.push(educationdbdata.value[i]);
        }
        }
      }
      if (dataTypeComp.value === "experience") {
        let experiencedb = computed(() => props.Data.experience.value);

        let experiencedbdata = ref(experiencedb.value);
        if (experiencedbdata.value.length !== null) {
           for (let i = 0; i < experiencedbdata.value.length; i++) {
          people.push(experiencedbdata.value[i]);
        }
        }


      }

      if (dataTypeComp.value === "skills") {
        let skillsdb = computed(() => props.Data.skills.value);

        let skillsdbdata = ref(skillsdb.value);
        if (skillsdbdata.value.length !== null) {
            for (let i = 0; i < skillsdbdata.value.length; i++) {
          people.push(skillsdbdata.value[i]);
        }
        }

      }

      if (dataTypeComp.value === "certifications") {
        let certificationsdb = computed(() => props.Data.certifications.value);

        let certificationsdbdata = ref(certificationsdb.value);
        if (certificationsdbdata.value.length !== null) {
           for (let i = 0; i < certificationsdbdata.value.length; i++) {
          people.push(certificationsdbdata.value[i]);
        }
        }

      }
    });

    let data = ref("");

    const addToArray = () => {
      if (dataTypeComp.value === "education" && data.value.length > 0) {
        people.push({
          id: uuid.v1(),
          name: data.value,
          role: "2000-2022",
        });

        emit("sendEducation", {
          people,
        });
      }

      if (dataTypeComp.value === "skills" && data.value.length > 0) {
        people.push({
          id: uuid.v1(),
          name: data.value,
          role: "2000-2022",
        });

        emit("sendSkills", {
          people,
        });
      }

      if (dataTypeComp.value === "experience" && data.value.length > 0) {
        people.push({
          id: uuid.v1(),
          name: data.value,
          role: "2000-2022",
        });
        emit("sendExperience", {
          people,
        });
      }

      if (dataTypeComp.value === "certifications" && data.value.length > 0) {
        people.push({
          id: uuid.v1(),
          name: data.value,
          role: "2000-2022",
        });

        emit("sendCertifications", {
          people,
        });
      }
    };
    watchEffect(() => {
      emit("sendSkills", {
        people,
      });
      emit("sendEducation", {
        people,
      });
      emit("sendExperience", {
        people,
      });
      emit("sendCertifications", {
        people,
      });
    });

    return {
      people,
      addToArray,
      dataTypeComp,
      data,
    };
  },
};
</script>
