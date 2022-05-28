import * as API from "@/services/API";

export default {
  async getGigsByCategoryPaginate(title, page) {
    return await API.apiClient.get(`category/${title}/gigs/paginate`, {
      params: {
        page,
      },
    });
  },
  async getclientRequestsByCategoryPaginate(title, page) {
    return await API.apiClient.get(`category/${title}/requests/paginate`, {
      params: {
        page,
      },
    });
  },
  async getCategories() {
    return await API.apiClient.get(`category`);
  },

  paginateCategoryGigs(link) {
    return API.apiClient.get(link);
  },
  paginateCategoryClientRequest(link) {
    return API.apiClient.get(link);
  },
};
