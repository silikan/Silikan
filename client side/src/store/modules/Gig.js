//get rooms from server
import GigService from "@/services/GigService.js";
import { getError } from "@/utils/helpers";
export const namespaced = true;

function setPaginatedGig(commit, response) {
    console.log(response.data.data);
    commit("SET_GIGS", response.data.data);
    commit("SET_META", response.data.meta);
    commit("SET_LINKS", response.data.links);
    commit("SET_LOADING", false);
}
export const state = {
    title: "",
    description: "",
    category: "",
    basic: {},
    standard: {},
    premium: {},
    paymentMethod: "",
    GigImages: {},

    fetchedGigs: [],
    fetchedGigImages: [],
    gigUser: {},
    userGigs: [],
    gigs: [],
    meta: null,
    links: null,
    loading: false,
    error: null,
    pageViews: 0,
};

export const mutations = {
    SET_TITLE(state, title) {
        state.title = title;
    },
    SET_DESCRIPTION(state, description) {
        state.description = description;
    },

    SET_CATEGORY(state, category) {
        state.category = category;
    },
    SET_BASIC(state, basic) {
        state.basic = basic;
    },
    SET_STANDARD(state, standard) {
        state.standard = standard;
    },
    SET_PREMIUM(state, premium) {
        state.premium = premium;
    },
    SET_PAYMENT_METHOD(state, paymentMethod) {
        state.paymentMethod = paymentMethod;
    },
    SET_GIG_IMAGES(state, GigImages) {
        state.GigImages = GigImages;
    },
    SET_FETCHED_GIGS(state, fetchedGigs) {
        state.fetchedGigs = fetchedGigs;
    },
    SET_FETCHED_GIG_IMAGES(state, fetchedGigImages) {
        state.fetchedGigImages = fetchedGigImages;
    },
    SET_GIG_USER(state, gigUser) {
        state.gigUser = gigUser;
    },
    SET_USER_GIGS(state, userGigs) {
        state.userGigs = userGigs;
    },

    SET_GIGS(state, gigs) {
        state.gigs = gigs;
    },

    SET_META(state, meta) {
        state.meta = meta;
    },
    SET_LINKS(state, links) {
        state.links = links;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
    SET_PAGE_VIEWS(state, pageViews) {
        state.pageViews = pageViews;
    },
};

export const actions = {
    async createGig(payload) {
        /*     commit("SET_LOADING", true);
         */
        try {
            console.log(payload.state.title);
            let title = payload.state.title;
            let description = payload.state.description;
            let category = payload.state.category;
            let basic = payload.state.basic;
            let standard = payload.state.standard;
            let premium = payload.state.premium;
            let paymentMethod = payload.state.paymentMethod;
            let GigImages = payload.state.GigImages;
            let data = await GigService.createGig({
                title,
                description,
                category,
                basic,
                standard,
                premium,
                paymentMethod,
            });
            let gigId = data.data.id;
            await GigService.UploadImage(GigImages, gigId);
            /*       commit("SET_LOADING", false);
             */
        } catch (error) {
            /*       commit("SET_LOADING", false);
             */
            /*       commit("SET_ERROR", getError(error));
             */
        }
    },

    async getGig({ commit }, id) {
        commit("SET_LOADING", true);
        try {
            let data = await GigService.getGig(id);
            commit("SET_FETCHED_GIGS", data);
            commit("SET_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_LOADING", false);
            commit("SET_ERROR", getError(error));
        }
    },
    async getGigImages({ commit }, id) {
        commit("SET_LOADING", true);
        try {
            let data = await GigService.getGigImages(id);
            commit("SET_FETCHED_GIG_IMAGES", data);
            commit("SET_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_LOADING", false);
            commit("SET_ERROR", getError(error));
        }
    },
    async getGigUser({ commit }, id) {
        commit("SET_LOADING", true);
        try {
            let data = await GigService.getGigUser(id);
            commit("SET_GIG_USE R", data);
            commit("SET_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_LOADING", false);
            commit("SET_ERROR", getError(error));
        }
    },
    async getUserGigs({ commit }, id) {
        commit("SET_LOADING", true);
        try {
            let data = await GigService.getUserGigs(id);
            commit("SET_USER_GIGS", data.data);
            commit("SET_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_LOADING", false);
            commit("SET_ERROR", getError(error));
        }
    },
    async getGigsPaginate({ commit }, page) {
        commit("SET_LOADING", true);
        await GigService.getGigsPaginate(page)
            .then((response) => {
                setPaginatedGig(commit, response);
            })
            .catch((error) => {
                console.log(error);
                commit("SET_ERROR", getError(error));
                commit("SET_LOADING", false);
            });
    },

    async paginateGigs({ commit }, page) {
        commit("SET_LOADING", true);
        GigService.paginateGigs(page)
            .then((response) => {
                setPaginatedGig(commit, response);
            })
            .catch((error) => {
                commit("SET_ERROR", getError(error));
                commit("SET_LOADING", false);
                console.log(error);
            });
    },
    async gigPageViews({ commit }, id) {
        commit("SET_LOADING", true);
        try {
            let data = await GigService.gigPageViews(id);
            commit("SET_PAGE_VIEWS", data.data);
            commit("SET_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_LOADING", false);
            commit("SET_ERROR", getError(error));
        }
    },
    async getGigCategory({ commit }, id) {
        commit("SET_LOADING", true);
        try {
            let data = await GigService.getGigCategory(id);
            commit("SET_CATEGORY", data.data);
            commit("SET_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_LOADING", false);
            commit("SET_ERROR", getError(error));
        }
    },
};

export const getters = {
    getTitle(state) {
        return state.title;
    },
    getDescription(state) {
        return state.description;
    },
    getCategory(state) {
        return state.category;
    },
    getBasic(state) {
        return state.basic;
    },
    getStandard(state) {
        return state.standard;
    },
    getPremium(state) {
        return state.premium;
    },
    getPaymentMethod(state) {
        return state.paymentMethod;
    },
    getFormDataImage(state) {
        return state.formDataImage;
    },
    getFetchedGigs(state) {
        return state.fetchedGigs;
    },
    getFetchedGigImages(state) {
        return state.fetchedGigImages;
    },
    getGigUser(state) {
        return state.gigUser;
    },
    getUserGigs(state) {
        return state.userGigs;
    },
    gigs: (state) => {
        return state.gigs;
    },
    meta: (state) => {
        return state.meta;
    },
    links: (state) => {
        return state.links;
    },
    loading: (state) => {
        return state.loading;
    },
    error: (state) => {
        return state.error;
    },
    pageViews: (state) => {
        return state.pageViews;
    },
};