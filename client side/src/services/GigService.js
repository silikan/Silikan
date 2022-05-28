import * as API from "@/services/API";

export default {
    async createGig(payload) {
        return await API.apiClient.post(`/gig`, payload);
    },
    async UploadImage(payload, gigId) {
        return await API.apiClient.post(`/gig/image/${gigId}`, payload, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    },
    async getGig(id) {
        return await API.apiClient.get(`/gig/${id}`);
    },
    async getGigImages(id) {
        return await API.apiClient.get(`/gig/${id}}/image`);
    },
    async getGigUser(id) {
        return await API.apiClient.get(`/gig/${id}}/user`);
    },

    getUserGigs(id) {
        return API.apiClient.get(`/user/${id}/gig`);
    },

    async getGigsPaginate(page) {
        return await API.apiClient.get(`/paginate/gig`, {
            params: {
                page,
            },
        });
    },
    async paginateGigs(link) {
        return API.apiClient.get(link);
    },

    async gigPageViews(id) {
        return await API.apiClient.get(`/gig/${id}/views`);
    },
    async getGigCategory(id) {
        return await API.apiClient.get(`/gig/${id}/category`);
    },
};