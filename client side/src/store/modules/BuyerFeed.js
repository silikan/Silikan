export const namespaced = true;
import { getError } from "@/utils/helpers";
import BuyerFeedService from "@/services/BuyerFeedService";

export const state = {
  users: [],
  gigs: [],
  handymen: [],
  loading: false,
  error: null,
};

export const mutations = {
  setUsers(state, users) {
    state.users = users;
  },

  setGigs(state, gigs) {
    state.gigs = gigs;
  },
  setHandymen(state, handymen) {
    state.handymen = handymen;
  },

  setLoading(state, isLoading) {
    state.isLoading = isLoading;
  },
};

export const actions = {
  async getThreeRandomUsers({ commit }) {
    commit("setLoading", true);
    try {
      const response = await BuyerFeedService.getThreeRandomUsers();
      commit("setUsers", response.data);
      return response.data;
    } catch (error) {
      commit("setError", getError(error));
    }
    commit("setLoading", false);
  },
  async getThreeRandomGigs({ commit }) {
    commit("setLoading", true);
    try {
      const response = await BuyerFeedService.getThreeRandomGigs();
      commit("setGigs", response.data);
      return response.data;
    } catch (error) {
      commit("setError", getError(error));
    }
    commit("setLoading", false);
  },
  async getThreeRandomHandymen({ commit }) {
    commit("setLoading", true);
    try {
      const response = await BuyerFeedService.getThreeRandomHandymen();
      commit("setHandymen", response.data);
      return response.data;
    } catch (error) {
      commit("setError", getError(error));
    }
    commit("setLoading", false);
  },
};

export const getters = {
  users: (state) => state.users,
  gigs: (state) => state.gigs,
  handymen: (state) => state.handymen,
  loading: (state) => state.loading,
  error: (state) => state.error,
};
