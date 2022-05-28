import * as API from "@/services/API";

export default {
    async deleteUser(id) {
        return API.apiClient.delete(`/admin/delete-user/${id}`);
    },
    deleteGig(id) {
        return API.apiClient.delete(`/admin/delete-gig/${id}`);
    },
    deleteClientRequest(id) {
        return API.apiClient.delete(`/admin/delete-request/${id}`);
    },
    deleteAllUsers() {
        return API.apiClient.delete(`/admin/delete-all-users`);
    },
    deleteAllGigs() {
        return API.apiClient.delete(`/admin/delete-all-gigs`);
    },
    deleteAllRequests() {
        return API.apiClient.delete(`/admin/delete-all-requests`);
    },
    deleteAll() {
        return API.apiClient.delete(`/admin/delete-all`);
    },
    async getAllUsers() {
        return API.apiClient.get(`/admin/get-all-users`);
    },
    async getAllGigs() {
        return API.apiClient.get(`/admin/get-all-gigs`);
    },
    async getAllRequests() {
        return API.apiClient.get(`/admin/get-all-requests`);
    },
    async getAllHandymen() {
        return API.apiClient.get(`/admin/get-all-handymen`);
    },
    async getAllClients() {
        return API.apiClient.get(`/admin/get-all-clients`);
    },
    async getAllAdmins() {
        return API.apiClient.get(`/admin/get-all-admins`);
    },
    async getAllModerators() {
        return API.apiClient.get(`/admin/get-all-moderators`);
    },
    makeUserAdmin(id) {
        return API.apiClient.post(`/admin/make-user-admin/${id}`);
    },
    makeUserModerator(id) {
        return API.apiClient.post(`/admin/make-user-moderator/${id}`);
    },
    makeUserHandyman(id) {
        return API.apiClient.post(`/admin/make-user-handyman/${id}`);
    },
    getAllUsersPaginated(page) {
        return API.apiClient.get(`/admin/get-all-users-paginate`, {
            params: { page },
        });
    },
    getAllGigsPaginated(page) {
        return API.apiClient.get(`/admin/get-all-gigs-paginate/`, {
            params: { page },
        });
    },
    getAllRequestsPaginated(page) {
        return API.apiClient.get(`/admin/get-all-requests-paginate`, {
            params: { page },
        });
    },
    getAllHandymenPaginated(page) {
        return API.apiClient.get(`/admin/get-all-handymen-paginated/${page}`);
    },
    getAllClientsPaginated(page) {
        return API.apiClient.get(`/admin/get-all-clients-paginated/${page}`);
    },
    getAllAdminsPaginated(page) {
        return API.apiClient.get(`/admin/get-all-admins-paginate/${page}`);
    },
    getAllModeratorsPaginated(page) {
        return API.apiClient.get(`/admin/get-all-moderators-paginated/${page}`);
    },
    async getLink(link) {
        return API.apiClient.get(link);
    },

    async getAllTransactionsPaginated(page) {
        return API.apiClient.get(`/admin/get-all-transactions`, {
            params: { page },
        });
    },

    async stats() {
        return API.apiClient.get(`/admin/stats`);
    },

    async getAllFeedBackPaginated(page) {
        return API.apiClient.get(`/admin/get-all-feedback-paginate`, {
            params: { page },
        });
    },
};