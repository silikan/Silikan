import * as API from "@/services/API";

export default {
  async createTaskList(payload) {
    return await API.apiClient.post(`/task`, payload);
  },
  async addToTaskList(payload) {
    return await API.apiClient.post(`/add-to-task-list`, payload);
  },
  async getUserTaskItems(id) {
    return await API.apiClient.get(`/user/${id}/task`);
  },
  async setTaskItemsStatusToInProgress(payload) {
    return await API.apiClient.post(`/set-task-items-status-to-in-progress`, payload);
  },
  async setTaskItemsStatusToCancelled(payload) {
    return await API.apiClient.post(`/set-task-items-status-to-cancelled`, payload);
  },
  async setTaskItemStatusToCompleted(payload) {
    return await API.apiClient.post(`/set-task-items-status-to-completed`, payload);
  },
  async setTaskItemStatusToAccepted(payload) {
    return await API.apiClient.post(`/set-task-items-status-to-accepted`, payload);
  },
  async setTaskItemStatusToDeclined(payload) {
    return await API.apiClient.post(`/set-task-items-status-to-declined`, payload);
  },
  async setTaskItemStatusToPaid(payload) {
    return await API.apiClient.post(`/set-task-items-status-to-paid`, payload);
  },
  async getTaskItemById(id) {
    return await API.apiClient.get(`/task/${id}`);
  },
  async setTaskItemStatusToConfirmed(payload) {
    return await API.apiClient.post(`/set-task-items-status-to-confirmed`, payload);
  },
};
