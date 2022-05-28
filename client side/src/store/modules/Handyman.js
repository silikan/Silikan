import { getError } from "@/utils/helpers";
import HandymanService from "@/services/HandymanService";

export const namespaced = true;

function setPaginatedHandymen(commit, response) {
  commit("SET_HANDYMEN", response.data.data);
  commit("SET_META", response.data.meta);
  commit("SET_LINKS", response.data.links);
  commit("SET_LOADING", false);
}

export const state = {
  Handymen: [],
  meta: null,
  links: null,
  loading: false,
  error: null,
};

export const mutations = {
  SET_HANDYMEN(state, Handymen) {
    state.Handymen = Handymen;
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
};

export const actions = {
  getHandymen({ commit }, page) {
    commit("SET_LOADING", true);
    HandymanService.getHandymen(page)
      .then((response) => {
        setPaginatedHandymen(commit, response);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
      });
  },
  paginateHandymen({ commit }, link) {
    commit("SET_LOADING", true);
    HandymanService.paginateHandymen(link)
      .then((response) => {
        setPaginatedHandymen(commit, response);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
      });
  },
};

export const getters = {
  Handymen: (state) => {
    return state.Handymen;
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
};
