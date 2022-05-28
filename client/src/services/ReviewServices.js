import * as API from "@/services/API";

export default {
  async postAReview(payload) {
    return await API.apiClient.post(`/rating`, payload);
  },
  async getUserRatings(id) {
    return await API.apiClient.get(`/user/${id}/rating`);
  },
  async getGigRatings(id) {
    return await API.apiClient.get(`/gig/${id}/rating`);
  },
  async getClientRequestRatings(id) {
    return await API.apiClient.get(`/request/${id}/rating`);
  },
};
