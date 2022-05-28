import * as API from "@/services/API";

export default {
  async Sendnotification(payload) {
    return await API.apiClient.post("/notification", payload.data);
  },
  async createNotificationRoom() {
    return await API.apiClient.post("/notification/room");
  },
  async getAthUserRoomNotifications(page) {
    return await API.apiClient.get(`/notification/room`, {
      params: {
        page,
      },
    });
  },

  async getLink(link) {
    return API.apiClient.get(link);
  },
  async getUserNotificationRoom(id) {
    return await API.apiClient.get(`/user/${id}/notification/room`);
  },
  async sendChatNotification(payload) {
    return await API.apiClient.post("/chat/sendnotification", payload.data);
  },
};
