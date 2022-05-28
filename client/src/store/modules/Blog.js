export const namespaced = true;
import BlogService from "../../services/BlogServices";
import { getError } from "@/utils/helpers";

function setPaginatedPosts(commit, response) {
    commit("SET_POSTS", response.data.data);
    commit("SET_POSTS_META", response.data.meta);
    commit("SET_POSTS_LINKS", response.data.links);
    commit("SET_POSTS_LOADING", false);
}

function setPaginatedComments(commit, response) {
    commit("SET_COMMENTS", response.data.data);
    commit("SET_COMMENTS_META", response.data.meta);
    commit("SET_COMMENTS_LINKS", response.data.links);
    commit("SET_COMMENTS_LOADING", false);
}

function setPaginatedReplies(commit, response) {
    commit("SET_COMMENT_REPLIES", response.data.data);
    commit("SET_COMMENT_REPLIES_META", response.data.meta);
    commit("SET_COMMENT_REPLIES_LINKS", response.data.links);
    commit("SET_COMMENT_REPLIES_LOADING", false);
}

function setPaginatedTrendingPosts(commit, response) {
    commit("SET_TRENDING_POSTS", response.data.data);
    commit("SET_TRENDING_POSTS_META", response.data.meta);
    commit("SET_TRENDING_POSTS_LINKS", response.data.links);
    commit("SET_TRENDING_POSTS_LOADING", false);
}

function setPaginatedCategoryPosts(commit, response) {
    commit("SET_CATEGORY_POSTS", response.data.data);
    commit("SET_CATEGORY_POSTS_META", response.data.meta);
    commit("SET_CATEGORY_POSTS_LINKS", response.data.links);
    commit("SET_CATEGORY_POSTS_LOADING", false);
}

export const state = {
    posts: [],
    post: {},
    links: [],
    meta: {},
    loading: false,
    error: null,
    comments: [],
    replies: [],
    likes: [],
    comment_loading: false,
    comment_error: null,
    comments_meta: {},
    comments_links: {},
    comment_replies: [],
    comment_replies_loading: false,
    comment_replies_error: null,
    comment_replies_meta: {},
    comment_replies_links: {},
    trending_posts: [],
    trending_posts_loading: false,
    trending_posts_error: null,
    trending_posts_meta: {},
    trending_posts_links: {},
    category_posts: [],
    category_posts_loading: false,
    category_posts_error: null,
    category_posts_meta: {},
    category_posts_links: {},
    current_reply_page: 1,
};

export const mutations = {
    SET_POSTS(state, posts) {
        state.posts = posts;
    },
    SET_POSTS_META(state, meta) {
        state.meta = meta;
    },
    SET_POSTS_LINKS(state, links) {
        state.links = links;
    },
    SET_POSTS_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_POST(state, post) {
        state.post = post;
    },
    SET_COMMENTS(state, comments) {
        state.comments = comments;
    },
    SET_REPLIES(state, replies) {
        state.replies = replies;
    },
    SET_LIKES(state, likes) {
        state.likes = likes;
    },
    SET_POSTS_ERROR(state, error) {
        state.error = error;
    },
    SET_COMMENT_LOADING(state, loading) {
        state.comment_loading = loading;
    },
    SET_COMMENT_ERROR(state, error) {
        state.comment_error = error;
    },
    SET_COMMENTS_META(state, meta) {
        state.comments_meta = meta;
    },
    SET_COMMENTS_LINKS(state, links) {
        state.comments_links = links;
    },
    SET_COMMENTS_LOADING(state, loading) {
        state.comment_loading = loading;
    },
    SET_COMMENT_REPLIES(state, replies) {
        state.comment_replies = replies;
    },
    SET_COMMENT_REPLIES_META(state, meta) {
        state.comment_replies_meta = meta;
    },
    SET_COMMENT_REPLIES_LINKS(state, links) {
        state.comment_replies_links = links;
    },
    SET_COMMENT_REPLIES_LOADING(state, loading) {
        state.comment_replies_loading = loading;
    },
    SET_COMMENT_REPLIES_ERROR(state, error) {
        state.comment_replies_error = error;
    },
    SET_TRENDING_POSTS(state, posts) {
        state.trending_posts = posts;
    },
    SET_TRENDING_POSTS_META(state, meta) {
        state.trending_posts_meta = meta;
    },
    SET_TRENDING_POSTS_LINKS(state, links) {
        state.trending_posts_links = links;
    },
    SET_TRENDING_POSTS_LOADING(state, loading) {
        state.trending_posts_loading = loading;
    },
    SET_TRENDING_POSTS_ERROR(state, error) {
        state.trending_posts_error = error;
    },
    SET_CATEGORY_POSTS(state, posts) {
        state.category_posts = posts;
    },
    SET_CATEGORY_POSTS_META(state, meta) {
        state.category_posts_meta = meta;
    },
    SET_CATEGORY_POSTS_LINKS(state, links) {
        state.category_posts_links = links;
    },
    SET_CATEGORY_POSTS_LOADING(state, loading) {
        state.category_posts_loading = loading;
    },
    SET_CATEGORY_POSTS_ERROR(state, error) {
        state.category_posts_error = error;
    },
    SET_CURRENT_REPLY_PAGE(state, page) {
        state.current_reply_page = page;
    },
};

export const actions = {
    async createPost({ commit }, post) {
        commit("SET_POSTS_LOADING", true);
        try {
            const response = await BlogService.createPost(post);
            commit("SET_POSTS_LOADING", false);
            return response.data;
        } catch (error) {
            commit("SET_POSTS_LOADING", false);
            commit("SET_POSTS_ERROR", getError(error));
        }
    },

    async getPostById({ commit }, id) {
        id;
        commit("SET_POSTS_LOADING", true);
        try {
            const response = await BlogService.getPostById(id);
            commit("SET_POST", response.data);
            commit("SET_POSTS_LOADING", false);
            return response.data;
        } catch (error) {
            commit("SET_POSTS_LOADING", false);
            commit("SET_POSTS_ERROR", getError(error));
        }
    },
    async getUserPosts({ commit }, id) {
        commit("SET_POSTS_LOADING", true);
        try {
            const response = await BlogService.getUserPosts(id);
            commit("SET_POSTS", response.data);
            commit("SET_POSTS_LOADING", false);
            return response.data;
        } catch (error) {
            commit("SET_POSTS_LOADING", false);
            commit("SET_POSTS_ERROR", getError(error));
        }
    },
    async getPostsByCategory({ commit }, category) {
        commit("SET_POSTS_LOADING", true);
        try {
            const response = await BlogService.getPostsByCategory(category);
            commit("SET_POSTS", response.data);
            commit("SET_POSTS_LOADING", false);
            return response.data;
        } catch (error) {
            commit("SET_POSTS_LOADING", false);
            commit("SET_POSTS_ERROR", getError(error));
        }
    },
    async getAllPostsPaginated({ commit }, page) {
        try {
            commit("SET_POSTS_LOADING", true);
            const posts = await BlogService.PaginatePosts(page);
            setPaginatedPosts(commit, posts);

            return posts.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_POSTS_LOADING", false);
        }
    },

    async getLink({ commit }, link) {
        try {
            commit("SET_POSTS_LOADING", true);
            const posts = await BlogService.getLink(link);
            setPaginatedPosts(commit, posts);
            return posts.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_POSTS_LOADING", true);
        }
    },
    async postComment({ commit }, comment) {
        try {
            const response = await BlogService.postComment(comment);
            return response.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },
    async postReply({ commit }, reply) {
        try {
            const response = await BlogService.postReply(reply);
            return response.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },
    async postLike({ commit }, like) {
        try {
            const response = await BlogService.postLike(like);
            return response.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },
    async getLikes({ commit }, id) {
        try {
            const response = await BlogService.getLikes(id);
            commit("SET_LIKES", response.data);
            return response.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },

    async getPostCommentsPaginate({ commit }, payload) {
        let page = payload.page;
        let post_id = payload.post_id;
        try {
            commit("SET_COMMENT_LOADING", true);
            const comments = await BlogService.getPostCommentsPaginate(post_id, page);
            setPaginatedComments(commit, comments);
            return comments.data;
        } catch (error) {
            commit("SET_COMMENT_LOADING", false);
            commit("SET_COMMENT_ERROR", getError(error));
        }
    },
    async getCommentsLinks({ commit }, link) {
        try {
            console.log(link);
            commit("SET_COMMENT_LOADING", true);
            const data = await BlogService.getLink(link);
            setPaginatedComments(commit, data);

            commit("SET_COMMENT_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_COMMENT_LOADING", false);
            commit("SET_COMMENT_ERROR", getError(error));
        }
    },

    async getPostCommentRepliesPaginate({ commit }, payload) {
        let page = payload.page;
        let comment_id = payload.comment_id;
        let post_id = payload.post_id;
        try {
            commit("SET_COMMENT_REPLIES_LOADING", true);
            const replies = await BlogService.getPostCommentRepliesPaginate(post_id, comment_id, page);
            setPaginatedReplies(commit, replies);
            return replies.data;
        } catch (error) {
            commit("SET_COMMENT_REPLIES_LOADING", false);
            commit("SET_COMMENT_REPLIES_ERROR", getError(error));
        }
    },
    async getRepliesLinks({ commit }, link) {
        try {
            commit("SET_COMMENT_REPLIES_LOADING", true);
            const links = await BlogService.getLink(link);
            setPaginatedReplies(commit, links);
            commit("SET_COMMENT_REPLIES_LOADING", false);
            return links.data;
        } catch (error) {
            commit("SET_COMMENT_REPLIES_LOADING", false);
            commit("SET_COMMENT_REPLIES_ERROR", getError(error));
        }
    },

    async postPageViews({ commit }, id) {
        try {
            const response = await BlogService.postPageViews(id);
            return response.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },

    async PostReaction({ commit }, payload) {
        let post_id = payload.post_id;
        try {
            const response = await BlogService.PostReaction(post_id, payload);
            return response.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },
    async getUserPostReaction({ commit }, payload) {
        let post_id = payload.post_id;
        let user_id = payload.user_id;
        try {
            const response = await BlogService.getUserPostReaction(post_id, user_id);
            return response.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },

    async PaginateTrendingPosts({ commit }, page) {
        try {
            commit("SET_TRENDING_POSTS_LOADING", true);
            const posts = await BlogService.PaginateTrendingPosts(page);
            setPaginatedTrendingPosts(commit, posts);
            commit("SET_TRENDING_POSTS_LOADING", false);
            return posts.data;
        } catch (error) {
            commit("SET_TRENDING_POSTS_LOADING", false);
            commit("SET_TRENDING_POSTS_ERROR", getError(error));
        }
    },
    async getTrendingPostsLinks({ commit }, link) {
        try {
            commit("SET_TRENDING_POSTS_LOADING", true);
            const data = await BlogService.getLink(link);
            setPaginatedTrendingPosts(commit, data);
            commit("SET_TRENDING_POSTS_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_TRENDING_POSTS_LOADING", false);
            commit("SET_TRENDING_POSTS_ERROR", getError(error));
        }
    },

    async getPostByCategoryPaginate({ commit }, payload) {
        let page = payload.page;
        let title = payload.title;
        try {
            commit("SET_CATEGORY_POSTS_LOADING", true);
            const posts = await BlogService.getPostByCategoryPaginate(title, page);
            setPaginatedCategoryPosts(commit, posts);
            return posts.data;
        } catch (error) {
            commit("SET_CATEGORY_POSTS_LOADING", false);
            commit("SET_CATEGORY_POSTS_ERROR", getError(error));
        }
    },
    async getCategoryPostsLinks({ commit }, link) {
        try {
            commit("SET_CATEGORY_POSTS_LOADING", true);
            const data = await BlogService.getLink(link);
            setPaginatedCategoryPosts(commit, data);
            commit("SET_CATEGORY_POSTS_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_CATEGORY_POSTS_LOADING", false);
            commit("SET_CATEGORY_POSTS_ERROR", getError(error));
        }
    },
    async getCommentById({ commit }, id) {
        try {
            const response = await BlogService.getCommentById(id);
            return response.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },
};

export const getters = {
    getPosts(state) {
        return state.posts;
    },
    getPost(state) {
        return state.post;
    },
    getLinks(state) {
        return state.links;
    },
    getMeta(state) {
        return state.meta;
    },
    getLoading(state) {
        return state.loading;
    },
    getError(state) {
        return state.error;
    },
    getPaginatedPosts(state) {
        return state.posts;
    },
    getPaginatedPostsMeta(state) {
        return state.meta;
    },
    getPaginatedPostsLinks(state) {
        return state.links;
    },
    getPaginatedPostsLoading(state) {
        return state.loading;
    },
    //commit("SET_POSTS", response.data);
    getPaginatedPostsError(state) {
        return state.error;
    },
    getCommentLoading(state) {
        return state.comment_loading;
    },
    getCommentError(state) {
        return state.comment_error;
    },
    getComments(state) {
        return state.comments;
    },
    getCommentsMeta(state) {
        return state.comments_meta;
    },
    getCommentsLinks(state) {
        return state.comments_links;
    },
    getCommentsLoading(state) {
        return state.comments_loading;
    },

    getCommentRepliesError(state) {
        return state.comment_replies_error;
    },
    getCommentReplies(state) {
        return state.comment_replies;
    },
    getCommentRepliesMeta(state) {
        return state.comment_replies_meta;
    },
    getCommentRepliesLinks(state) {
        return state.comment_replies_links;
    },
    getCommentRepliesLoading(state) {
        return state.comment_replies_loading;
    },
    getTrendingPosts(state) {
        return state.trending_posts;
    },
    getTrendingPostsMeta(state) {
        return state.trending_posts_meta;
    },
    getTrendingPostsLinks(state) {
        return state.trending_posts_links;
    },
    getTrendingPostsLoading(state) {
        return state.trending_posts_loading;
    },
    getTrendingPostsError(state) {
        return state.trending_posts_error;
    },
    getCategoryPosts(state) {
        return state.category_posts;
    },
    getCategoryPostsMeta(state) {
        return state.category_posts_meta;
    },
    getCategoryPostsLinks(state) {
        return state.category_posts_links;
    },
    getCategoryPostsLoading(state) {
        return state.category_posts_loading;
    },
    getCategoryPostsError(state) {
        return state.category_posts_error;
    },
    getCurrentReplyPage(state) {
        return state.current_reply_page;
    },
};