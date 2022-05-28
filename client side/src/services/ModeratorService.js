import * as API from "@/services/API";

export default {
  async deleteUser(id) {
    return API.delete(`/moderator/delete-user/${id}`);
  },
  deleteGig(id) {
    return API.delete(`/moderator/delete-gig/${id}`);
  },
  deleteClientRequest(id) {
    return API.delete(`/moderator/delete-request/${id}`);
  },
  deleteAllUsers() {
    return API.delete(`/moderator/delete-all-users`);
  },
  deleteAllGigs() {
    return API.delete(`/moderator/delete-all-gigs`);
  },
  deleteAllRequests() {
    return API.delete(`/moderator/delete-all-requests`);
  },
  deleteAll() {
    return API.delete(`/moderator/delete-all`);
  },
  async getAllUsers() {
    return API.get(`/moderator/get-all-users`);
  },
  async getAllGigs() {
    return API.get(`/moderator/get-all-gigs`);
  },
  async getAllRequests() {
    return API.get(`/moderator/get-all-requests`);
  },
  async getAllHandymen() {
    return API.get(`/moderator/get-all-handymen`);
  },
  async getAllClients() {
    return API.get(`/moderator/get-all-clients`);
  },
  async getAllAdmins() {
    return API.get(`/moderator/get-all-admins`);
  },
  async getAllModerators() {
    return API.get(`/moderator/get-all-moderators`);
  },
  makeUserAdmin(id) {
    return API.put(`/moderator/make-user-admin/${id}`);
  },
  makeUserModerator(id) {
    return API.put(`/moderator/make-user-moderator/${id}`);
  },
  makeUserHandyman(id) {
    return API.put(`/moderator/make-user-handyman/${id}`);
  },
  getAllUsersPaginated(page) {
    return API.get(`/moderator/get-all-users-paginated/${page}`);
  },
  getAllGigsPaginated(page) {
    return API.get(`/moderator/get-all-gigs-paginated/${page}`);
  },
  getAllRequestsPaginated(page) {
    return API.get(`/moderator/get-all-requests-paginated/${page}`);
  },
  getAllHandymenPaginated(page) {
    return API.get(`/moderator/get-all-handymen-paginated/${page}`);
  },
  getAllClientsPaginated(page) {
    return API.get(`/moderator/get-all-clients-paginated/${page}`);
  },
  getAllAdminsPaginated(page) {
    return API.get(`/moderator/get-all-admins-paginated/${page}`);
  },
  getAllModeratorsPaginated(page) {
    return API.get(`/moderator/get-all-moderators-paginated/${page}`);
  },
  async getLink(link) {
    return API.apiClient.get(link);
  },
};
