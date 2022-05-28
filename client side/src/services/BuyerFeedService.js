import * as API from "@/services/API";

export default {
  async getThreeRandomUsers() {
    return await API.apiClient.get(`/feed/users`);
  },
  async getThreeRandomGigs() {
    return await API.apiClient.get(`/feed/gigs`);
  },

  async getThreeRandomHandymen() {
    return await API.apiClient.get(`/feed/handymen`);
  },
};
