<template>
  <div class="flex flex-col items-center p-10 ">

    <Stepper :steps="steps"/>
    <General v-show="steps[0].active === true" />
     <Pricing v-show="steps[1].active === true"/>
    <PaymentMthod v-show="steps[2].active === true"/>
    <div class="my-10 flex justify-around w-full mx-auto sm:px-6 lg:px-8">
      <button
        v-if="steps.findIndex((step) => step.active) > 0"
        type="submit"
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
        v-if="steps.findIndex((step) => step.active) < 2"
        type="submit"
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
        v-if="steps.findIndex((step) => step.active) === 2"
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
        @click="createRequest"
      >
        create that request
      </button>
    </div>
  </div>
</template>

<script>
import Stepper from "../components/Request/CreateRequest/Stepper.component.vue"
import General from "../components/Request/CreateRequest/General.component.vue"
import Pricing from "../components/Request/CreateRequest/Pricing.component.vue"
import PaymentMthod from "../components/Request/CreateRequest/Payment_Mthod.component.vue"
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import { useRouter } from "vue-router";
export default {
    components:{Stepper,General, Pricing,PaymentMthod },

 setup() {
let router = useRouter();
let store = useStore()
    const steps = reactive([
      { name: "General", href: "#", status: "current", active: true },
      { name: "Pricing", href: "#", status: "upcoming", active: false },
      { name: "Payment Method", href: "#", status: "upcoming", active: false },
    ]);

    const nextStep = () => {
         const currentStep = steps.findIndex(step => step.active);

        if(currentStep < steps.length - 1) {
          steps[currentStep].active = false;
           steps[currentStep].status = "complete";
          steps[currentStep + 1].active = true;
            steps[currentStep + 1].status = "current";


        }
        console.log(currentStep);

        }


    const prevStep = () => {
        const currentStep = steps.findIndex(step => step.active);

        if(currentStep > 0) {
          steps[currentStep].active = false;
            steps[currentStep].status = "upcoming";
          steps[currentStep - 1].active = true;
            steps[currentStep - 1].status = "current";
        }


    };

let createRequest = () => {
    let title = store.state.Request.title;
      let description = store.state.Request.description;
      let category = store.state.Request.category;
      let price = store.state.Request.price;
      let paymentMethod = store.state.Request.paymentMethod;
      let priceDescription = store.state.Request.priceDescription;
      let duration = store.state.Request.duration;

      let data = {
        title,
        description,
        category,
        price,
        paymentMethod,
        priceDescription,
        duration
      };
      let jsonData = JSON.stringify(data);
      store.dispatch("Request/createRequest",jsonData)
      .then(() => router.push("/profile"));
    };


    return {
      steps,
      nextStep,
      prevStep,
      createRequest
    };
  },
};
</script>

<style>
</style>
