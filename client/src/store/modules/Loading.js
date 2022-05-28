export const namespaced = true;

export const state = {
  loading: false,
  progress: 0,
};

export const mutations = {
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_PROGRESS(state, progress) {
    state.progress = progress;
  },
};

export const actions = {
  changeLoading({ commit }, loading) {
    commit("SET_LOADING", !loading);
  },
  start({ commit }) {
    commit("SET_LOADING", true);
    commit("SET_PROGRESS", 0);

    let progress = 0;
    const interval = setInterval(() => {
      progress += 10;
      commit("SET_PROGRESS", progress);
      if (progress >= 100) {
        commit("SET_PROGRESS", 100);

        clearInterval(interval);
      }
    }, 100);
  },

  stop({ commit }) {
    commit("SET_PROGRESS", 100);

    commit("SET_LOADING", false);
  },
};

export const getters = {
  loading: (state) => {
    return state.loading;
  },
  progress: (state) => {
    return state.progress;
  },
};
