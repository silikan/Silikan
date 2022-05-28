import * as API from "@/services/API";

export default {
    async uploadFile(payload) {
        await API.apiClient.post(payload.endpoint, payload.file);
    },

    async uploadPostFile(payload, post_id) {
        await API.apiClient.post(`/blog/post/${post_id}/image/`, payload.file);
    },
};