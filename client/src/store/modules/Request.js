//get rooms from server
import RequestService from "@/services/RequestService.js";
import { getError } from "@/utils/helpers";
export const namespaced = true;

function setPaginatedClientRequest(commit, response) {
    console.log(response.data.data);
    commit("SET_REQUESTS", response.data.data);
    commit("SET_META", response.data.meta);
    commit("SET_LINKS", response.data.links);
    commit("SET_LOADING", false);
}
export const state = {
    title: "",
    description: "",
    category: "",
    price: "",
    priceDescription: "",
    paymentMethod: "",
    fetchedRequests: [],
    requestUser: {},
    userRequests: [],
    duration: 0,
    requests: [],
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
    SET_PRICE(state, price) {
        state.price = price;
    },
    SET_PRICE_DESCRIPTION(state, priceDescription) {
        state.priceDescription = priceDescription;
    },
    SET_PAYMENT_METHOD(state, paymentMethod) {
        state.paymentMethod = paymentMethod;
    },

    SET_FETCHED_REQUESTS(state, fetchedRequests) {
        state.fetchedRequests = fetchedRequests;
    },
    SET_REQUESTS_USER(state, requestUser) {
        state.requestUser = requestUser;
    },
    SET_USER_REQUESTS(state, userRequests) {
        state.userRequests = userRequests;
    },
    SET_DURATION(state, duration) {
        state.duration = duration;
    },
    SET_REQUESTS(state, requests) {
        state.requests = requests;
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
    async createRequest(payload) {
        /*     commit("SET_LOADING", true);
         */
        try {
            let title = payload.state.title;
            let description = payload.state.description;
            let category = payload.state.category;
            let price = payload.state.price;
            let paymentMethod = JSON.stringify(payload.state.paymentMethod);
            let priceDescription = payload.state.priceDescription;
            let duration = payload.state.duration;
            await RequestService.createRequest({
                title,
                description,
                category,
                price,
                paymentMethod,
                priceDescription,
                duration,
            });
            /*     commit("SET_LOADING", true);
             */
        } catch (error) {
            /*       commit("SET_ERROR", getError(error));
             */
            /*       commit("SET_LOADING", true);
             */
        }
    },

    async getRequest({ commit }, id) {
        commit("SET_LOADING", true);
        try {
            let data = await RequestService.getRequest(id);
            commit("SET_FETCHED_REQUESTS", data);
            commit("SET_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_LOADING", true);
        }
    },
    async getRequestUser({ commit }, id) {
        commit("SET_LOADING", true);
        try {
            let data = await RequestService.getRequestUser(id);
            commit("SET_GIG_USERS", data);
            commit("SET_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_LOADING", true);
        }
    },
    async getUserRequests({ commit }, id) {
        commit("SET_LOADING", true);
        try {
            let data = await RequestService.getUserRequests(id);
            commit("SET_USER_REQUESTS", data.data);
            commit("SET_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_LOADING", true);
        }
    },

    async getClientRequestsPaginate({ commit }, page) {
        commit("SET_LOADING", true);
        await RequestService.getClientRequestsPaginate(page)
            .then((response) => {
                setPaginatedClientRequest(commit, response);
            })
            .catch((error) => {
                commit("SET_ERROR", getError(error));
                commit("SET_LOADING", false);
                console.log(error);
            });
    },
    paginateClientRequests({ commit }, page) {
        commit("SET_LOADING", true);
        RequestService.paginateClientRequests(page)
            .then((response) => {
                setPaginatedClientRequest(commit, response);
            })
            .catch((error) => {
                commit("SET_ERROR", getError(error));
                commit("SET_LOADING", false);
                console.log(error);
            });
    },
    async requestPageViews({ commit }, id) {
        commit("SET_LOADING", true);
        try {
            let data = await RequestService.requestPageViews(id);
            commit("SET_PAGE_VIEWS", data.data);
            commit("SET_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_LOADING", true);
        }
    },
    async getClientRequestCategory({ commit }, id) {
        commit("SET_LOADING", true);
        try {
            let data = await RequestService.getClientRequestCategory(id);
            commit("SET_FETCHED_REQUESTS", data);
            commit("SET_LOADING", false);
            return data.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_LOADING", true);
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
    getPrice(state) {
        return state.price;
    },
    getPriceDescription(state) {
        return state.priceDescription;
    },
    getPaymentMethod(state) {
        return state.paymentMethod;
    },
    getFetchedRequests(state) {
        return state.fetchedRequests;
    },
    getRequestUser(state) {
        return state.requestUser;
    },
    getUserResuests(state) {
        return state.userRequests;
    },
    requests: (state) => {
        return state.requests;
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