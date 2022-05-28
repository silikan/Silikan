<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white dark:bg-prblue-500 ">

    <div
      class="
        max-w-2xl
        mx-auto
        py-16
        px-4
        sm:py-24 sm:px-6
        lg:max-w-7xl lg:py-32 lg:px-8 lg:grid lg:grid-cols-12 lg:gap-x-8
      "
    >
      <div class="lg:col-span-4">
        <h2 class="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white">
          Customer Reviews
        </h2>

        <div class="mt-3 flex items-center">
          <div>
            <div class="flex items-center">
              <StarIcon
                v-for="rating in [0, 1, 2, 3, 4]"
                :key="rating"
                :class="[
                  reviews.average > rating
                    ? 'text-yellow-400'
                    : 'text-gray-300',
                  'flex-shrink-0 h-5 w-5',
                ]"
                aria-hidden="true"
              />
            </div>
            <p class="sr-only">{{ reviews.average }} out of 5 stars</p>
          </div>
          <p class="ml-2 text-sm text-gray-900 dark:text-white">
            Based on {{ reviews.totalCount }} reviews
          </p>
        </div>

        <div class="mt-6">
          <h3 class="sr-only">Review data</h3>

          <dl class="space-y-3">
            <div
              v-for="count in reviews.counts"
              :key="count.rating"
              class="flex items-center text-sm"
            >
              <dt class="flex-1 flex items-center">
                <p class="w-3 font-medium text-gray-900 dark:text-white">
                  {{ count.rating }}<span class="sr-only"> star reviews</span>
                </p>
                <div aria-hidden="true" class="ml-1 flex-1 flex items-center">
                  <StarIcon
                    :class="[
                      count.count > 0 ? 'text-yellow-400' : 'text-gray-300',
                      'flex-shrink-0 h-5 w-5',
                    ]"
                    aria-hidden="true"
                  />

                  <div class="ml-3 relative flex-1">
                    <div
                      class="
                        h-3
                        bg-gray-100
                        border border-gray-200
                        rounded-full
                      "
                    />
                    <div
                      v-if="count.count > 0"
                      class="
                        absolute
                        inset-y-0
                        bg-yellow-400
                        border border-yellow-400
                        rounded-full
                      "
                      :style="{
                        width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                      }"
                    />
                  </div>
                </div>
              </dt>
              <dd
                class="ml-3 w-10 text-right tabular-nums text-sm dark:text-white text-gray-900"
              >
                 {{  (Math.round((count.count / reviews.totalCount) * 100)) || 0 }}%
              </dd>
            </div>
          </dl>
        </div>

      </div>

      <div class="mt-16 lg:mt-0 lg:col-start-6 lg:col-span-7">
        <h3 class="sr-only">Recent reviews</h3>

        <div class="flow-root">
          <div class="-my-12 divide-y divide-gray-200">
            <div
              v-for="review in reviews.featured"
              :key="review.id"
              class="py-12"
            >
              <div class="flex items-center">
               <Avatar
                        v-if="review.name"
                        :url="review.avatar"
                        :name="review.name"
                      />
                <div class="ml-4">
                  <h4 class="text-sm font-bold text-gray-900 dark:text-white">
                    {{ review.name }}
                  </h4>
                  <div class="mt-1 flex items-center">
                    <StarIcon
                      v-for="rating in [0, 1, 2, 3, 4]"
                      :key="rating"
                      :class="[
                        review.rating > rating
                          ? 'text-yellow-400'
                          : 'text-gray-300',
                        'h-5 w-5 flex-shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                  </div>
                  <p class="sr-only">{{ review.rating }} out of 5 stars</p>
                </div>
              </div>
              <div
                class="mt-4 space-y-6 break-all text-base italic dark:text-white text-gray-600"
                v-html="review.content"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { StarIcon } from "@heroicons/vue/solid";
import { useStore } from 'vuex';
import { ref } from '@vue/reactivity';
import Avatar from "@/components/Avatar/Avatar.component.vue";

let reviews = ref({
  average: 0,
  totalCount: 0,
  counts: [

  ],
  featured: [

  ],
});

export default {
  components: {
    StarIcon,
    Avatar,
  },
  setup() {
    let store = useStore();
    let id = store.getters["auth/id"];
    console.log(id);
    store.dispatch("Review/getUserReviews", id).then((res) => {
      //calculate teh avrage of the reviews
      let total = ref(0) ;
  res.data.forEach((review) => {
         total.value+= review.rating;


      });
console.log(total.value);
       reviews.value.average = total.value / res.data.length;
console.log( reviews.value.average)
    reviews.value.totalCount = res.data.length;
    reviews.value.counts  =  [
    { rating: 5, count:   res.data.filter((review) => review.rating === 5).length },
    { rating: 4, count:   res.data.filter((review) => review.rating === 4).length },
    { rating: 3, count:   res.data.filter((review) => review.rating === 3).length },
    { rating: 2, count:   res.data.filter((review) => review.rating === 2).length },
    { rating: 1, count:   res.data.filter((review) => review.rating === 1).length },
  ],
console.log(res);
     reviews.value.featured = res.data.map((res)=>{
      return {
        id: res.id,
        rating : res.rating,
        content : res.comment,
        name: res.client.name,
        avatar: res.client.avatar,
     }})
    });


    return {
      reviews,
    };
  },
};
</script>
