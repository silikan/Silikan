<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="relative bg-white py-16 sm:py-24 lg:py-32 dark:bg-prblue-500 ">
    <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
      <h2 class="text-base font-semibold tracking-wider text-prgreen-600 uppercase dark:text-white">
        Work faster
      </h2>
      <p class="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl dark:text-white">
        Everything you need to get the job done
      </p>
      <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500 dark:text-white">
        you get your services done faster and easier.
      </p>
      <div class="mt-12">
        <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div
            v-for="feature in features"
            :key="feature.name"
            class="pt-6"
          >
            <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8  dark:bg-prblue-500">
              <div class="-mt-10">
                <div>
                  <span class="inline-flex items-center justify-center p-3 bg-prgreen-500 rounded-md shadow-lg">
                    <component
                      :is="feature.icon"
                      class="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </span>
                </div>
                <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight dark:text-white">
                  {{ feature.name }}
                </h3>
                <p class="mt-5 text-base text-gray-500 dark:text-white">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
} from '@heroicons/vue/outline';

const features = [
  { name: 'Online', icon: CloudUploadIcon , description:'Get the service you want online with no effort .' },
  { name: 'Security', icon: LockClosedIcon , description:'safe and secure environment.' },
  { name: '24/7', icon: RefreshIcon , description:'Up and runnig everyday of the week.' },
  { name: 'Trusted', icon: ShieldCheckIcon , description:'You will get what you came for .' },
  { name: 'Systematic', icon: CogIcon , description:'All actions taken will be registerd and no data will be lost.' },
  { name: 'Database Backups', icon: ServerIcon , description:'All data are in sync with the Database with backups.' },
];

export default {
  setup() {
    return {
      features,
    };
  },
};
</script>
