import * as API from "@/services/API";

export default {
  async searchFunction(search) {
    return API.apiClient.get("/search", {
      params: {
        search,
      },
    });
  },

  async searchGigs(query) {
    return API.apiClient.get("/search/gigs", {
      params: {
        query,
      },
    });
  },
  async searchGigsPaginate(query, page) {
    return API.apiClient.get("/search/gigs/paginate", {
      params: {
        page,
        query,
      },
    });
  },
  async searchClientRequest(query) {
    return API.apiClient.get("/search/requests", {
      params: {
        query,
      },
    });
  },

  async searchClientRequestPaginate(query, page) {
    return API.apiClient.get("/search/requests/paginate", {
      params: {
        query,
        page,
      },
    });
  },

  async searchHandymen(query) {
    return API.apiClient.get("/search/handymen", {
      params: {
        query,
      },
    });
  },
  async searchHandymenPaginate(query, page) {
    return API.apiClient.get("/search/handymen/paginate", {
      params: {
        query,
        page,
      },
    });
  },
  paginateSeachGigs(link) {
    return API.apiClient.get(link);
  },
  paginateSeachClientRequest(link) {
    return API.apiClient.get(link);
  },
  paginateSeachHandymen(link) {
    return API.apiClient.get(link);
  },
};
