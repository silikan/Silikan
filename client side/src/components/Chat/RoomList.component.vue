<template>
  <div class="px-6 lg:px-8 my-10 mx-20 border rounded">
    <div class="bg-white px-4 py-10 border-b border-gray-200 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">Rooms</h3>
    </div>
    <div class="bg-white overflow-hidden sm:rounded-md">
      <div class="px-4 py-4 sm:px-6">
        <ul role="list" class="divide-y divide-gray-200 w-full">
          <li
            v-for="person in people"
            :key="person.email"
            class="flex items-center justify-between py-5"
          >
            <div class="flex">
                    <ChatAvatar :UserId="person.id" class="mr-2" />
              <div class="ml-3">
                <p class="text-sm font-medium text-gray-900">
                  {{ person.name }}
                </p>
                <p class="text-sm text-gray-500">{{ person.email }}</p>
              </div>
            </div>

            <div class="sm:mt-0 sm:ml-5">
              <router-link
                class="
                  flex-shrink-0
                  sm:w-full
                  flex-1
                  h-full
                  inline-flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                  text-black
                  hover:border-transparent
                  cursor-pointer
                 rotate-6
                "
                tag="button"
              :to="`/room/${person.roomId}`"
              >
                <PaperAirplaneIcon
                  class="btn-chat h-5 w-5 transform rotate-90"
                  aria-hidden="true"
                />
              </router-link>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { PaperAirplaneIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { computed, ref } from '@vue/runtime-core';
import ChatAvatar from "@/components/Chat/ChatAvatar.component";


export default {
  components: {
    PaperAirplaneIcon,
    ChatAvatar
  },
  setup() {
    const people = ref([])

    const store = useStore();

    const authUser = computed(() => store.getters["auth/authUser"]);

    let userRooms = store.dispatch("Chat/getUserRooms", authUser.value.id).then((result) => {
    result.forEach((room) => {
      store.dispatch("Chat/getRoomUsers", room.id).then((res) => {

       res.data.filter((user) => user.id !== authUser.value.id).forEach((user) => {
         console.log(user);

         people.value.push({
           name: user.name,
           email: user.email,
           id: user.id,
           roomId: room.id
         });
       });
      });

    });
    });



    return {
      people,
      userRooms,
    };
  },
};
</script>
