//get rooms from server
import ChatService from "@/services/ChatService";
import { getError } from "@/utils/helpers";

export const namespaced = true;
function setPaginatedMessages(commit, response) {
  commit("SET_MESSAGES", response.data.data);
  commit("SET_META", response.data.meta);
  commit("SET_LINKS", response.data.links);

  commit("SET_LOADING", false);
  commit("SET_PAGES", response.data.last_page);
}

export const state = {
  roomUsers: [],
  userRooms: [],
  messages: [],
  meta: null,
  links: null,
  loading: false,
  error: null,
  last_page: null,
};

export const mutations = {
  SET_ROOM_USERS(state, roomUsers) {
    state.roomUsers = roomUsers;
  },

  SET_USER_ROOMS(state, userRooms) {
    state.userRooms = userRooms;
  },
  SET_MESSAGES(state, messages) {
    state.messages = messages;
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
  SET_PAGES(state, last_page) {
    state.last_page = last_page;
  },
};

export const actions = {
  async getRoomUsers({ commit }, id) {
    commit("SET_LOADING", true);
    return await ChatService.getRoomUsers(id)
      .then((response) => {
        commit("SET_ROOM_USERS", response.data.data);
        commit("SET_LOADING", false);
        return response;

      })
      .catch((error) => {
        commit("SET_ERROR", getError(error));
        commit("SET_LOADING", false);
        console.log(error);
      });
  },
  async getUserRooms({ commit }, id) {
    commit("SET_LOADING", true);
    return await ChatService.getUserRooms(id)
      .then((response) => {
        //set user rooms
        commit("SET_USER_ROOMS", response.data.data);
        commit("SET_LOADING", false);
        return response.data;
      })
      .catch((error) => {
        commit("SET_ERROR", getError(error));
        commit("SET_LOADING", false);
        console.log(error);
      });
  },
  getMessages({ commit }, payload) {
    let room_id = payload.room_id;
    let page = payload.page;
    console.log(page);
    commit("SET_LOADING", true);
    ChatService.getMessages(room_id, page)
      .then((response) => {
        setPaginatedMessages(commit, response);
        console.log(response);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
        console.log(error);
      });
  },
  paginatemessages({ commit }, link) {
    commit("SET_LOADING", true);
    ChatService.paginateMessages(link)
      .then((response) => {
        setPaginatedMessages(commit, response);
      })
      .catch((error) => {
        commit("SET_LOADING", false);
        commit("SET_ERROR", getError(error));
        console.log(error);
      });
  },
};

export const getters = {
  roomUsers: (state) => state.roomUsers,
  userRooms: (state) => state.userRooms,
  messages: (state) => state.messages,
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
  last_page: (state) => {
    return state.last_page;
  },
};
