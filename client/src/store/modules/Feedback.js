import FeedBackServices from "@/services/FeedBackServices";
import { getError } from "@/utils/helpers";
export const namespaced = true;

export const state = {
    open: false,
    feedback: {},
    feedbacks: [],
    error: null,
    loading: false,
};

export const mutations = {
    SET_FEEDBACK(state, payload) {
        state.feedback = payload;
    },
    SET_FEEDBACKS(state, payload) {
        state.feedbacks = payload;
    },
    SET_LOADING(state, payload) {
        state.loading = payload;
    },
    SET_ERROR(state, payload) {
        state.error = payload;
    },
    SET_OPEN(state, payload) {
        state.open = payload;
    },
};

export const actions = {
    async postFeedBack({ commit }, payload) {
        try {
            commit("SET_LOADING", true);

            let response = await FeedBackServices.postFeedBack(payload);
            commit("SET_LOADING", false);
            return response;
        } catch (error) {
            commit("SET_LOADING", false);
            commit("SET_ERROR", getError(error));
        }
    },
    toggleFeedBack({ commit }) {
        commit("SET_OPEN", !state.open);
    },
};

export const getters = {
    feedback(state) {
        return state.feedback;
    },
    feedbacks(state) {
        return state.feedbacks;
    },
    error(state) {
        return state.error;
    },
    loading(state) {
        return state.loading;
    },
    open(state) {
        return state.open;
    },
};