import * as API from "@/services/API";

export default {
    async postFeedBack(payload) {
        await API.apiClient.post("/feedback", payload);
    },
};