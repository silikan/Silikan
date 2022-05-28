import { getError } from "@/utils/helpers";
import NotificationService from "@/services/NotificationService";

export const namespaced = true;
function setPaginatedNotification(commit, response) {
  console.log("setPaginatedNotification", response);
  commit("SET_NOTIFICATIONS", response.data.data);
  commit("SET_NOTIFICATION_META", response.data.meta);
  commit("SET_NOTIFICATION_LINKS", response.data.links);
  commit("SET_NOTIFICATION_LOADING", false);
}
export const state = {
  Notifications: [],
  loading: false,
  error: null,
  notificationLoading: false,
  meta: {},
  links: {},
};

export const mutations = {
  SET_NOTIFICATIONS(state, notifications) {
    state.Notifications = notifications;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  SET_NOTIFICATION_LOADING(state, loading) {
    state.notificationLoading = loading;
  },
  SET_NOTIFICATION_META(state, meta) {
    state.meta = meta;
  },
  SET_NOTIFICATION_LINKS(state, links) {
    state.links = links;
  },
};

export const actions = {
  async createNotificationRoom({ commit }) {
    try {
      commit("SET_LOADING", true);
      const notificationRoom = await NotificationService.createNotificationRoom();
      commit("SET_LOADING", false);
      return notificationRoom.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
  async getAthUserRoomNotifications({ commit }, page) {
    try {
      commit("SET_NOTIFICATION_LOADING", true);
      const Notifications = await NotificationService.getAthUserRoomNotifications(page);
      setPaginatedNotification(commit, Notifications);
      return Notifications.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_NOTIFICATION_LOADING", false);
    }
  },
  async getLink({ commit }, link) {
    try {
      commit("SET_NOTIFICATION_LOADING", true);
      const Notifications = await NotificationService.getLink(link);
      setPaginatedNotification(commit, Notifications);
      return Notifications.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_NOTIFICATION_LOADING", false);
    }
  },

  async Sendnotification({ commit }, payload) {
    try {
      commit("SET_LOADING", true);

      let notification = await NotificationService.Sendnotification(payload);
      commit("SET_LOADING", false);

      return notification.data;
    } catch (error) {
      commit("SET_LOADING", false);

      commit("SET_ERROR", getError(error));
    }
  },
  async getUserNotificationRoom({ commit }, payload) {
    try {
      console.log(payload);
      commit("SET_LOADING", true);
      let id = payload.userId;
      const response = await NotificationService.getUserNotificationRoom(id);
      commit("SET_LOADING", false);

      return response.data;
    } catch (error) {
      commit("SET_LOADING", false);

      commit("SET_ERROR", getError(error));
    }
  },
  async sendChatNotification({ commit }, payload) {
    try {
      commit("SET_LOADING", true);

      const response = await NotificationService.sendChatNotification(payload);
      commit("SET_LOADING", false);

      return response.data;
    } catch (error) {
      commit("SET_LOADING", false);

      commit("SET_ERROR", getError(error));
    }
  },
};

export const getters = {
  getNotifications(state) {
    return state.Notifications;
  },
  getLoading(state) {
    return state.loading;
  },
  getError(state) {
    return state.error;
  },
  getNotificationLoading(state) {
    return state.notificationLoading;
  },
  getNotificationMeta(state) {
    return state.meta;
  },
  getNotificationLinks(state) {
    return state.links;
  },
  meta(state) {
    return state.meta;
  },
  links(state) {
    return state.links;
  },
};
