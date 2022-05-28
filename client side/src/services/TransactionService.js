import * as API from "@/services/API";

export default {
  async createTransaction(payload) {
    return await API.apiClient.post(`/transaction`, payload);
  },
  async getTaskItemTransactions(id) {
    return await API.apiClient.get(`/task/${id}/transaction`);
  },
  async getCartItemTransactions(id) {
    return await API.apiClient.get(`/cart/${id}/transaction`);
  },
  async setTransactionToPaid(payload) {
    return await API.apiClient.post(`/set-transaction-to-paid`, payload);
  },
  async setTransactionToConfirmed(payload) {
    return await API.apiClient.post(`/set-transaction-to-confirmed`, payload);
  },
  async setTransactionToCompleted(payload) {
    return await API.apiClient.post(`/set-transaction-to-completed`, payload);
  },
  async getTransactionById(id) {
    return await API.apiClient.get(`/transaction/${id}`);
  },
};
