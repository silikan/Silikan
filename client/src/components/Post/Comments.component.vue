<template>
  <section aria-labelledby="Comments-title">
    <div class="bg-white shadow sm:rounded-lg sm:overflow-hidden">
      <div class="divide-y divide-gray-200">
        <div class="px-4 py-5 sm:px-6">
          <h2 id="Comments-title" class="text-lg font-medium text-gray-900">
            Comments
          </h2>
        </div>
        <div class="px-4 py-6 sm:px-6">
          <ul role="list" class="space-y-8">
            <li v-for="(comment, i) in comments" :key="comment.id">
              <div class="flex space-x-3">
                <div class="flex-shrink-0">
                  <!--                <img
                    class="h-10 w-10 rounded-full"
                    :src="`https://images.unsplash.com/photo-${comment.imageId}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`"
                    alt=""
                  /> -->
                  <div class="mr-4 flex-shrink-0">
                    <Avatar
                      v-if="comment.user.name"
                      :url="comment.user.avatar"
                      :name="comment.user.name"
                      :height="12"
                      :width="12"
                    />
                  </div>
                </div>
                <div class="w-full">
                  <div class="text-lg font-bold">
                    <a href="#" class="font-bold text-gray-900">{{
                      comment.user.name
                    }}</a>
                  </div>
                  <div class="mt-1 text-md text-gray-700 italic">
                    <p>{{ comment.comment }}</p>
                  </div>
                  <div class="mt-2 text-sm space-x-2">
                    <span class="text-gray-400 text-xs font-bold">{{
                      comment.created_at
                    }}</span>
                    {{ " " }}
                    <span class="text-gray-500 font-medium">&middot;</span>
                    {{ " " }}
                    <button
                      @click="toggleReplyForm(i)"
                      type="button"
                      class="text-gray-800 text-sm font-bold"
                    >
                      Reply
                    </button>
                  </div>

                  <Replies :commentId="comment.id" :newReplies="newReplies" />

                  <div
                    class="w-full mr-4 flex-shrink-0 mt-6"
                    v-if="showReplyForm[i]"
                  >
                    <form action="#" class="">
                      <div class="w-full">
                        <label for="reply" class="sr-only">About</label>

                        <textarea
                          id="reply"
                          name="reply"
                          v-model="reply[i]"
                          rows="3"
                          :class="[
                            bioErrorMessage
                              ? 'rounded-md block w-full py-3 h-20 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-red-300 rounded-md-sm placeholder-red-400 text-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500'
                              : 'rounded-md  block w-full py-3 h-20 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-gray-300 rounded-md-sm placeholder-gray-400 focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500',
                          ]"
                          placeholder="Add a Reply"
                        />
                      </div>
                      <div class="mt-3 flex items-center justify-between">
                        <div></div>
                        <button
                          type="submit"
                          class="
                            inline-flex
                            items-center
                            justify-center
                            px-3
                            py-1
                            border border-transparent
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
                          @click.prevent="postReply(reply[i], comment.id, i)"
                        >
                          Reply
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </li>
          </ul>
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
      </div>
      <div class="bg-gray-50 px-4 py-6 sm:px-6">
        <div class="flex space-x-3">
          <div class="flex-shrink-0">
            <Avatar
              v-if="authUser.name"
              :url="authUser.avatar"
              :name="authUser.name"
              :height="12"
              :width="12"
            />
          </div>

          <div class="min-w-0 flex-1">
            <form action="#">
              <div>
                <label for="comment" class="sr-only">About</label>
                <textarea
                  v-model="comment"
                  id="comment"
                  name="comment"
                  rows="3"
                  :class="[
                    bioErrorMessage
                      ? 'rounded-md block w-full py-3 h-28 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-red-300 rounded-md-sm placeholder-red-400 text-red-600 focus:outline-none focus:ring-red-500 focus:border-red-500'
                      : 'rounded-md  block w-full py-3 h-28 -0 resize-none focus:ring-0  pr-10 sm:text-sm  appearance-none px-3 border border-gray-300 rounded-md-sm placeholder-gray-400 focus:outline-none focus:ring-prgreen-500 focus:border-prgreen-500',
                  ]"
                  placeholder="Add a Comment"
                />
              </div>
              <div class="mt-3 flex items-center justify-between">
                <a
                  href="#"
                  class="
                    group
                    inline-flex
                    items-start
                    text-sm
                    space-x-2
                    text-gray-500
                    hover:text-gray-900
                  "
                >
                  <QuestionMarkCircleIcon
                    class="
                      flex-shrink-0
                      h-5
                      w-5
                      text-gray-400
                      group-hover:text-gray-500
                    "
                    aria-hidden="true"
                  />
                  <span> Some HTML is okay. </span>
                </a>
                <button
                  type="submit"
                  class="
                    inline-flex
                    items-center
                    justify-center
                    px-4
                    py-2
                    border border-transparent
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
                  @click.prevent="postComment"
                >
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Avatar from "@/components/Post/CommentAvatar.component.vue";
import Replies from "@/components/Post/Replies.component.vue";
import { QuestionMarkCircleIcon } from "@heroicons/vue/solid";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import { useField } from "vee-validate";
import * as yup from "yup";
import { computed, ref, reactive } from "@vue/runtime-core";
import { io } from "socket.io-client";
const user = {
  name: "Whitney Francis",
  email: "whitney@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80",
};

export default {
  components: {
    QuestionMarkCircleIcon,
    Avatar,
    Replies,
  },
  setup() {
    let notificationsocket = io("http://localhost:4000");
    let store = useStore();
    let route = useRoute();
    let authUser = computed(() => store.getters["auth/authUser"]);
    let id = route.params.id;
    let commentValidation = yup
      .string()
      .min(1, "comment must be at least 1 characters")
      .max(500, "comment must be less than 500 characters")
      .nullable();
    /*    let replyValidation = yup
      .string()
      .min(1, "reply must be at least 1 characters")
      .max(500, "reply must be less than 500 characters")
      .nullable(); */
    const { value: comment, errorMessage: commentErrorMessage } = useField(
      "comment",
      commentValidation
    );
    let reply = ref([]);

    let postComment = () => {
      let payload = {
        comment: comment.value,
        post_id: id,
      };
      store.dispatch("Blog/postComment", payload).then(async () => {
        store.dispatch("Blog/getPostCommentsPaginate", payload);
        comment.value = "";

        store
          .dispatch("Blog/getPostById", id)
          .then(async (result) => {
            console.log(result);
            let toData = {
              userId: result.data.user.id,
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
                to: result.data.user.id,
                from: authUser.value.id,
                data: `Commented On Your Post`,
                type: "Blog",
                notification_room_id: getUserNotificationRoom.id,
              },
            };
            console.log(notificationpayload);
            store.dispatch(
              "Notification/sendChatNotification",
              notificationpayload
            );
            store.dispatch(
              "Notification/Sendnotification",
              notificationpayload
            );
          })

          .catch((error) => {
            console.log(error);
          });

      });
    };
    let newReplies = ref([]);
    let postReply = async (data, comment_id, i) => {
      console.log(data);
      let payload = {
        comment: data,
        post_id: id,
        comment_id: comment_id,
      };
      store.dispatch("Blog/postReply", payload);

      newReplies.value = {
        user: authUser.value,

        comment: data,
        post_id: id,
        comment_id: comment_id,
      };
      reply.value[i] = "";


      store
          .dispatch("Blog/getCommentById", comment_id)
          .then(async (result) => {
            console.log(result);
            let toData = {
              userId: result.data.user.id,
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
                to: result.data.user.id,
                from: authUser.value.id,
                data: `Replied To Your Comment`,
                type: "Blog",
                notification_room_id: getUserNotificationRoom.id,
              },
            };
            console.log(notificationpayload);
            store.dispatch(
              "Notification/sendChatNotification",
              notificationpayload
            );
            store.dispatch(
              "Notification/Sendnotification",
              notificationpayload
            );
          })

          .catch((error) => {
            console.log(error);
          });
    };

    let action = "Search/paginateHandymen";
    let meta, links, comments;
    let path = "handymen";

    let page = 1;
    let open = ref(false);
    let type = ref("request");
    let RequestId = ref(null);
    let openDiag = (id) => {
      open.value = true;
      RequestId.value = id;
    };

    let payload = {
      page: page,
      post_id: id,
    };
    /* let router = useRouter
     */ store.dispatch("Blog/getPostCommentsPaginate", payload).then((res) => {
      console.log(res);
    });
    meta = computed(() => {
      return store.getters["Blog/getCommentsMeta"];
    });
    links = computed(() => {
      return store.getters["Blog/getCommentsLinks"];
    });

    let feedbackReactive = reactive([]);
    comments = computed(() => {
      if (meta.value.current_page == 1 && feedbackReactive.length > 0) {
        feedbackReactive = store.getters["Blog/getComments"];
        return feedbackReactive;
      } else {
        feedbackReactive.push(...store.getters["Blog/getComments"]);
        return feedbackReactive;
      }
    });

    console.log(comments);
    console.log(meta);
    const loadMore = () => {
      if (page < meta.value.last_page) {
        page++;
        let paginationlink = `${process.env.VUE_APP_API_URL}/api/blog/post/${id}/comment/paginate?page=${page}`;

        store.dispatch("Blog/getCommentsLinks", paginationlink);
      }
    };
    const prevPage = () => {
      store.dispatch("Blog/getCommentsLinks", links.value.prev);
    };
    const nextPage = () => {
      console.log(links.value.next);
      store.dispatch("Blog/getCommentsLinks", links.value.next);
    };

    const setPage = (pageNumber) => {
      let paginationlink = `${process.env.VUE_APP_API_URL}/api/blog/post/${id}/comment/paginate?page=${pageNumber}`;

      store.dispatch("Blog/getCommentsLinks", paginationlink);
      console.log(meta.value);
    };

    let currentPage = computed(() => meta.value.current_page);
    let totalPages = computed(() => meta.value.last_page);

    let filterPages = computed(() => {
      //keep the first and last page

      let data = reactive([]);
      let start = currentPage.value - 2;
      let end = currentPage.value + 2;
      let totalPages = computed(() => meta.value.last_page);

      console.log(totalPages.value);
      if (start < 1) {
        start = 1;
        end = 5;
      }

      if (end > totalPages.value) {
        end = totalPages.value;
        start = totalPages.value - 4;
      }
      for (let i = start; i <= end; i++) {
        if (i !== totalPages.value && i !== 1 && i < totalPages) {
          data.push(i);
        }
      }

      return data;
    });
    let preurl = `${process.env.VUE_APP_API_URL}`;
    let loading = computed(() => store.getters["Blog/getCommentsLinksLoading"]);

    let showReplyForm = ref([]);
    const toggleReplyForm = (i) => {
      console.log(i);
      showReplyForm.value[i] = !showReplyForm.value[i];
    };
    return {
      user,

      comment,
      reply,
      commentErrorMessage,
      postComment,
      postReply,

      action,
      path,

      prevPage,
      nextPage,
      setPage,
      meta,
      links,
      comments,
      filterPages,
      currentPage,
      totalPages,
      preurl,
      open,
      type,
      RequestId,
      openDiag,
      loading,
      loadMore,
      authUser,
      newReplies,

      showReplyForm,
      toggleReplyForm,
    };
  },
};
</script>

<style>
</style>
