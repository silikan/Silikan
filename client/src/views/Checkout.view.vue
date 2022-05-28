<template>
  <div class="flex flex-col items-center p-10 h-screen">
    <StepperComponent :steps="steps" />
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <Review v-show="steps[1].active === true" />
      <Price v-show="steps[0].active === true" />
    </div>

    <Checkout />
  </div>
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
      v-if="steps.findIndex((step) => step.active) < 1"
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
      v-if="steps.findIndex((step) => step.active) === 1"
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
      @click="postAReview()"
    >
      Pay
    </button>
  </div>
</template>

<script>
import { io } from "socket.io-client";

import Price from "@/components/Checkout/Price.component.vue";
import Review from "@/components/Checkout/Review.component.vue";
import StepperComponent from "../components/Checkout/Stepper.component.vue";
import { reactive } from "@vue/reactivity";
import { useStore } from "vuex";
import { useRoute, useRouter } from "vue-router";
export default {
  components: {
    StepperComponent,
    Review,
    Price,
  },
  setup() {
    let router = useRouter();
    let store = useStore();
    let route = useRoute();
        let notificationsocket = io("http://localhost:4000");

    const steps = reactive([
      { name: "Pricing", href: "#", status: "upcoming", active: true },
      { name: "Reviews", href: "#", status: "upcoming", active: false },
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

    let id = route.params.id;

    const setCartItemStatusToPaid = () => {
      store
        .dispatch("Transaction/getTransactionById", id)
        .then((result) => {
          let payload = {
            cart_item_id: result.cartItem.id,
            status: "paid",
          };
          store.dispatch("Cart/setCartItemStatusToPaid", payload).then(async ()=>{
             let toData = {
            userId: result.handyman.id,
          };
          console.log(result);
          let getUserNotificationRoom = await store.dispatch(
            "Notification/getUserNotificationRoom",
            toData
          );

          notificationsocket.on("connect", function () {
            // Connected, let's sign-up for to receive messages for this room
            notificationsocket.emit(
              "notificationRoom",
              `notification-room-${getUserNotificationRoom.id}`
            );
          });

          let notificationpayload = {
            data: {
              to: result.handyman.id,
              from: result.client.id,
              data: `paid and added rating for ${result.cartItem.type} item`,
              type: result.taskItem.type,
              notification_room_id: getUserNotificationRoom.id,
            },
          };
          store.dispatch(
            "Notification/sendChatNotification",
            notificationpayload
          );
          store.dispatch("Notification/Sendnotification", notificationpayload);
          })
        })
        .catch((error) => {
          console.log(error);
        });
    };

    let postAReview = () => {
      let comment = store.state.Review.comment;
      let rating = store.state.Review.rating;
      let type = store.state.Review.type;
      let gigId = store.state.Review.gigId;
      let requestId = store.state.Review.requestId;
      let clientId = store.state.Review.clientId;
      let handymanId = store.state.Review.handymanId;

      let data = {
        comment: comment,
        rating: rating,
        type: type,
        gig_id: gigId,
        request_id: requestId,
        client_id: clientId,
        handyman_id: handymanId,
      };
      let jsonData = JSON.stringify(data);
      store.dispatch("Review/postAReview", jsonData).then(() => {
        setCartItemStatusToPaid();

router.push('/');


      });
    };

    return {
      steps,
      nextStep,
      prevStep,
      setCartItemStatusToPaid,
      postAReview,
    };
  },
};
</script>

<style>
</style>
