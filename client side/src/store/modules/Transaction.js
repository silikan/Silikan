//get rooms from server
import TransactionService from "@/services/TransactionService.js";
import { getError } from "@/utils/helpers";

export const namespaced = true;

export const state = {
  transaction: {},
  taskItemTransactions: [],
  cartItemTransactions: [],
  error: null,
  loading: false,
};

export const mutations = {
  SET_TRANSACTION(state, payload) {
    state.transaction = payload;
  },
  SET_TASK_ITEM_TRANSACTIONS(state, payload) {
    state.taskItemTransactions = payload;
  },
  SET_CART_ITEM_TRANSACTIONS(state, payload) {
    state.cartItemTransactions = payload;
  },
  SET_ERROR(state, error) {
    state.error = error;
  },
  SET_LOADING(state, loading) {
    state.loading = loading;
  }

};

export const actions = {
  async createTransaction({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
    const transaction = await TransactionService.createTransaction(payload);
    commit("SET_TRANSACTION", transaction);
    commit("SET_LOADING", false);
    return transaction.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async getTaskItemTransactions({ commit }, id) {
    commit("SET_LOADING", true);
    try {
    const taskItemTransactions = await TransactionService.getTaskItemTransactions(id);
    commit("SET_TASK_ITEM_TRANSACTIONS", taskItemTransactions);
    commit("SET_LOADING", false);
    return taskItemTransactions.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async getCartItemTransactions({ commit }, id) {
    commit("SET_LOADING", true);
    try {
    const cartItemTransactions = await TransactionService.getCartItemTransactions(id);
    commit("SET_CART_ITEM_TRANSACTIONS", cartItemTransactions);
    commit("SET_LOADING", false);
    return cartItemTransactions.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async setTransactionToPaid({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
    const transaction = await TransactionService.setTransactionToPaid(payload);
    commit("SET_TRANSACTION", transaction);
    commit("SET_LOADING", false);
    }catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async setTransactionToConfirmed({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
    const transaction = await TransactionService.setTransactionToConfirmed(payload);
    commit("SET_TRANSACTION", transaction);
    commit("SET_LOADING", false);
    }catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async setTransactionToCompleted({ commit }, payload) {
    commit("SET_LOADING", true);
    try {
    const transaction = await TransactionService.setTransactionToCompleted(payload);
    commit("SET_TRANSACTION", transaction);
    commit("SET_LOADING", false);
    }catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
  async getTransactionById({ commit }, id) {
    commit("SET_LOADING", true);
    try { 
    const transaction = await TransactionService.getTransactionById(id);
    commit("SET_TRANSACTION", transaction);
    commit("SET_LOADING", false);
    return transaction.data;
    } catch (error) {
      commit("SET_LOADING", false);
      commit("SET_ERROR", getError(error));
    }
  },
};

export const getters = {
  transaction: (state) => state.transaction,
  taskItemTransactions: (state) => state.taskItemTransactions,
  cartItemTransactions: (state) => state.cartItemTransactions,
  getError: (state) => state.error,
  loading: (state) => state.loading,
};
