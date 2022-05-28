import router from "@/router";
import { getError } from "@/utils/helpers";
import AuthService from "@/services/AuthService";

export const namespaced = true;

export const state = {
    user: null,
    loading: false,
    error: null,
};

export const mutations = {
    SET_USER(state, user) {
        state.user = user;
    },
    SET_LOADING(state, loading) {
        state.loading = loading;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
};

export const actions = {
    logout({ commit, dispatch }) {
        return AuthService.logout()
            .then(() => {
                commit("SET_USER", null);
                dispatch("setGuest", { value: "isGuest" });
                if (router.currentRoute.name !== "signin") {
                    router.push({ path: "/signin" });
                }
            })
            .catch((error) => {
                commit("SET_ERROR", getError(error));
            });
    },
    async getAuthUser({ commit }) {
        commit("SET_LOADING", true);
        try {
            const response = await AuthService.getAuthUser();
            commit("SET_USER", response.data.data);
            commit("SET_LOADING", false);
            return response.data.data;
        } catch (error) {
            commit("SET_LOADING", false);
            commit("SET_USER", null);
            commit("SET_ERROR", getError(error));
        }
    },
    setGuest(context, { value }) {
        window.localStorage.setItem("guest", value);
    },
};

/*
 email,
      username,
      bio,
      date_of_birth,
      phone_number,
      address,
      country,
      city,
      state,
      zip_code,
      website,
      education,
      certifications,
      experience,
      social_links,
      skills,
*/
export const getters = {
    authUser: (state) => state.user,
    isAdmin: (state) => state.user.isAdmin,
    isHandyman: (state) => state.user.isHandyman,
    isClient: (state) => state.user.isClient,
    isModerator: (state) => state.user.isModerator,
    error: (state) => state.error,
    id: (state) => state.user.id,
    loading: (state) => state.loading,
    emailVerified: (state) => state.user.emailVerified,
    education: (state) => (state.user.education !== null ? state.user.education : JSON.stringify([])),
    certifications: (state) =>
        state.user.certifications !== null ? state.user.certifications : JSON.stringify([]),
    experience: (state) =>
        state.user.experience !== null ? state.user.experience : JSON.stringify([]),
    skills: (state) => (state.user.skills !== null ? state.user.skills : JSON.stringify([])),
    password_is_null: (state) => state.user.password_is_null,
    loggedIn: (state) => !!state.user,
    guest: () => {
        const storageItem = window.localStorage.getItem("guest");
        if (!storageItem) return false;
        if (storageItem === "isGuest") return true;
        if (storageItem === "isNotGuest") return false;
    },
};