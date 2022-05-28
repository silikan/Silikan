<!-- This example requires Tailwind CSS v2.0+ -->
<template>
  <div class="bg-white">
    <div class="">
      <div class="mt-12 space-y-4 sm:mt-16 sm:space-y-0">
        <div
          class="
            border border-gray-200
            rounded-lg
            shadow-sm
            divide-y divide-gray-200
          "
        >
          <div class="p-6 flex flex-col">

            <div class="bg-gray-50 rounded-lg px-4 py-6 sm:p-6 lg:p-8">
              <h2 id="summary-heading" class="sr-only">Order summary</h2>

              <div class="flow-root">
                <dl class="-my-4 text-sm divide-y divide-gray-200">
                         <div class="py-4 flex items-center justify-center">
                    <dt class="text-gray-600 text-2xl font-extrabold">Checkout</dt>

                  </div>

                  <div class="py-4 flex items-center justify-between">
                    <dt class="text-gray-600">
                      <div class="flex items-center">
                        <div>
                          <Avatar
                            v-if="client_name"
                            :url="client_avatar"
                            :name="client_name"
                          />
                        </div>
                        <div class="ml-3">
                          <p
                            class="
                              text-sm
                              font-medium
                              text-gray-700
                              group-hover:text-gray-900
                            "
                          >
                            {{ client_name }}
                          </p>
                          <p
                        class="
                          text-xs
                          font-medium
                          text-gray-500
                          group-hover:text-gray-700
                        "
                      >
                        {{ client_email }}
                      </p>
                        </div>
                      </div>
                    </dt>
                    <dd class="font-medium text-gray-900">client</dd>
                  </div>
                  <div class="py-4 flex items-center justify-between">
                    <dt class="text-gray-600">  <div class="flex items-center">
                    <div>
                      <Avatar
                        v-if="handyman_name"
                        :url="handyman_avatar"
                        :name="handyman_name"
                      />
                    </div>
                    <div class="ml-3">
                      <p
                        class="
                          text-sm
                          font-medium
                          text-gray-700
                          group-hover:text-gray-900
                        "
                      >
                        {{ handyman_name }}
                      </p>
                      <p
                        class="
                          text-xs
                          font-medium
                          text-gray-500
                          group-hover:text-gray-700
                        "
                      >
                       {{ handyman_email }}
                      </p>
                    </div>
                  </div></dt>
                    <dd class="font-medium text-gray-900">handyman</dd>
                  </div>
                  <div class="py-4 flex items-center justify-between">
                    <dt class="text-gray-600">Subtotal</dt>
                    <dd class="font-medium text-gray-900">{{ price}} DZD
                    </dd>
                  </div>

                  <div class="py-4 flex items-center justify-between">
                    <dt class="text-gray-600">Tax</dt>
                    <dd class="font-medium text-gray-900">{{ price / 2}} DZD</dd>
                  </div>
                  <div class="py-4 flex items-center justify-between">
                    <dt class="text-base font-medium text-gray-900">
                       total
                    </dt>
                    <dd class="text-base font-medium text-gray-900"> {{ Number(price) + Number(price/2)}} DZD</dd>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from "@/components/Avatar/Avatar.component.vue";

import { useRoute } from "vue-router";
import { useStore } from "vuex";
import { ref } from "@vue/reactivity";

export default {
  components: {
    Avatar,
  },
  setup() {
    let route = useRoute();
    let id = route.params.id;
    let store = useStore();
    let client_name = ref("");
    let client_email = ref("");
    let client_avatar = ref("");
    let handyman_name = ref("");
    let handyman_email = ref("");
    let handyman_avatar = ref("");

    let price = ref("");

    store
      .dispatch("Transaction/getTransactionById", id)
      .then((result) => {
        console.log(result);
        client_name.value = result.client.name;
        client_email.value = result.client.email;
        client_avatar.value = result.client.avatar;
        handyman_name.value = result.handyman.name;
        handyman_email.value = result.handyman.email;
        handyman_avatar.value = result.handyman.avatar;
        client_email.value = result.client.email;
        handyman_email.value = result.handyman.email;

        price.value = JSON.parse(result.cartItem.plan).price;
      })
      .catch((error) => {
        console.log(error);
      });

    console.log(id);

    return {
      price,
      id,
      client_name,
      client_email,
      client_avatar,
      handyman_name,
      handyman_email,
      handyman_avatar,

    };
  },
};
</script>
