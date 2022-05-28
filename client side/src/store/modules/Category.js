import CategoryService from "@/services/CategoryService";
import { getError } from "@/utils/helpers";

function setPaginatedCategoryGigs(commit, response) {
  commit("SET_GIGS", response.data.data);
  commit("SET_GIGS_META", response.data.meta);
  commit("SET_GIGS_LINKS", response.data.links);
  commit("SET_LOADING", false);
}

function setPaginatedCategoryClientRequest(commit, response) {
  commit("SET_REQUESTS", response.data.data);
  commit("SET_REQUESTS_META", response.data.meta);
  commit("SET_REQUESTS_LINKS", response.data.links);
  commit("SET_LOADING", false);
}
export const namespaced = true;

export const state = {
  gigs: [],
  requests: [],
  categories: [],
  gigsMeta: null,
  gigsLinks: null,
  gigsLoading: false,
  requestsMeta: null,
  requestsLinks: null,
  requestsLoading: false,
  error: null,
  loading: false,
};

export const mutations = {
  SET_GIGS(state, payload) {
    state.gigs = payload;
  },
  SET_REQUESTS(state, payload) {
    state.requests = payload;
  },
  SET_CATEGORIES(state, payload) {
    state.categories = payload;
  },
  SET_GIGS_META(state, payload) {
    state.gigsMeta = payload;
  },
  SET_GIGS_LINKS(state, payload) {
    state.gigsLinks = payload;
  },
  SET_GIGS_LOADING(state, payload) {
    state.gigsLoading = payload;
  },
  SET_REQUESTS_META(state, payload) {
    state.requestsMeta = payload;
  },
  SET_REQUESTS_LINKS(state, payload) {
    state.requestsLinks = payload;
  },
  SET_REQUESTS_LOADING(state, payload) {
    state.requestsLoading = payload;
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  },
};

export const actions = {
  async getCategories({ commit }) {
    try {
      commit("SET_LOADING", true);

      const response = await CategoryService.getCategories();
      commit("SET_LOADING", false);

      console.log(response.data);
      return response.data;
    } catch (error) {
      commit("SET_LOADING", false);

      commit("SET_ERROR", getError(error));
    }
  },
  async getGigsByCategoryPaginate({ commit }, { title, page }) {
    try {
      commit("SET_LOADING", true);
      const response = await CategoryService.getGigsByCategoryPaginate(title, page);
      setPaginatedCategoryGigs(commit, response);
      return response.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
  async getclientRequestsByCategoryPaginate({ commit }, { title, page }) {
    try {
      commit("SET_LOADING", true);
      const response = await CategoryService.getclientRequestsByCategoryPaginate(title, page);
      setPaginatedCategoryClientRequest(commit, response);
      return response.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
  async paginateCategoryGigs({ commit }, link) {
    try {
      commit("SET_LOADING", true);
      let data = await CategoryService.paginateCategoryGigs(link);
      setPaginatedCategoryGigs(commit, data);
      return data.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
  async paginateCategoryClientRequest({ commit }, link) {
    try {
      commit("SET_LOADING", true);
      let data = await CategoryService.paginateCategoryClientRequest(link);
      setPaginatedCategoryClientRequest(commit, data);
      return data.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
};

export const getters = {
  gigs: (state) => state.gigs,
  requests: (state) => state.requests,
  categories: (state) => state.categories,
  gigsMeta: (state) => state.gigsMeta,
  gigsLinks: (state) => state.gigsLinks,
  gigsLoading: (state) => state.gigsLoading,
  requestsMeta: (state) => state.requestsMeta,
  requestsLinks: (state) => state.requestsLinks,
  requestsLoading: (state) => state.requestsLoading,
  getError: (state) => state.error,
  loading: (state) => state.loading,
};
