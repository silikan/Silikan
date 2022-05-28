import * as API from "@/services/API";

export default {
  getHandymen(page) {
    return API.apiClient.get(`/guest-users/handymen/?page=${page}`);
  },

  paginateHandymen(link) {
    return API.apiClient.get(link);
  },
};
