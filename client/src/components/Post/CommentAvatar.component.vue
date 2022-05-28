<template >

  <img
    referrerpolicy="no-referrer"
    :class="[`h-${heightData} w-${widthData} rounded-full`]"
    :src="avatar_svg"
    v-if="avatarWithoutLocalhost === null && nameData !== null"
    alt=""
  />
  <img
    referrerpolicy="no-referrer"
    :class="[`h-${heightData} w-${widthData} rounded-full`]"
    :src="avatar"
    v-if="avatarWithoutLocalhost !== null && nameData !== null"
    alt=""
  />
</template>

<script>
import { createAvatar } from "@dicebear/avatars";
import * as style from "@dicebear/avatars-initials-sprites";
import { computed } from "@vue/runtime-core";

export default {
  props: ["url", "name", "height", "width"],
  setup(props) {
    let avatar_svg;
    let avatar;
    let avatarWithoutLocalhost;
    let OathAvatar;

    let nameData = computed(() => props.name);
    let urlData = computed(() => props.url);
    avatar_svg = createAvatar(style, {
      seed: nameData.value,
      dataUri: true,
      // ... and other options
    });
    avatar = `${process.env.VUE_APP_API_URL}/${urlData.value}`;
    OathAvatar = urlData.value;

    avatarWithoutLocalhost = urlData.value;

    if (urlData.value !== null) {
      if (
        urlData.value.includes("googleusercontent.com") ||
        urlData.value.includes("graph.facebook.com") ||
        urlData.value.includes("licdn.com")
      ) {
        avatar = OathAvatar;
      }
    }
    let heightData = computed(() => props.height);
    let widthData = computed(() => props.width);
    return {
      avatar_svg,
      avatar,
      avatarWithoutLocalhost,
      nameData,
      urlData,
      heightData,
      widthData,
    };
  },
};
</script>

<style>
</style>
