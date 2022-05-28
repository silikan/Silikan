//get rooms from server
import SearchService from "@/services/SearchService.js";
import { getError } from "@/utils/helpers";

function setPaginatedSeachGigs(commit, response) {
  commit("SET_SEARCH_GIGS", response.data.data);
  commit("SET_SEARCH_GIGS_META", response.data.meta);
  commit("SET_SEARCH_GIGS_LINKS", response.data.links);
  commit("SET_SEARCH_GIGS_LOADING", false);
}
function setPaginatedSearchHandymen(commit, response) {
  commit("SET_SEARCH_HANDYMEN", response.data.data);
  commit("SET_SEARCH_HANDYMEN_META", response.data.meta);
  commit("SET_SEARCH_HANDYMEN_LINKS", response.data.links);
  commit("SET_SEARCH_HANDYMEN_LOADING", false);
}

function setPaginatedSearchClientRequest(commit, response) {
  commit("SET_SEARCH_CLIENT_REQUEST", response.data.data);
  commit("SET_SEARCH_CLIENT_REQUEST_META", response.data.meta);
  commit("SET_SEARCH_CLIENT_REQUEST_LINKS", response.data.links);
  commit("SET_SEARCH_CLIENT_REQUEST_LOADING", false);
}

export const namespaced = true;

export const state = {
  searchResults: [],
  searchGigs: [],
  searchGigsMeta: null,
  searchGigsLinks: null,
  searchGigsLoading: false,
  searchHandymen: [],
  searchHandymenMeta: null,
  searchHandymenLinks: null,
  searchHandymenLoading: false,
  searchClientRequest: [],
  searchClientRequestMeta: null,
  searchClientRequestLinks: null,
  searchClientRequestLoading: false,
  loading: false,
  error: null,
};

export const mutations = {
  SET_SEARCH_RESULTS(state, payload) {
    state.searchResults = payload;
  },
  SET_SEARCH_GIGS(state, payload) {
    state.searchGigs = payload;
  },
  SET_SEARCH_GIGS_META(state, payload) {
    state.searchGigsMeta = payload;
  },

  SET_SEARCH_GIGS_LINKS(state, payload) {
    state.searchGigsLinks = payload;
  },
  SET_SEARCH_GIGS_LOADING(state, payload) {
    state.searchGigsLoading = payload;
  },
  SET_SEARCH_HANDYMEN(state, payload) {
    state.searchHandymen = payload;
  },
  SET_SEARCH_HANDYMEN_META(state, payload) {
    state.searchHandymenMeta = payload;
  },
  SET_SEARCH_HANDYMEN_LINKS(state, payload) {
    state.searchHandymenLinks = payload;
  },
  SET_SEARCH_HANDYMEN_LOADING(state, payload) {
    state.searchHandymenLoading = payload;
  },
  SET_SEARCH_CLIENT_REQUEST(state, payload) {
    state.searchClientRequest = payload;
  },
  SET_SEARCH_CLIENT_REQUEST_META(state, payload) {
    state.searchClientRequestMeta = payload;
  },
  SET_SEARCH_CLIENT_REQUEST_LINKS(state, payload) {
    state.searchClientRequestLinks = payload;
  },
  SET_SEARCH_CLIENT_REQUEST_LOADING(state, payload) {
    state.searchClientRequestLoading = payload;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
};

export const actions = {
  async search({ commit }, search) {
    commit("SET_LOADING", true);
    try {
      const searchResults = await SearchService.searchFunction(search);
      commit("SET_SEARCH_RESULTS", searchResults);
      commit("SET_LOADING", false);
      return searchResults.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
  async searchGigsPaginate({ commit }, payload) {
    try {
      let page = payload.page;
      let query = payload.query;
      console.log(query, page);
      commit("SET_SEARCH_GIGS_LOADING", true);
      const searchGigs = await SearchService.searchGigsPaginate(query, page);
      setPaginatedSeachGigs(commit, searchGigs);
      return searchGigs.data;
    } catch (error) {
      commit("SET_SEARCH_GIGS_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async paginateGigs({ commit }, link) {
    try {
      commit("SET_SEARCH_GIGS_LOADING", true);
      const searchGigs = await SearchService.paginateSeachGigs(link);
      setPaginatedSeachGigs(commit, searchGigs);
      return searchGigs.data;
    } catch (error) {
      commit("SET_SEARCH_GIGS_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async searchHandymenPaginate({ commit }, payload) {
    try {
      let page = payload.page;
      let query = payload.query;
      commit("SET_SEARCH_HANDYMEN_LOADING", true);
      const searchHandymen = await SearchService.searchHandymenPaginate(query, page);
      setPaginatedSearchHandymen(commit, searchHandymen);
      return searchHandymen.data;
    } catch (error) {
      commit("SET_SEARCH_HANDYMEN_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async paginateHandymen({ commit }, link) {
    try {
      commit("SET_SEARCH_HANDYMEN_LOADING", true);
      const searchHandymen = await SearchService.paginateSeachHandymen(link);
      setPaginatedSearchHandymen(commit, searchHandymen);
      return searchHandymen.data;
    } catch (error) {
      commit("SET_SEARCH_HANDYMEN_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async searchClientRequestPaginate({ commit }, payload) {
    try {
      let page = payload.page;
      let query = payload.query;
      commit("SET_SEARCH_CLIENT_REQUEST_LOADING", true);
      const searchClientRequest = await SearchService.searchClientRequestPaginate(query, page);
      setPaginatedSearchClientRequest(commit, searchClientRequest);
      return searchClientRequest.data;
    } catch (error) {
      commit("SET_SEARCH_CLIENT_REQUEST_LOADING", true);
      commit("SET_ERROR", getError(error));
    }
  },
  async paginateSeachClientRequest({ commit }, link) {
    try {
      commit("SET_SEARCH_CLIENT_REQUEST_LOADING", true);
      const searchClientRequest = await SearchService.paginateSeachClientRequest(link);
      setPaginatedSearchClientRequest(commit, searchClientRequest);
      return searchClientRequest.data;
    } catch (error) {
      commit("SET_SEARCH_CLIENT_REQUEST_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
};

export const getters = {
  getSearchResults(state) {
    return state.searchResults;
  },
  getSearchGigs(state) {
    return state.searchGigs;
  },
  getSearchGigsMeta(state) {
    return state.searchGigsMeta;
  },
  getSearchGigsLinks(state) {
    return state.searchGigsLinks;
  },
  getSearchGigsLoading(state) {
    return state.searchGigsLoading;
  },
  getSearchHandymen(state) {
    return state.searchHandymen;
  },
  getSearchHandymenMeta(state) {
    return state.searchHandymenMeta;
  },
  getSearchHandymenLinks(state) {
    return state.searchHandymenLinks;
  },
  getSearchHandymenLoading(state) {
    return state.searchHandymenLoading;
  },
  getSearchClientRequest(state) {
    return state.searchClientRequest;
  },
  getSearchClientRequestMeta(state) {
    return state.searchClientRequestMeta;
  },
  getSearchClientRequestLinks(state) {
    return state.searchClientRequestLinks;
  },
  getSearchClientRequestLoading(state) {
    return state.searchClientRequestLoading;
  },
  getError(state) {
    return state.error;
  },
};
