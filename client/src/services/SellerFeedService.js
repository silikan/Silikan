import * as API from "@/services/API";

export default {
  async getThreeRandomUsers() {
    return await API.apiClient.get(`/feed/users`);
  },

  async getThreeRandomClientRequests() {
    return await API.apiClient.get(`/feed/requests`);
  },

  async getThreeRandomClients() {
    return await API.apiClient.get(`/feed/clients`);
  },
};
