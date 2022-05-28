<template>
  <div class="p-5">
    <div class="bg-white sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Delete All Users
        </h3>
        <div class="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Once you delete your account, you will lose all data associated with
            it.
          </p>
        </div>
        <div class="mt-5 flex justify-end">
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              border border-transparent
              font-medium
              rounded-md
              text-red-700
              bg-red-100
              hover:bg-red-200
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-red-500
              sm:text-sm
            "
            @click="assignValue('users')"
          >
            Delete All Users
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Delete All Gigs
        </h3>
        <div class="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Once you delete your account, you will lose all data associated with
            it.
          </p>
        </div>
        <div class="mt-5 flex justify-end">
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              border border-transparent
              font-medium
              rounded-md
              text-red-700
              bg-red-100
              hover:bg-red-200
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-red-500
              sm:text-sm
            "
            @click="assignValue('gigs')"
          >
            Delete All Gigs
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">
          Delete All Requests
        </h3>
        <div class="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Once you delete your account, you will lose all data associated with
            it.
          </p>
        </div>
        <div class="mt-5 flex justify-end">
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              border border-transparent
              font-medium
              rounded-md
              text-red-700
              bg-red-100
              hover:bg-red-200
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-red-500
              sm:text-sm
            "
            @click="assignValue('requests')"
          >
            Delete All Requests
          </button>
        </div>
      </div>
    </div>
    <div class="bg-white sm:rounded-lg">
      <div class="px-4 py-5 sm:p-6">
        <h3 class="text-lg leading-6 font-medium text-gray-900">Delete All</h3>
        <div class="mt-2 max-w-xl text-sm text-gray-500">
          <p>
            Once you delete your account, you will lose all data associated with
            it.
          </p>
        </div>
        <div class="mt-5 flex justify-end">
          <button
            type="button"
            class="
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              border border-transparent
              font-medium
              rounded-md
              text-red-700
              bg-red-100
              hover:bg-red-200
              focus:outline-none
              focus:ring-2
              focus:ring-offset-2
              focus:ring-red-500
              sm:text-sm
            "
            @click="assignValue('all')"
          >
            Delete All
          </button>
        </div>
      </div>
    </div>
  </div>
    <DeleteAllDialogue  :openData="open" :typeData="type" @toggleModal="toggleModal" />

</template>

<script>
import DeleteAllDialogue from '@/components/Dashboard/Admin/DeleteAllDialogue.component.vue'
import { ref } from '@vue/reactivity';
export default {
  components: {
    DeleteAllDialogue
  },
  setup() {


    let open = ref(false)
    let type = ref('')
    const assignValue = (data) => {
      //toggle the open state


      open.value = !open.value
      type.value = data
      console.log(type)
    }
    let toggleModal = (data) => {
      open.value = data
    }
    return {
      open,
      type,
      assignValue,
      toggleModal

    }
  }
};
</script>

<style>
</style>
