import * as API from "@/services/API";

export default {
  async createCart(payload) {
    return await API.apiClient.post(`/cart`, payload);
  },
  async addToCart(payload) {
    return await API.apiClient.post(`/add-to-cart`, payload);
  },
  async getUserCartItems(id) {
    console.log(id);
    return await API.apiClient.get(`/user/${id}/cart`);
  },

  async setCartItemStatusToAccepted(payload) {
    return await API.apiClient.post(`/set-cart-items-status-to-accepted`, payload);
  },
  async setCartItemStatusToDeclined(payload) {
    return await API.apiClient.post(`/set-cart-items-status-to-declined`, payload);
  },
  async setCartItemStatusToPaid(payload) {
    return await API.apiClient.post(`/set-cart-items-status-to-paid`, payload);
  },

  async setCartItemStatusToCancelled(payload) {
    return await API.apiClient.post(`/set-cart-items-status-to-cancelled`, payload);
  },
  async setCartItemStatusToInProgress(payload) {
    return await API.apiClient.post(`/set-cart-items-status-to-in-progress`, payload);
  },
  async setCartItemStatusToCompleted(payload) {
    return await API.apiClient.post(`/set-cart-items-status-to-completed`, payload);
  },

  async getCartItemById(id) {
    return await API.apiClient.get(`/cart/${id}`);
  },
  async setCartItemStatusToConfirmed(payload) {
    return await API.apiClient.post(`/set-cart-items-status-to-confirmed`, payload);
  },
};
