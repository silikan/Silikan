<template>
  <div class="mt-6" v-if="meta && links">
    <div class="flex" v-for="reply in repliesData" :key="reply.id">
      <div class="mr-4 flex-shrink-0">
        <Avatar
          v-if="reply.user.name"
          :url="reply.user.avatar"
          :name="reply.user.name"
          :height="10"
          :width="10"
        />
      </div>
      <div>
        <h4 class="text-lg font-bold">{{ reply.user.name }}</h4>
        <p class="mt-1 text-md text-gray-700 italic">
          {{ reply.comment }}
        </p>
      </div>
    </div>
  </div>

  <div class="mt-6 cursor-pointer">
    <a
      class="
        w-full
        block
        text-center
        px-4
        py-2
        border border-gray-300
        shadow-sm
        text-sm
        font-medium
        rounded-md
        text-gray-700
        bg-white
        hover:bg-gray-50
      "
      @click="loadMore"
      v-if="meta.current_page < meta.last_page"
    >
      View More
    </a>
      <div class="mt-6" v-if="meta && links">
    <div class="flex" v-for="reply in newReliadData" :key="reply.id">
      <div class="mr-4 flex-shrink-0">
        <Avatar
          v-if="reply.user.name"
          :url="reply.user.avatar"
          :name="reply.user.name"
          :height="10"
          :width="10"
        />
      </div>
      <div>
        <h4 class="text-lg font-bold">{{ reply.user.name }}</h4>
        <p class="mt-1 text-md text-gray-700 italic">
          {{ reply.comment }}
        </p>
      </div>
    </div>
  </div>
  </div>
</template>

<script>
import Avatar from "@/components/Post/CommentAvatar.component.vue";

import { computed, reactive, ref, watch, watchEffect } from "@vue/runtime-core";
import { useRoute } from "vue-router";
import BlogServices from "@/services/BlogServices";
import { useStore } from 'vuex';
export default {
  props: ["commentId", "newReplies"],
  components: {
    Avatar,
  },
  setup(props) {
    /*    function setPaginatedReplies(commit, response) {
    commit("SET_COMMENT_REPLIES", response.data.data);
    commit("SET_COMMENT_REPLIES_META", response.data.meta);
    commit("SET_COMMENT_REPLIES_LINKS", response.data.links);
    commit("SET_COMMENT_REPLIES_LOADING", false);
} */

    let route = useRoute();
    let id = route.params.id;
let store = useStore();
    let comment_id = computed(() => {
      return props.commentId;
    });

    let page = 1;

    console.log(id, comment_id.value, page);
    let result = ref([]);
    let replies = ref([]);
    let meta = ref([]);
    let links = ref([]);
    watchEffect(async () => {
      let data = await BlogServices.getPostCommentRepliesPaginate(
        id,
        comment_id.value,
        page
      );

      result.value = data.data;
      replies.value = result.value.data;
      meta.value = result.value.meta;
      links.value = result.value.links;

      return { result, replies, meta, links };
    });

    let feedbackReactive = reactive([]);
    let repliesData = computed(() => {
      if (meta.value.current_page == 1 && feedbackReactive.length > 0) {
        feedbackReactive = replies.value;
        return feedbackReactive;
      } else {
        feedbackReactive.push(...replies.value);
        return feedbackReactive;
      }
    });
store.commit("Blog/SET_CURRENT_REPLY_PAGE", meta.value.last_page);

    let newReliadData = ref([]);
    watch(
      () => props.newReplies,
      (value) => {
store.commit("Blog/SET_CURRENT_REPLY_PAGE", meta.value.last_page);
        console.log(value);
if(comment_id.value ==  value.comment_id){
newReliadData.value.push(value) ;

}


      }
    );

    const loadMore = async () => {
      if (page < meta.value.last_page) {
        page++;

        let paginationlink = `${process.env.VUE_APP_API_URL}/api/blog/post/${id}/comment/${comment_id.value}/replies/paginate?page=${page}`;

        let data = await BlogServices.getLink(paginationlink);

        result.value = data.data;
        replies.value = result.value.data;
        meta.value = result.value.meta;
        links.value = result.value.links;
      }
    };

    return {
      open,
      result,
      replies,
      meta,
      links,
      repliesData,
      loadMore,
      newReliadData
    };
  },
};
</script>

<style>
</style>
