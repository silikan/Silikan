	<template>
<span class="inline-block relative">
    <img
    referrerpolicy="no-referrer"
      class="h-8 w-8 rounded-full"
      :src="avatar_svg"
      v-if="avatarWithoutLocalhost === null"
      alt=""
    />
    <img
    referrerpolicy="no-referrer"
      class="h-8 w-8 rounded-full"
      :src="avatar"
      v-if="avatarWithoutLocalhost !== null"
      alt=""
    />
      <span class="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>
  <span class="absolute top-0 right-0 block h-2 w-2 rounded-full ring-2 ring-white bg-red-400"></span>

</span>
</template>

	<script>
import UserService from "@/services/UserService.js";
import { computed, ref } from "@vue/runtime-core";
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-initials-sprites";

export default {
  props: ["UserId"],
  setup(props) {
    let user = ref(null);
    let avatar = ref(null);
    let avatar_svg = ref(null);
    let avatarWithoutLocalhost = ref(null);
    let OathAvatar = ref(null);
    let VisitUserData = ref({});

    let userId = computed(() => {
      return props.UserId;
    });

    UserService.getUser(userId.value).then(async (data) => {
      VisitUserData.value = data.data.data;
      avatar_svg.value = createAvatar(style, {
        seed: VisitUserData.value.name,
        dataUri: true,
        // ... and other options
      })
      avatar.value = `${process.env.VUE_APP_API_URL}/${VisitUserData.value.avatar}`;
      OathAvatar.value = VisitUserData.value.avatar;

      avatarWithoutLocalhost.value = VisitUserData.value.avatar;

      if (VisitUserData.value.avatar !== null) {
        if (
          VisitUserData.value.avatar.includes("googleusercontent.com") ||
          VisitUserData.value.avatar.includes("graph.facebook.com") ||
          VisitUserData.value.avatar.includes("licdn.com")
        ) {
          avatar.value = OathAvatar.value;
        }
      }
    }).catch((err) => {
      console.log(err);
    });
    return {
      user,
      avatar,
      avatar_svg,
      avatarWithoutLocalhost,
      userId,
    };
  },
};
</script>

	<style>
</style>
