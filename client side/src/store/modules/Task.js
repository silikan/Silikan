//get rooms from server
import TaskService from "@/services/TaskService.js";
import { getError } from "@/utils/helpers";

export const namespaced = true;

export const state = {
  task: {},
  taskItems: [],
  taskItemData: [],
  taskItem: {},
  error: null,
  loading: false,
};

export const mutations = {
  SET_TASK(state, payload) {
    state.task = payload;
  },
  SET_TASK_ITEMS(state, payload) {
    state.taskItems = payload;
  },
  SET_TASK_ITEM_DATA(state, payload) {
    state.taskItemData = payload;
  },
  SET_TASK_ITEM(state, payload) {
    state.taskItem = payload;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  }
};

export const actions = {
  async createTaskList({ commit }) {
    commit("SET_LOADING", true);
    try {
    const task = await TaskService.createTaskList();
    commit("SET_TASK", task);
    commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
  async addToTaskList({ commit }, payload) {
    commit("SET_LOADING", true);
    try{
    let data = {
      user_id: payload.user_id,
    };
    await TaskService.createTaskList(data)
      .then(async (result) => {
        console.log(result.data);
        console.log(payload);

        let sentData = {
          type: payload.type,
          gig_id: payload.gig_id,
          task_id: result.data.id,
          request_id: payload.request_id,
          client_id: payload.client_id,
          handyman_id: payload.handyman_id,
          cart_item_id: payload.cart_item_id,
          plan: payload.plan,
        };

        commit("SET_TASK", result.data);
        let data = await TaskService.addToTaskList(sentData);

        commit("SET_TASK_ITEM_DATA", data.data);
        return data.data;
      })
      .catch((error) => {
        commit("SET_ERROR", getError(error));
        console.log("error");
      });
    } catch (error) {
      commit("SET_ERROR", getError(error));
    }
  },
  async getUserTaskItems({ commit }, id) {
    commit("SET_LOADING", true);
    try {
    const taskItems = await TaskService.getUserTaskItems(id);
    commit("SET_TASK_ITEMS", taskItems);
    console.log(taskItems);
    commit("SET_LOADING", false);
    return taskItems.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async setTaskItemsStatusToInProgress({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
    let taskItemData = await TaskService.setTaskItemsStatusToInProgress(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    commit("SET_LOADING", false);
    return taskItemData.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async setTaskItemsStatusToCancelled({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
    let taskItemData = await TaskService.setTaskItemsStatusToCancelled(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    commit("SET_LOADING", false);
    return taskItemData.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
  async setTaskItemStatusToCompleted({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
    let taskItemData = await TaskService.setTaskItemStatusToCompleted(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    commit("SET_LOADING", false);
    return taskItemData.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async setTaskItemStatusToAccepted({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
    let taskItemData = await TaskService.setTaskItemStatusToAccepted(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    commit("SET_LOADING", false);
    return taskItemData.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async setTaskItemStatusToDeclined({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
    let taskItemData = await TaskService.setTaskItemStatusToDeclined(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    commit("SET_LOADING", false);
    return taskItemData.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async setTaskItemStatusToPaid({ commit }, payload) {
    commit("SET_LOADING", true);
    try {

    let taskItemData = await TaskService.setTaskItemStatusToPaid(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    commit("SET_LOADING", false);
    return taskItemData.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async getTaskItemById({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
    let id = payload.id;
    const taskItem = await TaskService.getTaskItemById(id);
    commit("SET_TASK_ITEM", taskItem);
    commit("SET_LOADING", false);
    return taskItem.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async setTaskItemStatusToConfirmed({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
    let taskItemData = await TaskService.setTaskItemStatusToConfirmed(payload);
    commit("SET_TASK_ITEM_DATA", taskItemData.data);
    commit("SET_LOADING", false);
    return taskItemData.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
};

export const getters = {
  getTask(state) {
    return state.task;
  },
  getTaskItems(state) {
    return state.taskItems;
  },
  getTaskItemData(state) {
    return state.taskItemData;
  },
  getTaskItem(state) {
    return state.taskItem;
  },
  getError(state) {
    return state.error;
  },
  getLoading(state) {
    return state.loading;
  }
};
