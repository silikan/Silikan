<template>
  <div class=" bg-gray-50 dark:bg-prblue-500">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
      <div class="flex w-full items-center justify-between mb-5">
        <div
          class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
        >
          <h2 class="text-3xl font-extrabold tracking-tight hidden md:block dark:text-white">
            Requests
          </h2>
        </div>
        <div class="flex items-center flex-1 md:flex-none">
          <Search />
          <AdjustmentsIcon class="h-5 w-5 border-black rounded-md" />
        </div>
      </div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 scrollbar">
          <div
            class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8"
          >
            <div
              class="
                shadow
                overflow-hidden
                border-b border-gray-200
                sm:rounded-lg
              "
            >
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50 dark:bg-prblue-500">
                  <tr>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                         dark:text-white
                      "
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                        dark:text-white
                      "
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                        dark:text-white
                      "
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      class="
                        px-6
                        py-3
                        text-left text-xs
                        font-medium
                        text-gray-500
                        uppercase
                        tracking-wider
                        dark:text-white
                      "
                    >
                      Duration
                    </th>
                    <th scope="col" class="relative px-6 py-3">
                      <span class="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200 dark:bg-prblue-500">
                  <tr v-for="request in requests" :key="request.id">
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="flex items-center">
                        <div class="flex-shrink-0 h-10 w-10">
                          <Avatar
                            v-if="request.username"
                            :url="request.userAvatar"
                            :name="request.username"
                          />
                        </div>
                        <div class="ml-4">
                          <div class="text-sm font-medium dark:text-white text-gray-900">
                            {{ request.username }}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900 dark:text-white">
                        {{ request.title }}
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="
                          px-2
                          inline-flex
                          text-xs
                          leading-5
                          font-semibold
                          rounded-full
                          bg-prgreen-600
                          text-prgreen-50
                        "
                      >
                        {{ request.price }} DZD
                      </span>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <span
                        class="
                          px-2
                          inline-flex
                          text-xs
                          leading-5
                          font-semibold
                          rounded-full
                          bg-prgreen-600
                          text-prgreen-50
                        "
                      >
                        {{ request.duration }} Days
                      </span>
                    </td>
                    <td
                      class="
                        px-6
                        py-4
                        whitespace-nowrap
                        text-right text-sm
                        font-medium
                      "
                    >
                      <router-link
                        :to="`/request/${request.id}`"
                        href="#"
                        class="text-prgreen-600 hover:text-prgreen-900"
                        >Check</router-link
                      >
                    </td>
                  </tr>



                </tbody>
              </table>
                <router-link
                      to="/request/create"
                      type="button"
                      class="
                        w-full
                        flex flex-col
                        justify-center
                        items-center
                        border-2 border-gray-300 border-dashed
                        rounded-lg


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
                        class="mt-2 block text-sm font-medium text-gray-900"
                      >
                        Create a new Request
                      </span>
                    </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>



<script>
const people = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    role: "Admin",
    email: "jane.cooper@example.com",
  },
  {
    name: "Cody Fisher",
    title: "Product Directives Officer",
    role: "Owner",
    email: "cody.fisher@example.com",
  },
  // More people...
];
import { useStore } from "vuex";
import { reactive } from "@vue/reactivity";
import { computed } from "@vue/runtime-core";
import Avatar from "@/components/Avatar/Avatar.component.vue";

export default {
  components: {
    Avatar,
  },
  setup() {
    let store = useStore();
    let requests = reactive([]);

    let myId = computed(() => store.getters["auth/id"]);
    store
      .dispatch("Request/getUserRequests", myId.value)
      .then((result) => {
        let dataArray = Object.values(result);
        dataArray.forEach((element) => {
          requests.push({
            id: element.request.data.id,
            title: element.request.data.title,
            price: element.request.data.price,
            duration: element.request.data.duration,
            username: element.request.user.name,
            userId: element.request.user.id,
            userAvatar: element.request.user.avatar,
          });
        });
        console.log(requests);
      })
      .catch((err) => {
        console.log(err);
      });

    let preurl = `${process.env.VUE_APP_API_URL}`;

    return {
      people,
      requests,
      preurl,
    };
  },
};
</script>
<style>
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
