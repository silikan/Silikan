<template>
  <div class="bg-white" >
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">

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
  <div class="flex flex-col animate-pulse">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div
          class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg"
        >
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
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
                  "
                >
                  <div class="w-14 bg-gray-300 h-2 rounded-md mt-1"></div>
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
                  "
                >
                  <div class="w-14 bg-gray-300 h-2 rounded-md mt-1"></div>
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
                  "
                >
                  <div class="w-14 bg-gray-300 h-2 rounded-md mt-1"></div>
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
                  "
                >
                  <div class="w-14 bg-gray-300 h-2 rounded-md mt-1"></div>
                </th>
                <th scope="col" class="relative px-6 py-3">
                  <span class="sr-only">
                    <div class="w-14 bg-gray-300 h-2 rounded-md mt-1"></div>
                  </span>
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">
              <tr v-for="person in people" :key="person.email">
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="flex items-center">
                    <div class="flex-shrink-0 h-10 w-10">
                      <div class="w-12 bg-gray-300 h-12 rounded-full"></div>
                    </div>
                    <div class="ml-4">
                      <div class="text-sm font-medium text-gray-900">
                        <div class="w-14  bg-gray-300 h-2 rounded-md"></div>
                      </div>
                      <div class="text-sm text-gray-500">
                        <div class="w-14 bg-gray-300 h-2 rounded-md mt-1"></div>
                      </div>
                    </div>
                  </div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="w-14 bg-gray-300 h-2 rounded-md"></div>
                  <div class="w-14 bg-gray-300 h-2 rounded-md mt-1"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="w-14 bg-gray-300 h-2 rounded-md"></div>
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div class="w-14 bg-gray-300 h-2 rounded-md"></div>
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
                  <div class="w-14 bg-gray-300 h-2 rounded-md"></div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>

</template>

<script>
const people = 5

export default {
  setup() {
    return {
      people,
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
