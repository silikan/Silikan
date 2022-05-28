<template>

  <div class="bg-white ">
    <div class="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
           <div class="flex w-full items-center justify-between mb-5">
      <div
        class="space-y-5 sm:space-y-4 md:max-w-xl lg:max-w-3xl xl:max-w-none"
      >


      </div>

    </div>
      <div class="space-y-12 mb-10 ">

        <ul role="list" class="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8">
          <li v-for="person in people"  :key="person.name ">
            <div class="space-y-4 animate-pulse">
              <div class=" h-60 md:h-60 md:w-96 object-cover shadow-lg rounded-lg  bg-gray-300">
              </div>

              <div class="space-y-2">
                <div class="text-lg leading-6 font-medium space-y-1">
                            <div class="h-2 w-44 bg-gray-300 rounded col-span-2"></div>
                            <div class="h-2 w-28 bg-gray-300 rounded col-span-2"></div>

                </div>
                <ul role="list" class="flex space-x-5 justify-between">
                  <li>
                    <a :href="person.twitterUrl" class="text-gray-400 hover:text-gray-500">
                      <span class="sr-only">Twitter</span>
                                                 <div class="h-5 w-10 bg-gray-300 rounded col-span-5"></div>


                    </a>
                  </li>
                  <li>
                    <a :href="person.linkedinUrl" class="text-gray-400 hover:text-gray-500 ">
                      <span class="sr-only">LinkedIn</span>

                    </a>
                  </li>
                   <div class="self-end">
                  <router-link :to="`/user/${person.id}`">
                    <button
                      class="
                        inline-flex
                        items-center
                        px-12
                        py-1
                        border border-transparent
                        text-sm
                        font-medium
                        rounded-full
                        shadow-sm
                    bg-gray-300 rounded col-span-2
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-prgreen-500
                        text-gray-300
                      "
                    >
                      Hire
                    </button>
                  </router-link>
                </div>
                </ul>

              </div>

            </div>
          </li>
        </ul>

      </div>



    </div>

  </div>

</template>

<script>



const people = [
  {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
    {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
    {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
    {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
    {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
    {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
    {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
    {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },
    {
    name: 'Lindsay Walton',
    role: 'Front-end Developer',
    imageUrl:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=1024&h=1024&q=80',
    twitterUrl: '#',
    linkedinUrl: '#',
  },

  // More people...
]

export default {

    components:{


    },


  setup() {
    return {
      people,
    }
  },
}
</script>
