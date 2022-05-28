import AdminServices from "../../services/AdminServices";
import { getError } from "@/utils/helpers";

export const namespaced = true;

function setPaginatedGigs(commit, response) {
    commit("SET_GIGS", response.data.data);
    commit("SET_GIGS_META", response.data.meta);
    commit("SET_GIGS_LINKS", response.data.links);
    commit("SET_GIGS_LOADING", false);
}

function setPaginatedUsers(commit, response) {
    commit("SET_USERS", response.data.data);
    commit("SET_USERS_META", response.data.meta);
    commit("SET_USERS_LINKS", response.data.links);
    commit("SET_USERS_LOADING", false);
}

function setPaginatedClientRequest(commit, response) {
    commit("SET_CLIENT_REQUEST", response.data.data);
    commit("SET_CLIENT_REQUEST_META", response.data.meta);
    commit("SET_CLIENT_REQUEST_LINKS", response.data.links);
    commit("SET_CLIENT_REQUEST_LOADING", false);
}

function setPaginatedTransactions(commit, response) {
    commit("SET_TRANSACTIONS", response.data.data);
    commit("SET_TRANSACTIONS_META", response.data.meta);
    commit("SET_TRANSACTIONS_LINKS", response.data.links);
    commit("SET_TRANSACTIONS_LOADING", false);
}

function setPaginatedFeedBack(commit, response) {
    commit("SET_FEEDBACK", response.data.data);
    commit("SET_FEEDBACK_META", response.data.meta);
    commit("SET_FEEDBACK_LINKS", response.data.links);
    commit("SET_FEEDBACK_LOADING", false);
}
export const state = {
    gigs: [],
    gigsMeta: {},
    gigsLinks: {},
    gigsLoading: false,
    users: [],
    usersMeta: {},
    usersLinks: {},
    usersLoading: false,
    error: null,
    clientRequest: [],
    clientRequestMeta: {},
    clientRequestLinks: {},
    clientRequestLoading: false,
    transactions: [],
    transactionsMeta: {},
    transactionsLinks: {},
    transactionsLoading: false,
    feedback: [],
    feedbackMeta: {},
    feedbackLinks: {},
    feedbackLoading: false,
};

export const mutations = {
    SET_GIGS(state, gigs) {
        state.gigs = gigs;
    },
    SET_GIGS_META(state, meta) {
        state.gigsMeta = meta;
    },
    SET_GIGS_LINKS(state, links) {
        state.gigsLinks = links;
    },
    SET_GIGS_LOADING(state, loading) {
        state.gigsLoading = loading;
    },
    SET_USERS(state, users) {
        state.users = users;
    },
    SET_USERS_META(state, meta) {
        state.usersMeta = meta;
    },
    SET_USERS_LINKS(state, links) {
        state.usersLinks = links;
    },
    SET_USERS_LOADING(state, loading) {
        state.usersLoading = loading;
    },
    SET_ERROR(state, error) {
        state.error = error;
    },
    SET_CLIENT_REQUEST(state, clientRequest) {
        state.clientRequest = clientRequest;
    },
    SET_CLIENT_REQUEST_META(state, meta) {
        state.clientRequestMeta = meta;
    },
    SET_CLIENT_REQUEST_LINKS(state, links) {
        state.clientRequestLinks = links;
    },
    SET_CLIENT_REQUEST_LOADING(state, loading) {
        state.clientRequestLoading = loading;
    },
    SET_TRANSACTIONS(state, transactions) {
        state.transactions = transactions;
    },
    SET_TRANSACTIONS_META(state, meta) {
        state.transactionsMeta = meta;
    },
    SET_TRANSACTIONS_LINKS(state, links) {
        state.transactionsLinks = links;
    },
    SET_TRANSACTIONS_LOADING(state, loading) {
        state.transactionsLoading = loading;
    },
    SET_FEEDBACK(state, feedback) {
        state.feedback = feedback;
    },
    SET_FEEDBACK_META(state, meta) {
        state.feedbackMeta = meta;
    },
    SET_FEEDBACK_LINKS(state, links) {
        state.feedbackLinks = links;
    },
    SET_FEEDBACK_LOADING(state, loading) {
        state.feedbackLoading = loading;
    },
};

export const actions = {
    async getAllGigsPaginated({ commit }, page) {
        try {
            commit("SET_GIGS_LOADING", true);
            const Gigs = await AdminServices.getAllGigsPaginated(page);
            setPaginatedGigs(commit, Gigs);
            return Gigs.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_GIGS_LOADING", false);
        }
    },
    async getGigLink({ commit }, link) {
        try {
            commit("SET_GIGS_LOADING", true);
            const Gigs = await AdminServices.getLink(link);
            setPaginatedGigs(commit, Gigs);
            return Gigs.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_GIGS_LOADING", false);
        }
    },

    async getAllUsersPaginated({ commit }, page) {
        try {
            commit("SET_USERS_LOADING", true);
            const Users = await AdminServices.getAllUsersPaginated(page);
            setPaginatedUsers(commit, Users);

            return Users.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_USERS_LOADING", false);
        }
    },
    async getUserLink({ commit }, link) {
        try {
            commit("SET_USERS_LOADING", true);
            const Users = await AdminServices.getLink(link);
            setPaginatedUsers(commit, Users);
            return Users.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_USERS_LOADING", false);
        }
    },

    async deleteUser({ commit }, id) {
        try {
            commit("SET_USERS_LOADING", true);
            const response = await AdminServices.deleteUser(id);
            return response;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_USERS_LOADING", false);
        }
    },
    async deleteGig({ commit }, id) {
        try {
            commit("SET_GIGS_LOADING", true);
            const response = await AdminServices.deleteGig(id);
            return response;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_GIGS_LOADING", false);
        }
    },
    async deleteClientRequest({ commit }, id) {
        try {
            commit("SET_USERS_LOADING", true);
            const response = await AdminServices.deleteClientRequest(id);
            return response;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_USERS_LOADING", false);
        }
    },

    async getAllTransactions({ commit }, page) {
        try {
            commit("SET_USERS_LOADING", true);
            const Transactions = await AdminServices.getAllTransactions(page);
            return Transactions.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_USERS_LOADING", false);
        }
    },
    async deleteAllUsers({ commit }) {
        try {
            commit("SET_USERS_LOADING", true);
            const response = await AdminServices.deleteAllUsers();
            return response;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_USERS_LOADING", false);
        }
    },
    async deleteAllGigs({ commit }) {
        try {
            commit("SET_GIGS_LOADING", true);
            const response = await AdminServices.deleteAllGigs();
            return response;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_GIGS_LOADING", false);
        }
    },
    async deleteAll({ commit }) {
        try {
            commit("SET_USERS_LOADING", true);
            const response = await AdminServices.deleteAll();
            return response;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_USERS_LOADING", false);
        }
    },
    async deleteAllClientRequests({ commit }) {
        try {
            commit("SET_USERS_LOADING", true);
            const response = await AdminServices.deleteAllClientRequests();
            return response;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_USERS_LOADING", false);
        }
    },
    async getAllClientRequests({ commit }, page) {
        try {
            commit("SET_CLIENT_REQUEST_LOADING", true);
            const ClientRequest = await AdminServices.getAllRequestsPaginated(page);
            setPaginatedClientRequest(commit, ClientRequest);
            return ClientRequest.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_CLIENT_REQUEST_LOADING", false);
        }
    },
    async getClientRequestLink({ commit }, link) {
        try {
            commit("SET_CLIENT_REQUEST_LOADING", true);
            const ClientRequest = await AdminServices.getLink(link);
            setPaginatedClientRequest(commit, ClientRequest);
            return ClientRequest.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_CLIENT_REQUEST_LOADING", false);
        }
    },

    async makeUserAdmin({ commit }, id) {
        try {
            const response = await AdminServices.makeUserAdmin(id);
            return response;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },
    async makeUserModerator({ commit }, id) {
        try {
            const response = await AdminServices.makeUserModerator(id);
            return response;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },
    async getAllTransactionsPaginated({ commit }, page) {
        try {
            commit("SET_TRANSACTIONS_LOADING", true);
            const Transactions = await AdminServices.getAllTransactionsPaginated(page);
            setPaginatedTransactions(commit, Transactions);
            return Transactions.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_TRANSACTIONS_LOADING", false);
        }
    },
    async getTransactionLink({ commit }, link) {
        try {
            commit("SET_TRANSACTIONS_LOADING", true);
            const Transactions = await AdminServices.getLink(link);
            setPaginatedTransactions(commit, Transactions);

            return Transactions.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_TRANSACTIONS_LOADING", false);
        }
    },
    async stats({ commit }) {
        try {
            const response = await AdminServices.stats();
            return response.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
        }
    },
    async getAllFeedBackPaginate({ commit }, page) {
        try {
            commit("SET_FEEDBACK_LOADING", true);
            const FeedBack = await AdminServices.getAllFeedBackPaginated(page);
            console.log(FeedBack);
            setPaginatedFeedBack(commit, FeedBack);
            return FeedBack.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_FEEDBACK_LOADING", false);
        }
    },
    async getFeedBackLink({ commit }, link) {
        try {
            commit("SET_FEEDBACK_LOADING", true);
            const FeedBack = await AdminServices.getLink(link);
            setPaginatedFeedBack(commit, FeedBack);
            return FeedBack.data;
        } catch (error) {
            commit("SET_ERROR", getError(error));
            commit("SET_FEEDBACK_LOADING", false);
        }
    },
};

export const getters = {
    getGigs(state) {
        return state.gigs;
    },
    getGigsMeta(state) {
        return state.gigsMeta;
    },
    getGigsLinks(state) {
        return state.gigsLinks;
    },
    getGigsLoading(state) {
        return state.gigsLoading;
    },
    getUsers(state) {
        return state.users;
    },
    getUsersMeta(state) {
        return state.usersMeta;
    },
    getUsersLinks(state) {
        return state.usersLinks;
    },
    getUsersLoading(state) {
        return state.usersLoading;
    },
    getError(state) {
        return state.error;
    },
    getClientRequest(state) {
        return state.clientRequest;
    },
    getClientRequestMeta(state) {
        return state.clientRequestMeta;
    },
    getClientRequestLinks(state) {
        return state.clientRequestLinks;
    },
    getClientRequestLoading(state) {
        return state.clientRequestLoading;
    },
    getTransactions(state) {
        return state.transactions;
    },
    getTransactionsMeta(state) {
        return state.transactionsMeta;
    },
    getTransactionsLinks(state) {
        return state.transactionsLinks;
    },
    getTransactionsLoading(state) {
        return state.transactionsLoading;
    },
    getFeedBack(state) {
        return state.feedback;
    },
    getfeedbackMeta(state) {
        return state.feedbackMeta;
    },
    getfeedbackLinks(state) {
        return state.feedbackLinks;
    },
    getfeedbackLoading(state) {
        return state.feedbackLoading;
    },
};