<!-- This example requires Tailwind CSS v2.0+ -->
<template>
 <div class="max-w-7xl mx-auto p-6 sm:px-6 lg:px-8">

  <RadioGroup v-model="selectedMailingLists">
    <RadioGroupLabel class="text-base font-medium text-gray-900">
      Payment Method
    </RadioGroupLabel>

    <div class="mt-4 grid grid-cols-1 gap-y-6 sm:grid-cols-3 sm:gap-x-4">
      <RadioGroupOption as="template" v-for="mailingList in mailingLists" :key="mailingList.id" :value="mailingList" v-slot="{ checked, active }">
        <div :class="[checked ? 'border-transparent' : 'border-gray-300', active ? 'ring-2 ring-prgreen-500' : '', 'relative bg-white border rounded-lg shadow-sm p-4 flex cursor-pointer focus:outline-none']">
          <div class="flex-1 flex">
            <div class="flex flex-col">
              <RadioGroupLabel as="span" class="block text-sm font-medium text-gray-900">
                {{ mailingList.title }}
              </RadioGroupLabel>
              <RadioGroupDescription as="span" class="mt-1 flex items-center text-sm text-gray-500">
                {{ mailingList.description }}
              </RadioGroupDescription>
              <RadioGroupDescription as="span" class="mt-6 text-sm font-medium text-gray-900">
                {{ mailingList.users }}
              </RadioGroupDescription>
            </div>
          </div>
          <CheckCircleIcon :class="[!checked ? 'invisible' : '', 'h-5 w-5 text-prgreen-600']" aria-hidden="true" />
          <div :class="[active ? 'border' : 'border-2', checked ? 'border-prgreen-500' : 'border-transparent', 'absolute -inset-px rounded-lg pointer-events-none']" aria-hidden="true" />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
   </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import { RadioGroup, RadioGroupDescription, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { CheckCircleIcon } from '@heroicons/vue/solid'
import { useStore } from 'vuex'

const mailingLists = [
  { id: 2, title: 'Cash On Delivery', description: 'You Guys Meet And Fight For Money', users: '100% effective' },
]

export default {
  components: {
    RadioGroup,
    RadioGroupDescription,
    RadioGroupLabel,
    RadioGroupOption,
    CheckCircleIcon,
  },
  setup() {
    const selectedMailingLists = ref(mailingLists[0])
let store = useStore()
    watchEffect(() => {
      store.commit('Request/SET_PAYMENT_METHOD', selectedMailingLists.value.title)
    })

    return {
      mailingLists,
      selectedMailingLists,
    }
  },
}
</script>
