<template>
  <div class="flex flex-col items-center p-10">
    <Stepper :steps="steps" />
    <General v-show="steps[0].active === true" />
    <Pricing v-show="steps[1].active === true" />
    <PaymentMthod v-show="steps[2].active === true" />
    <Upload v-show="steps[3].active === true" />
    <div class="my-10 flex justify-around w-full mx-auto sm:px-6 lg:px-8">
      <button
        v-if="steps.findIndex((step) => step.active) > 0"
        class="
          inline-flex
          items-center
          px-20
          py-2
          -transparent
          text-sm
          font-medium
          rounded-md
          text-black
          bg-white
          border-2
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-prgreen-500
        "
        @click="prevStep"
      >
        prev
      </button>
      <button
        v-if="steps.findIndex((step) => step.active) < 3"
        class="
          inline-flex
          items-center
          px-20
          py-2
          -transparent
          text-sm
          font-medium
          rounded-md
          shadow-sm
          text-white
          bg-prgreen-600
          hover:bg-prgreen-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-prgreen-500
        "
        @click="nextStep"
      >
        next
      </button>
      <button
        v-if="steps.findIndex((step) => step.active) === 3"
        class="
          inline-flex
          items-center
          px-20
          py-2
          -transparent
          text-sm
          font-medium
          rounded-md
          shadow-sm
          text-white
          bg-prgreen-600
          hover:bg-prgreen-700
          focus:outline-none
          focus:ring-2
          focus:ring-offset-2
          focus:ring-prgreen-500
        "
        @click="createGig"
      >
        create that gig
      </button>
    </div>
  </div>
</template>

<script>
import Stepper from "../components/Gig/CreateGig/Stepper.component.vue";
import General from "../components/Gig/CreateGig/General.component.vue";
import Pricing from "../components/Gig/CreateGig/tabbedPricind.component.vue";
import PaymentMthod from "../components/Gig/CreateGig/Payment_Mthod.component.vue";
import Upload from "../components/Gig/CreateGig/Upload.component.vue";
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  components: { Stepper, General, Pricing, PaymentMthod, Upload },
  setup() {
    let router = useRouter();
    const steps = reactive([
      { name: "General", href: "#", status: "current", active: true },
      { name: "Pricing", href: "#", status: "upcoming", active: false },
      { name: "Payment Method", href: "#", status: "upcoming", active: false },
      { name: "Upload", href: "#", status: "upcoming", active: false },
    ]);

    const nextStep = () => {
      const currentStep = steps.findIndex((step) => step.active);

      if (currentStep < steps.length - 1) {
        steps[currentStep].active = false;
        steps[currentStep].status = "complete";
        steps[currentStep + 1].active = true;
        steps[currentStep + 1].status = "current";
      }
    };

    const prevStep = () => {
      const currentStep = steps.findIndex((step) => step.active);

      if (currentStep > 0) {
        steps[currentStep].active = false;
        steps[currentStep].status = "upcoming";
        steps[currentStep - 1].active = true;
        steps[currentStep - 1].status = "current";
      }
    };

    let store = useStore();

    let createGig = () => {
      let title = store.state.Gig.title;
      let description = store.state.Gig.description;
      let category = store.state.Gig.category;

      let basic = JSON.stringify(store.state.Gig.basic);
      let premium = JSON.stringify(store.state.Gig.premium);
      let standard = JSON.stringify(store.state.Gig.standard);
      let paymentMethod = store.state.Gig.paymentMethod;
      let GigImages = store.state.Gig.GigImages;
      console.log(GigImages);
      let data = {
        title,
        description,
        category,
        basic,
        premium,
        standard,
        paymentMethod,
        GigImages,
      };
      let jsonData = JSON.stringify(data);
      store.dispatch("Gig/createGig", jsonData)
      .then(() => router.push("/profile"));
    };
    return {
      steps,
      nextStep,
      prevStep,
      createGig,
    };
  },
};
</script>

<style>
</style>
