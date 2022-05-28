<template>
  <form
    @submit.prevent="updateAndUploadFile"
    class="divide-y divide-gray-200 lg:col-span-9 dark:bg-prblue-500"
    action="#"
    method="POST"
  >
    <!-- Profile section -->
    <div class="py-6 px-4 sm:p-6 lg:pb-8">
      <div>
        <h2 class="text-lg leading-6 font-medium text-gray-900 dark:text-prblue-50">Profile</h2>
        <p class="mt-1 text-sm text-gray-500 dark:text-prblue-50">
          This information will be displayed publicly so be careful what you
          share.
        </p>
      </div>

      <div class="mt-6 flex flex-col lg:flex-row">
        <div class="flex-grow space-y-6">
          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-center
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="username"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
            >
              Username
            </label>
            <div class="mt-1 relative rounded-md flex sm:col-span-2">
                     <span
              class="
                bg-gray-50
                border border-r-0 border-gray-300
                rounded-l-md
                px-3
                inline-flex
                items-center
                text-gray-500
                dark:text-prblue-50
                sm:text-sm
              "
            >
          silikan@
            </span>
              <input
                id="username"
                type="text"
                name="username"
                autocomplete="username"
                placeholder=""
                :class="[
                  usernameErrorMessage
                    ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                    : ' block w-full px-3 py-2 border border-gray-300 rounded-md  -smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
                ]"
                v-model="username"
              />
              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  pr-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <ExclamationCircleIcon
                  class="h-5 w-5 text-red-500"
                  aria-hidden="true"
                  v-if="usernameErrorMessage"
                />
              </div>
            </div>
            <p
              v-if="usernameErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            ></p>
            <p v-if="usernameErrorMessage" class="text-red-500 text-xs italic">
              {{ usernameErrorMessage }}
            </p>
          </div>
          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-center
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="email"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
              >Email</label
            >
            <div class="mt-1 rounded-md relative flex sm:col-span-2">
              <input
                id="email"
                v-model="email"
                type="email"
                name="email"
                :class="[
                  emailErrorMessage
                    ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                    : ' block w-full px-3 py-2 border border-gray-300 rounded-md  -smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
                ]"
                placeholder="you@example.com"
                aria-describedby="email-description"
              />
              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  pr-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <ExclamationCircleIcon
                  class="h-5 w-5 text-red-500"
                  aria-hidden="true"
                  v-if="emailErrorMessage"
                />
              </div>
            </div>
            <p
              v-if="emailErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            ></p>
            <p v-if="emailErrorMessage" class="text-red-500 text-xs italic">
              {{ emailErrorMessage }}
            </p>
          </div>

          <div
            class="
              sm:grid
              sm:grid-cols-3
              sm:gap-4
              sm:items-center
              sm:border-t
              sm:border-gray-200
              sm:pt-5
            "
          >
            <label
              for="about"
              class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
            >
              Bio
            </label>
            <div class="mt-1 relative rounded-md sm:col-span-2">
              <textarea
                id="bio"
                name="bio"
                placeholder="Add your description..."
                rows="7"
                v-model="bio"
                :class="[
                  bioErrorMessage
                    ? 'rounded-md block w-full py-3 h-40 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-red-300 rounded-md-sm placeholder-red-400 text-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500'
                    : 'rounded-md  block w-full py-3 h-40 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-gray-300 rounded-md-sm placeholder-gray-400 focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500',
                ]"
              />
              <div
                class="
                  absolute
                  inset-y-0
                  right-0
                  pr-3
                  flex
                  items-center
                  pointer-events-none
                "
              >
                <ExclamationCircleIcon
                  class="h-5 w-5 text-red-500"
                  aria-hidden="true"
                  v-if="bioErrorMessage"
                />
              </div>
            </div>
          <p
              v-if="bioErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            ></p>
            <p v-if="bioErrorMessage" class="text-red-500 text-xs italic">
              {{ bioErrorMessage }}
            </p>
          </div>
        </div>

        <div
          class="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-grow-0 lg:flex-shrink-0"
        >
          <p class="text-sm font-medium text-gray-700 dark:text-prblue-50" aria-hidden="true">
            Photo
          </p>
          <div class="mt-1 lg:hidden">
            <div class="flex items-center">
              <div
                class="flex justify-center items-center rounded-full h-15 w-15"
                aria-hidden="true"
              >
                <img
                  referrerpolicy="no-referrer"
                  class="rounded-full w-10 h-10"
                  :src="avatar_svg"
                  v-if="avatarWithoutLocalhost === null"
                  alt=""
                />
                <img
                  referrerpolicy="no-referrer"
                  class="rounded-full w-10 h-10"
                  :src="avatar"
                  v-if="avatarWithoutLocalhost !== null"
                  alt=""
                />
              </div>
              <div class="ml-5 rounded-md">
                <div
                  class="
                    group
                    relative
                    border border-gray-300
                    rounded-md
                    py-2
                    px-3
                    flex
                    items-center
                    justify-center
                    hover:bg-gray-50
                    focus-within:ring-2
                    focus-within:ring-offset-2
                    focus-within:ring-prgreen-500
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
                      dark:text-prblue-50
                      pointer-events-none
                    "
                  >
                    <span>Change me</span>
                    <span class="sr-only"> user photo</span>
                  </label>
                  <input
                    id="mobile-user-photo"
                    name="user-photo"
                    type="file"
                    :fileTypes="['image/*']"
                    endpoint="/users/auth/avatar"
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
          </div>

          <div class="hidden relative rounded-full overflow-hidden lg:block">
            <img
              referrerpolicy="no-referrer"
              class="relative rounded-full w-40 h-40"
              :src="avatar_svg"
              v-if="avatarWithoutLocalhost === null"
              alt=""
            />
            <img
              class="relative rounded-full w-40 h-40"
              :src="avatar"
              v-if="
                avatarWithoutLocalhost !== null &&
                hostname != 'lh3.googleusercontent.com'
              "
              alt=""
            />

            <label
              for="desktop-user-photo"
              class="
                absolute
                inset-0
                w-full
                h-full
                bg-black bg-opacity-75
                flex
                items-center
                justify-center
                text-sm
                font-medium
                text-white
                opacity-0
                hover:opacity-100
                focus-within:opacity-100
              "
            >
              <span>Change</span>
              <span class="sr-only"> user photo</span>
              <input
                endpoint="/users/auth/avatar"
                @change="fileChange"
                :accept="fileTypes"
                id="desktop-user-photo"
                type="file"
                name="user-photo"
                class="
                  absolute
                  inset-0
                  w-full
                  h-full
                  opacity-0
                  cursor-pointer
                  border-gray-300
                  rounded-md
                "
              />
            </label>
          </div>
        </div>
      </div>

      <div class="mt-6 space-y-6">
        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="name"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
          >
            name</label
          >
          <div class="mt-1 relative sm:mt-0 sm:col-span-2">
            <input
              id="name"
              type="text"
              name="name"
              autocomplete="name"
              v-model="name"
              :class="[
                nameErrorMessage
                  ? 'block pr-10 px-3 py-3 -none border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                  : ' block w-full px-3 py-3 border border-gray-300 rounded-md  -smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
              ]"
            />
            <div
              class="
                absolute
                inset-y-0
                right-0
                pr-3
                flex
                items-center
                pointer-events-none
              "
            >
              <ExclamationCircleIcon
                class="h-5 w-5 text-red-500"
                aria-hidden="true"
                v-if="nameErrorMessage"
              />
            </div>
          </div>
     <p
              v-if="nameErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            ></p>
            <p v-if="nameErrorMessage" class="text-red-500 text-xs italic">
              {{ nameErrorMessage }}
            </p>
        </div>
        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="phone-number"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
            >Phone Number</label
          >
          <div class="mt-1 relative rounded-md sm:col-span-2">
            <div class="absolute inset-y-0 left-0 flex items-center">
              <label for="country" class="sr-only">Country</label>
              <select
                id="district"
                name="district"
                autocomplete="district"
                class="
                  focus:outline-none
                  focus:ring-prgreen-500
                  focus:border-prgreen-500
                  h-full
                  py-0
                  pl-3
                  pr-7
                  border-transparent
                  bg-transparent
                  text-gray-500
                  dark:text-prblue-50
                  sm:text-sm
                  rounded-md
                "
              >
                <option>DZ</option>
                <option>US</option>
                <option>EU</option>
              </select>
            </div>

            <input
              id="phone_number"
              type="text"
              name="phone_number"
              v-model="phone_number"
              :class="[
                phone_numberErrorMessage
                  ? 'mt-1 block w-full border border-red-300 rounded-md  py-3  text-red-900  px-3 pl-24 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                  : ' mt-1 block w-full border border-gray-300 rounded-md  py-3   px-3 pl-24 focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
              ]"
              placeholder="+1 (555) 987-6543"
            />
            <div
              class="
                absolute
                inset-y-0
                right-0
                pr-3
                flex
                items-center
                pointer-events-none
              "
            >
              <ExclamationCircleIcon
                class="h-5 w-5 text-red-500"
                aria-hidden="true"
                v-if="phone_numberErrorMessage"
              />
            </div>
          </div>
       <p
              v-if="phone_numberErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            ></p>
            <p v-if="phone_numberErrorMessage" class="text-red-500 text-xs italic">
              {{ phone_numberErrorMessage }}
            </p>
        </div>

        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="work_hours"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
          >
            Work Hours</label
          >
          <div class="sm:col-span-2">
            <Datepicker
              v-model="work_hours"
              timePicker
              range
              noMinutesOverlay
            />
          </div>
        </div>

        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="work_hours"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
          >
            Birthday</label
          >
          <div class="sm:col-span-2">
            <Datepicker v-model="date_of_birth" :enableTimePicker="false" />
          </div>
        </div>
        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="salary"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
            >salary</label
          >
          <div class="sm:col-span-2 relative">
            <div class="mt-1 relative rounded-md sm:col-span-2">
              <input
                type="number"
                name="salary"
                id="salary"
                v-model="salary"
                :class="[
                  salaryErrorMessage
                    ? 'mt-1 block w-full border border-red-300 rounded-md  py-3  text-red-900  px-3 pl-5 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm'
                    : ' mt-1 block w-full border border-gray-300 rounded-md  py-3   px-3 pl-5 focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
                ]"
                placeholder="0.00"
              />

            <p
              v-if="salaryErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            ></p>
            <p v-if="salaryErrorMessage" class="text-red-500 text-xs italic">
              {{ salaryErrorMessage }}
            </p>
              <div
                class="absolute inset-y-0 right-0 flex items-center"
                v-if="!salaryErrorMessage"
              >
                <label for="currency" class="sr-only">Currency</label>
                <select
                  id="currency"
                  name="currency"
                  class="
                    block
                    w-full
                    border border-transparent
                    rounded-md
                    py-3
                    px-3
                    focus:outline-none
                    focus:ring-prgreen-500
                    focus:border-prgreen-500
                    sm:text-sm
                  "
                >
                  <option>DZD</option>
                  <option>DZD</option>
                  <option>EUR</option>
                </select>
              </div>
            </div>
          </div>
        </div>
        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="salary"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
            >Work Place</label
          >
          <Listbox as="div" v-model="work_place" class="sm:col-span-2">
            <div class="mt-1 relative">
              <ListboxButton
                class="
                  relative
                  w-full
                  bg-white
                  border border-gray-300
                  rounded-md
                  pl-3
                  pr-10
                  py-5
                  text-left
                  cursor-default
                  focus:outline-none
                  focus:ring-1
                  focus:ring-prgreen-500
                  focus:border-prgreen-500
                  sm:text-sm
                "
              >
                <span class="block truncate">{{ work_place }}</span>
                <span
                  class="
                    absolute
                    inset-y-0
                    right-0
                    flex
                    items-center
                    pr-2
                    pointer-events-none
                  "
                >
                  <SelectorIcon
                    class="h-5 w-5 text-gray-400 dark:text-prblue-50"
                    aria-hidden="true"
                  />
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="
                    absolute
                    z-10
                    mt-1
                    w-full
                    bg-white
                    -lg
                    max-h-60
                    rounded-md
                    py-1
                    text-base
                    ring-1 ring-black ring-opacity-5
                    overflow-auto
                    focus:outline-none
                    sm:text-sm
                  "
                >
                  <ListboxOption
                    as="template"
                    v-for="work in workPlace"
                    :key="work.id"
                    :value="work"
                    v-slot="{ active, work_place }"
                  >
                    <li
                      :class="[
                        active ? 'text-white bg-prgreen-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-8 pr-4',
                      ]"
                    >
                      <span
                        :class="[
                          work_place ? 'font-semibold' : 'font-normal',
                          'block truncate',
                        ]"
                      >
                        {{ work }}
                      </span>

                      <span
                        v-if="work_place"
                        :class="[
                          active ? 'text-white' : 'text-prgreen-600',
                          'absolute inset-y-0 left-0 flex items-center pl-1.5',
                        ]"
                      >
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>

        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="salary"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
            >Work Time Length
          </label>
          <Listbox as="div" v-model="work_time_length" class="sm:col-span-2">
            <div class="mt-1 relative">
              <ListboxButton
                class="
                  relative
                  w-full
                  bg-white
                  border border-gray-300
                  rounded-md
                  pl-3
                  pr-10
                  py-5
                  text-left
                  cursor-default
                  focus:outline-none
                  focus:ring-1
                  focus:ring-prgreen-500
                  focus:border-prgreen-500
                  sm:text-sm
                "
              >
                <span class="block truncate">{{ work_time_length }}</span>
                <span
                  class="
                    absolute
                    inset-y-0
                    right-0
                    flex
                    items-center
                    pr-2
                    pointer-events-none
                  "
                >
                  <SelectorIcon
                    class="h-5 w-5 text-gray-400 dark:text-prblue-50"
                    aria-hidden="true"
                  />
                </span>
              </ListboxButton>

              <transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <ListboxOptions
                  class="
                    absolute
                    z-10
                    mt-1
                    w-full
                    bg-white
                    -lg
                    max-h-60
                    rounded-md
                    py-1
                    text-base
                    ring-1 ring-black ring-opacity-5
                    overflow-auto
                    focus:outline-none
                    sm:text-sm
                  "
                >
                  <ListboxOption
                    as="template"
                    v-for="work in workLength"
                    :key="work.id"
                    :value="work"
                    v-slot="{ active, work_time_length }"
                  >
                    <li
                      :class="[
                        active ? 'text-white bg-prgreen-600' : 'text-gray-900',
                        'cursor-default select-none relative py-2 pl-8 pr-4',
                      ]"
                    >
                      <span
                        :class="[
                          work_time_length ? 'font-semibold' : 'font-normal',
                          'block truncate',
                        ]"
                      >
                        {{ work }}
                      </span>

                      <span
                        v-if="work_time_length"
                        :class="[
                          active ? 'text-white' : 'text-prgreen-600',
                          'absolute inset-y-0 left-0 flex items-center pl-1.5',
                        ]"
                      >
                        <CheckIcon class="h-5 w-5" aria-hidden="true" />
                      </span>
                    </li>
                  </ListboxOption>
                </ListboxOptions>
              </transition>
            </div>
          </Listbox>
        </div>
        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="country"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
            >Country</label
          >
          <div class="sm:col-span-2">
            <select
              id="country"
              name="country"
              v-model="country"
              autocomplete="country-name"
              class="
                mt-1
                block
                w-full
                bg-white
                border border-gray-300
                rounded-md
                py-3
                px-3
                focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500
                sm:text-sm
              "
            >
              <option>Algeria</option>
              <option>Algeria</option>
              <option>Algeria</option>
            </select>
          </div>
        </div>

        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="gender"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
            >gender</label
          >
          <div class="sm:col-span-2">
            <select
              id="gender"
              name="gender"
              v-model="gender"
              autocomplete="gender"
              class="
                mt-1
                block
                w-full
                bg-white
                border border-gray-300
                rounded-md
                py-3
                px-3
                focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500
                sm:text-sm
              "
            >
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>

        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="street-address"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
            >Street address</label
          >
          <div class="mt-1 relative rounded-md sm:col-span-2">
            <input
              id="address"
              type="text"
              name="address"
              autocomplete="address"
              v-model="address"
              :class="[
                addressErrorMessage
                  ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                  : ' block w-full px-3 py-2 border border-gray-300 rounded-md  -smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
              ]"
            />

            <div
              class="
                absolute
                inset-y-0
                right-0
                pr-3
                flex
                items-center
                pointer-events-none
              "
            >
              <ExclamationCircleIcon
                class="h-5 w-5 text-red-500"
                aria-hidden="true"
                v-if="addressErrorMessage"
              />
            </div>
          </div>

             <p
              v-if="addressErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            ></p>
            <p v-if="addressErrorMessage" class="text-red-500 text-xs italic">
              {{ addressErrorMessage }}
            </p>
        </div>

        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="city"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
            >City</label
          >
          <div class="mt-1 relative rounded-md sm:col-span-2">
            <input
              id="city"
              type="text"
              name="city"
              v-model="city"
              autocomplete="address-level2"
              :class="[
                cityErrorMessage
                  ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                  : ' block w-full px-3 py-2 border border-gray-300 rounded-md  -smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
              ]"
            />
            <div
              class="
                absolute
                inset-y-0
                right-0
                pr-3
                flex
                items-center
                pointer-events-none
              "
            >
              <ExclamationCircleIcon
                class="h-5 w-5 text-red-500"
                aria-hidden="true"
                v-if="cityErrorMessage"
              />
            </div>
          </div>

           <p
              v-if="cityErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            ></p>
            <p v-if="cityErrorMessage" class="text-red-500 text-xs italic">
              {{ cityErrorMessage }}
            </p>
        </div>

        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="region"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
            >State / Province</label
          >
          <div class="mt-1 relative rounded-md sm:col-span-2">
            <input
              id="state"
              type="text"
              name="state"
              v-model="state"
              autocomplete="address-level1"
              :class="[
                stateErrorMessage
                  ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                  : ' block w-full px-3 py-2 border border-gray-300 rounded-md  -smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
              ]"
            />
            <div
              class="
                absolute
                inset-y-0
                right-0
                pr-3
                flex
                items-center
                pointer-events-none
              "
            >
              <ExclamationCircleIcon
                class="h-5 w-5 text-red-500"
                aria-hidden="true"
                v-if="stateErrorMessage"
              />
            </div>
          </div>

            <p
              v-if="stateErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            ></p>
            <p v-if="stateErrorMessage" class="text-red-500 text-xs italic">
              {{ stateErrorMessage }}
            </p>
        </div>

        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="zip_code"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
            >ZIP / Postal code</label
          >
          <div class="mt-1 relative rounded-md sm:col-span-2">
            <input
              id="zip_code"
              type="text"
              name="zip_code"
              v-model="zip_code"
              autocomplete="postal-code"
              :class="[
                zip_codeErrorMessage
                  ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                  : ' block w-full px-3 py-2 border border-gray-300 rounded-md  -smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
              ]"
            />
            <div
              class="
                absolute
                inset-y-0
                right-0
                pr-3
                flex
                items-center
                pointer-events-none
              "
            >
              <ExclamationCircleIcon
                class="h-5 w-5 text-red-500"
                aria-hidden="true"
                v-if="zip_codeErrorMessage"
              />
            </div>
          </div>

       <p
              v-if="zip_codeErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            ></p>
            <p v-if="zip_codeErrorMessage" class="text-red-500 text-xs italic">
              {{ zip_codeErrorMessage }}
            </p>
        </div>

        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-center
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="website"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
          >
            website
          </label>
          <div class="mt-1 relative rounded-md flex sm:col-span-2">
            <span
              class="
                bg-gray-50
                border border-r-0 border-gray-300
                rounded-l-md
                px-3
                inline-flex
                items-center
                text-gray-500
                 dark:text-prblue-50
                sm:text-sm
              "
            >
              https://
            </span>
            <input
              id="website"
              type="text"
              name="website"
              autocomplete="website"
              :class="[
                websiteErrorMessage
                  ? 'block w-full pr-10 border-red-300 text-red-900 placeholder-red-300 focus:outline-none focus:ring-red-500 focus:border-red-500 sm:text-sm rounded-md w-full px-3 py-2 border border-red-300  text-red-900 rounded-md  -smplaceholder-red-400 focus:outline-nonefocus:ring-red-500 focus:border-red-500 sm:text-sm'
                  : ' block w-full px-3 py-2 border border-gray-300 rounded-md  -smplaceholder-gray-400 focus:outline-nonefocus:ring-prgreen-500 focus:border-prgreen-500 sm:text-sm',
              ]"
              v-model="website"
            />
            <div
              class="
                absolute
                inset-y-0
                right-0
                pr-3
                flex
                items-center
                pointer-events-none
              "
            >
              <ExclamationCircleIcon
                class="h-5 w-5 text-red-500"
                aria-hidden="true"
                v-if="websiteErrorMessage"
              />
            </div>
          </div>
         <p
              v-if="websiteErrorMessage"
              class="mt-2 text-sm text-red-600"
              id="email-error"
            ></p>
            <p v-if="websiteErrorMessage" class="text-red-500 text-xs italic">
              {{ websiteErrorMessage }}
            </p>
        </div>

        <div class="mt-5 col-span-12">
          <div class="col-span-12">
            <ArrayForm
              DataType="education"
              :Data="arrayProps"
              @sendEducation="sendEducation"
            />
          </div>
          <div class="col-span-12">
            <ArrayForm
              DataType="skills"
              :Data="arrayProps"
              @sendSkills="sendSkills"
            />
          </div>
          <div class="col-span-12">
            <ArrayForm
              DataType="experience"
              :Data="arrayProps"
              @sendExperience="sendExperience"
            />
          </div>
          <div class="col-span-12">
            <ArrayForm
              DataType="certifications"
              :Data="arrayProps"
              @sendCertifications="sendCertifications"
            />
          </div>
        </div>

        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="company-website"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50 "
          >
            Facebook
          </label>
          <div class="mt-1 flex rounded-md sm:col-span-2">
            <span
              class="
                inline-flex
                items-center
                px-3
                rounded-l-md
                border border-r-0 border-gray-300
                bg-gray-50
                text-gray-500
                dark:text-prblue-50
                sm:text-sm
              "
            >
              fb.com/
            </span>
            <input
              id="facebook_social_link"
              type="text"
              v-model="facebook_social_link"
              name="facebook_social_link"
              class="
                focus:ring-prgreen-500 focus:border-prgreen-500
                block
                w-full
                border border-gray-300
                pl-7
                pr-12
                py-3
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="@username"
            />
          </div>
        </div>
        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="company-website"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
          >
            Twitter
          </label>
          <div class="mt-1 flex rounded-md sm:col-span-2">
            <span
              class="
                inline-flex
                items-center
                px-3
                rounded-l-md
                border border-r-0 border-gray-300
                bg-gray-50
                text-gray-500
                dark:text-prblue-50
                sm:text-sm
              "
            >
              twt.com/
            </span>
            <input
              id="twitter_social_link"
              type="text"
              v-model="twitter_social_link"
              name="twitter_social_link"
              class="
                focus:ring-prgreen-500 focus:border-prgreen-500
                block
                w-full
                border border-gray-300
                pl-7
                pr-12
                py-3
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="@username"
            />
          </div>
        </div>
        <div
          class="
            sm:grid
            sm:grid-cols-3
            sm:gap-4
            sm:items-start
            sm:border-t
            sm:border-gray-200
            sm:pt-5
          "
        >
          <label
            for="company-website"
            class="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2 dark:text-prblue-50"
          >
            Linkedin
          </label>
          <div class="mt-1 flex rounded-md sm:col-span-2">
            <span
              class="
                inline-flex
                items-center
                px-3
                rounded-l-md
                border border-r-0 border-gray-300
                bg-gray-50
                text-gray-500
                dark:text-prblue-50
                sm:text-sm
              "
            >
              in.com/
            </span>
            <input
              id="linkedin_social_link"
              v-model="linkedin_social_link"
              type="text"
              name="linkedin_social_link"
              class="
                focus:ring-prgreen-500 focus:border-prgreen-500
                block
                w-full
                border border-gray-300
                pl-7
                pr-12
                py-3
                sm:text-sm
                border-gray-300
                rounded-md
              "
              placeholder="@username"
            />
          </div>
        </div>
      </div>
    </div>

    <div class="mt-4 py-4 px-4 flex justify-end sm:px-6">
      <button
        type="submit"
        class="
          ml-5
          bg-prgreen-700
          border border-transparent
          rounded-md
          py-2
          px-20
          inline-flex
          justify-center
          text-sm
          font-medium
          text-white
          hover:bg-prgreen-800
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-prgreen-500
        "
      >
        Save
      </button>
    </div>
  </form>
</template>

<script >
import moment from "moment";

import Datepicker from "vue3-date-time-picker";

import "vue3-date-time-picker/dist/main.css";
import { onMounted, computed, ref, watchEffect } from "vue";
import AuthService from "@/services/AuthService";
import FileService from "@/services/FileService";
import { useStore } from "vuex";
import ArrayForm from "./ArrayForm.component.vue";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";
import { CheckIcon, SelectorIcon } from "@heroicons/vue/solid";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-initials-sprites";
import { useField } from "vee-validate";
import * as yup from "yup";
import { ExclamationCircleIcon } from "@heroicons/vue/solid";
import { useRouter } from "vue-router";

export default {
  components: {
    ArrayForm,
    Listbox,
    ListboxButton,
    ListboxOption,
    ListboxOptions,
    CheckIcon,
    SelectorIcon,
    Datepicker,
    ExclamationCircleIcon,
  },
  created: function () {
    this.moment = moment;
  },
  setup() {
    let router = useRouter();
    const store = useStore();
    const WorkDays = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saterday",
    ];
    const authUser = computed(() => store.getters["auth/authUser"]);
    const educationState = computed(() => store.getters["auth/education"]);
    const experienceState = computed(() => store.getters["auth/experience"]);
    const skillsState = computed(() => store.getters["auth/skills"]);
    const certificationsState = computed(
      () => store.getters["auth/certifications"]
    );
    let emailValidation = yup
      .string()
      .email("Invalid email address")
      .required("Email is required");
    let usernameValidation = yup
      .string()
      .required("Username is required")
      .nullable();
    let bioValidation = yup
      .string()
      .min(10, "Bio must be at least 10 characters")
      .max(500, "Bio must be less than 500 characters")
      .nullable();
    let date_of_birthValidation = yup.string().nullable();
    const phoneRegExp =
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
    let phone_numberValidation = yup
      .string()
      .matches(phoneRegExp, "Phone number is not valid")
      .nullable();
    let addressValidation = yup.string().nullable();
    let countryValidation = yup.string().nullable();
    let cityValidation = yup.string().nullable();
    let stateValidation = yup.string().nullable();
    let zip_codeValidation = yup.string().nullable();
    let websiteValidation = yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter correct url!"
      )
      .nullable();
    let educationValidation = yup.string().nullable();
    let certificationsValidation = yup.string().nullable();
    let experienceValidation = yup.string().nullable();
    let skillsValidation = yup.string().nullable();
    let nameValidation = yup.string().required("Name is required").nullable();
    let facebook_social_linkValidation = yup.string().nullable();
    let linkedin_social_linkValidation = yup.string().nullable();
    let twitter_social_linkValidation = yup.string().nullable();
    let work_time_lengthValidation = yup.string().nullable();
    let work_placeValidation = yup.string().nullable();
    let work_hoursValidation = yup.string().nullable();
    let salaryValidation = yup
      .number()
      .typeError("Amount must be a number")
      .min(0, "zid chwiya")
      .max(1000000000000000000000000, "hold up wait a min ...")
      .nullable();
    let genderValidation = yup.string().nullable();

    const { value: email, errorMessage: emailErrorMessage } = useField(
      "email",
      emailValidation
    );
    const { value: username, errorMessage: usernameErrorMessage } = useField(
      "username",
      usernameValidation
    );
    watchEffect(() => {
      console.log(usernameErrorMessage.value);
    });
    const { value: bio, errorMessage: bioErrorMessage } = useField(
      "bio",
      bioValidation
    );
    const { value: date_of_birth, errorMessage: date_of_birthErrorMessage } =
      useField("date_of_birth", date_of_birthValidation);
    const { value: phone_number, errorMessage: phone_numberErrorMessage } =
      useField("phone_number", phone_numberValidation);
    const { value: address, errorMessage: addressErrorMessage } = useField(
      "address",
      addressValidation
    );
    const { value: country, errorMessage: countryErrorMessage } = useField(
      "country",
      countryValidation
    );
    const { value: city, errorMessage: cityErrorMessage } = useField(
      "city",
      cityValidation
    );
    const { value: state, errorMessage: stateErrorMessage } = useField(
      "state",
      stateValidation
    );
    const { value: zip_code, errorMessage: zip_codeErrorMessage } = useField(
      "zip_code",
      zip_codeValidation
    );
    //complete them all at once
    const { value: website, errorMessage: websiteErrorMessage } = useField(
      "website",
      websiteValidation
    );
    let education = ref("");
    let certifications = ref("");
    let experience = ref("");
    let skills = ref("");
    const { value: name, errorMessage: nameErrorMessage } = useField(
      "name",
      nameValidation
    );
    const {
      value: facebook_social_link,
      errorMessage: facebook_social_linkErrorMessage,
    } = useField("facebook_social_link", facebook_social_linkValidation);
    const {
      value: linkedin_social_link,
      errorMessage: linkedin_social_linkErrorMessage,
    } = useField("linkedin_social_link", linkedin_social_linkValidation);
    const {
      value: twitter_social_link,
      errorMessage: twitter_social_linkErrorMessage,
    } = useField("twitter_social_link", twitter_social_linkValidation);
    const {
      value: work_time_length,
      errorMessage: work_time_lengthErrorMessage,
    } = useField("work_time_length", work_time_lengthValidation);
    const { value: work_place, errorMessage: work_placeErrorMessage } =
      useField("work_place", work_placeValidation);
    const { value: work_hours, errorMessage: work_hoursErrorMessage } =
      useField("work_hours", work_hoursValidation);
    const { value: salary, errorMessage: salaryErrorMessage } = useField(
      "salary",
      salaryValidation
    );
    const { value: gender, errorMessage: genderErrorMessage } = useField(
      "gender",
      genderValidation
    );

    work_hours.value = {
      hours: new Date().getHours(),
      minutes: new Date().getMinutes(),
    };

    const workLength = ["Part Time", "Full Time"];
    const workPlace = ["remote", "Office"];

    work_time_length.value = workLength[0];
    work_place.value = workPlace[0];

    let Educationdata, ExperienceData, Certificationsdata, SkillsData;

    let sendEducation = (data) => {
      Educationdata = JSON.stringify(data.people);
    };

    let sendExperience = (data) => {
      ExperienceData = JSON.stringify(data.people);
    };

    let sendCertifications = (data) => {
      Certificationsdata = JSON.stringify(data.people);
    };

    let sendSkills = (data) => {
      SkillsData = JSON.stringify(data.people);
    };

    onMounted(() => {
      email.value = authUser.value.email;
      username.value = authUser.value.username;
      bio.value = authUser.value.bio;
      date_of_birth.value = authUser.value.date_of_birth;
      phone_number.value = authUser.value.phone_number;
      address.value = authUser.value.address;
      country.value = authUser.value.country;
      city.value = authUser.value.city;
      state.value = authUser.value.state;
      zip_code.value = authUser.value.zip_code;
      website.value = authUser.value.website;
      education.value = JSON.parse(educationState.value);
      certifications.value = JSON.parse(certificationsState.value);
      experience.value = JSON.parse(experienceState.value);
      skills.value = JSON.parse(skillsState.value);

      name.value = authUser.value.name;
      gender.value = authUser.value.gender;
      facebook_social_link.value = authUser.value.facebook_social_link;
      linkedin_social_link.value = authUser.value.linkedin_social_link;
      twitter_social_link.value = authUser.value.twitter_social_link;
      work_time_length.value = authUser.value.work_time_length;
      work_hours.value = authUser.value.work_hours;
      work_place.value = authUser.value.work_place;
      salary.value = authUser.value.salary;
    });

    const updateUser = () => {
      /*       var today = new Date();
      var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();
today = mm + '/' + dd + '/' + yyyy;
      console.log(date_of_birth.value); */
      const payload = {
        gender: gender.value,
        name: name.value,

        work_time_length: work_time_length.value,
        work_hours: work_hours.value,
        work_place: work_place.value,

        email: email.value,
        username: username.value,
        bio: bio.value,
        date_of_birth:
          date_of_birth.value == null
            ? ""
            : moment(date_of_birth.value).format("YYYY-MM-DD") || Date.now(),

        phone_number: phone_number.value,
        address: address.value,
        country: country.value,
        city: city.value,
        state: state.value,
        zip_code: zip_code.value,
        website: website.value,
        is_available_to_hire: authUser.value.is_available_to_hire,
        is_online: authUser.value.is_online,
        is_handyman: authUser.value.isHandyman,
        facebook_social_link: facebook_social_link.value,
        linkedin_social_link: linkedin_social_link.value,
        twitter_social_link: twitter_social_link.value,
        is_admin: authUser.value.isAdmin,
        is_moderator: authUser.value.isModerator,
        education: Educationdata,
        certifications: Certificationsdata,
        experience: ExperienceData,
        skills: SkillsData,

        salary: salary.value,
      };

      AuthService.updateUser(payload)
        .then(() => store.dispatch("auth/getAuthUser"))
        .then(() => console.log("User updated."))
        .catch(() => console.log(payload));
    };

    let avatar_svg = createAvatar(style, {
      seed: authUser.value.name,
      dataUri: true,
      // ... and other options
    });

    let file;

    const fileChange = (event) => {
      file = event.target.files[0];
    };

    let endpoint = "/users/auth/avatar";

    const uploadFile = () => {
      const payload = {};
      const formData = new FormData();
      formData.append("avatar", file);
      payload.file = formData;
      payload.endpoint = endpoint;

      FileService.uploadFile(payload)
        .then(() => {
          console.log("fileUploaded");
        })
        .catch(() => console.log("error"))
        .then(() => router.push("/profile"));
    };

    const updateAndUploadFile = () => {
      updateUser();
      uploadFile();
    };

    let avatar = `${process.env.VUE_APP_API_URL}/${authUser.value.avatar}`;

    let avatarWithoutLocalhost = authUser.value.avatar;
    let OathAvatar = authUser.value.avatar;
    let arrayProps = {
      education,

      experience,

      certifications,

      skills,
    };

    if (authUser.value.avatar !== null) {
      if (
        authUser.value.avatar.includes("googleusercontent.com") ||
        authUser.value.avatar.includes("graph.facebook.com") ||
        authUser.value.avatar.includes("licdn.com")
      ) {
        avatar = OathAvatar;
      }
    }

    return {
      email,
      username,
      bio,
      date_of_birth,
      phone_number,
      address,
      country,
      city,
      state,
      avatar,
      name,
      zip_code,
      website,
      education,
      certifications,
      experience,
      facebook_social_link,
      linkedin_social_link,
      twitter_social_link,
      skills,
      updateUser,
      authUser,
      avatar_svg,
      uploadFile,
      fileChange,
      file,
      updateAndUploadFile,
      avatarWithoutLocalhost,
      sendEducation,
      sendSkills,
      sendCertifications,
      sendExperience,
      Educationdata,
      ExperienceData,
      Certificationsdata,
      SkillsData,
      arrayProps,
      gender,
      work_time_length,
      work_hours,
      work_place,
      workLength,
      WorkDays,
      salary,
      workPlace,
      emailValidation,
      usernameValidation,
      bioValidation,
      date_of_birthValidation,
      phone_numberValidation,
      addressValidation,
      countryValidation,
      cityValidation,
      stateValidation,
      zip_codeValidation,
      websiteValidation,
      educationValidation,
      certificationsValidation,
      experienceValidation,
      skillsValidation,
      nameValidation,
      facebook_social_linkValidation,
      linkedin_social_linkValidation,
      twitter_social_linkValidation,
      work_time_lengthValidation,
      work_placeValidation,
      work_hoursValidation,
      salaryValidation,
      emailErrorMessage,
      usernameErrorMessage,
      bioErrorMessage,
      date_of_birthErrorMessage,
      phone_numberErrorMessage,
      addressErrorMessage,
      countryErrorMessage,
      cityErrorMessage,
      stateErrorMessage,
      zip_codeErrorMessage,
      websiteErrorMessage,
      nameErrorMessage,
      facebook_social_linkErrorMessage,
      linkedin_social_linkErrorMessage,
      twitter_social_linkErrorMessage,
      work_time_lengthErrorMessage,
      work_placeErrorMessage,
      work_hoursErrorMessage,
      salaryErrorMessage,
      genderErrorMessage,
      genderValidation,
    };
  },
};
</script>

<style scoped>
.dp__theme_light {
  --dp-background-color: #ffffff;
  --dp-text-color: #212121;
  --dp-hover-color: #f3f3f3;
  --dp-hover-text-color: #212121;
  --dp-hover-icon-color: #959595;
  --dp-primary-color: #1976d2;
  --dp-primary-text-color: #f8f5f5;
  --dp-secondary-color: #c0c4cc;
  --dp-border-color: #ddd;
  --dp-menu-border-color: #ddd;
  --dp-border-color-hover: #aaaeb7;
  --dp-disabled-color: #f6f6f6;
  --dp-scroll-bar-background: #f3f3f3;
  --dp-scroll-bar-color: #959595;
  --dp-success-color: #76d275;
  --dp-success-color-disabled: #a3d9b1;
  --dp-icon-color: #959595;
  --dp-danger-color: #ff6f60;
}

</style>
