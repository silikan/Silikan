import * as API from "@/services/API";

export default {
    async createPost(post) {
        return await API.apiClient.post(`/blog/post`, post);
    },
    async getPostById(id) {
        return await API.apiClient.get(`/blog/post/${id}`);
    },
    async getUserPosts(id) {
        return await API.apiClient.get(`/blog/post/user/${id}/post`);
    },
    async getPostsByCategory(title) {
        return await API.apiClient.get(`blog/${title}/post`);
    },
    async PaginatePosts(page) {
        return await API.apiClient.get(`/blog/posts/paginate`, { params: { page } });
    },
    async upload_post_image(formData) {
        return await API.apiClient.post(`/blog/podt/image`, formData);
    },
    async getLink(link) {
        return API.apiClient.get(link);
    },
    async postComment(payload) {
        return await API.apiClient.post(`/blog/post/comment/store`, payload);
    },
    async postReply(payload) {
        return await API.apiClient.post(`/blog/post/comment/reply/store`, payload);
    },
    async postLike(payload) {
        return await API.apiClient.post(`/blog/post/like`, payload);
    },
    async postUnlike(payload) {
        return await API.apiClient.delete(`/blog/post/like`, payload);
    },

    async getPostCommentsPaginate(post_id, page) {
        return await API.apiClient.get(`/blog/post/${post_id}/comment/paginate`, { params: { page } });
    },

    async getPostCommentRepliesPaginate(post_id, comment_id, page) {
        return await API.apiClient.get(`/blog/post/${post_id}/comment/${comment_id}/replies/paginate`, {
            params: { page },
        });
    },

    async postPageViews(id) {
        return await API.apiClient.get(`/blog/post/${id}/views`);
    },

    async PostReaction(post_id, payload) {
        return await API.apiClient.post(`/blog/post/${post_id}/reaction`, payload);
    },

    async getUserPostReaction(post_id, user_id) {
        return await API.apiClient.get(`/blog/post/${post_id}/user/${user_id}/reaction/`);
    },
    async PaginateTrendingPosts(page) {
        return await API.apiClient.get(`/blog/trending/posts/paginate`, { params: { page } });
    },

    async getPostByCategoryPaginate(title, page) {
        return await API.apiClient.get(`/blog/category/${title}/post/paginate`, { params: { page } });
    },
    async getCommentById(id) {
        return await API.apiClient.get(`/blog/post/comment/${id}`);
    },
};