<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-gray-50 dark:bg-prblue-500">
    <div class="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
      <div class="max-w-3xl mx-auto divide-y-2 divide-gray-200 dark:divide-prgreen-50">
        <h2
          class="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl dark:text-white"
        >
          Frequently asked questions
        </h2>
        <dl class="mt-6 space-y-6 divide-y divide-gray-200 dark:divide-prgreen-50">
          <Disclosure
            v-for="faq in faqs"
            :key="faq.question"
            v-slot="{ open }"
            as="div"
            class="pt-6"
          >
            <dt class="text-lg dark:text-white">
              <DisclosureButton
                class="
                dark:text-white
                  text-left
                  w-full
                  flex
                  justify-between
                  items-start
                  text-gray-400
                "
              >
                <span class="font-medium text-gray-900 dark:text-white">
                  {{ faq.question }}
                </span>
                <span class="ml-6 h-7 flex items-center">
                  <ChevronDownIcon
                    :class="[
                      open ? '-rotate-180' : 'rotate-0',
                      'h-6 w-6 transform',
                    ]"
                    aria-hidden="true"
                  />
                </span>
              </DisclosureButton>
            </dt>
            <DisclosurePanel as="dd" class="mt-2 pr-12">
              <p class="text-base text-gray-500 dark:text-white">
                {{ faq.answer }}
              </p>
            </DisclosurePanel>
          </Disclosure>
        </dl>
      </div>
    </div>
  </div>
</template>

<script>
import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/vue";
import { ChevronDownIcon } from "@heroicons/vue/outline";

const faqs = [
  {
    question: "What's the best thing about this site?",
    answer:
      "We used the latest technologies at hand for maximum user experience and comfort",
  },
  {
    question: "How do I trust the service providers",
    answer:
      "Any service provider is approved by the staff which take extreme measures to evaluate All handymen",
  },
  {
    question: "How do I trust the service providersis really the Massage",
    answer: "One Word, Magnificent",
  },
  {
    question: "One Question, Women Belong To?",
    answer: " The Kitchen Ofc",
  },
  {
    question: "Minta Tzidou Lmada7at Ta3 La3rass?",
    answer: "Very Soon We zid 3liha cheb bello w ga3",
  },
  {
    question: "3lah Rakom Dayrin Hamoud Boulem?",
    answer: "psk matnajamsh tjouz ramdan bla hammoud boulam",
  }
  ,{
    question: "Are You Gonna Win This Competetion?",
    answer: "Hell Yeah...",
  }
  //more questions...
];

export default {
  components: {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    ChevronDownIcon,
  },
  setup() {
    return {
      faqs,
    };
  },
};
</script>
