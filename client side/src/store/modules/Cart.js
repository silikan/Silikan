//get rooms from server
import CartService from "@/services/CartService.js";
import { getError } from "@/utils/helpers";

export const namespaced = true;

export const state = {
  cart: {},
  cartItems: [],
  cartItemData: [],
  cartItem: {},
  error: null,
  loading: false,
};

export const mutations = {
  SET_CART(state, payload) {
    state.cart = payload;
  },
  SET_CART_ITEMS(state, payload) {
    state.cartItems = payload;
  },
  SET_CART_ITEM_DATA(state, payload) {
    state.cartItemData = payload;
  },
  SET_CART_ITEM(state, payload) {
    state.cartItem = payload;
  },
  SET_ERROR(state, payload) {
    state.error = payload;
  },
  SET_LOADING(state, payload) {
    state.loading = payload;
  }

};

export const actions = {
  async createCart({ commit }) {
    try {
    commit("SET_LOADING", true);
    const cart = await CartService.createCart();
    commit("SET_CART", cart);
    commit("SET_LOADING", false);
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }

  },
  async addToCart({ commit }, payload) {
    try{ 
      commit("SET_LOADING", true);
      let data = {
        user_id: payload.user_id,
      };
      console.log(data);
      await CartService.createCart(data)
        .then(async (result) => {
          console.log(result.data);
          console.log(payload);
  
          let sentData = {
            type: payload.type,
            gig_id: payload.gig_id,
            request_id: payload.request_id,
            cart_id: result.data.id,
            client_id: payload.client_id,
            handyman_id: payload.handyman_id,
            task_item_id: payload.task_item_id,
            plan: payload.plan,
          };
          console.log(sentData);
          commit("SET_CART", result.data);
          let cartItemData = await CartService.addToCart(sentData);
          console.log(cartItemData.data);
          commit("SET_CART_ITEM_DATA", cartItemData.data);
        })
        .catch((err) => {
          commit("SET_ERROR", getError(err));
          console.log(err);
        });
      commit("SET_LOADING", false);
     } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
    
  },

  async getUserCartItems({ commit }, id) {
    try{ 
      commit("SET_LOADING", true);
      const cartItems = await CartService.getUserCartItems(id);
      commit("SET_CART_ITEMS", cartItems.data);
      commit("SET_LOADING", false);
      return cartItems.data;
     } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }

  },

  async setCartItemStatusToAccepted({ commit }, payload) {
    try{ 
      commit("SET_LOADING", true);
      const cartItems = await CartService.setCartItemStatusToAccepted(payload);
      commit("SET_CART_ITEMS", cartItems.data);
      commit("SET_LOADING", false);
      return cartItems.data;
     } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }

  },
  async setCartItemStatusToDeclined({ commit }, payload) {
    try{
    commit("SET_LOADING", true);
    const cartItems = await CartService.setCartItemStatusToDeclined(payload);
    commit("SET_CART_ITEMS", cartItems.data);
    commit("SET_LOADING", false);
    return cartItems.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
  async setCartItemStatusToPaid({ commit }, payload) {
    try{
    commit("SET_LOADING", true);
    const cartItems = await CartService.setCartItemStatusToPaid(payload);
    commit("SET_CART_ITEMS", cartItems.data);
    commit("SET_LOADING", false);
    return cartItems.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
  async setCartItemStatusToCancelled({ commit }, payload) {
    try{
    commit("SET_LOADING", true);
    const cartItems = await CartService.setCartItemStatusToCancelled(payload);
    commit("SET_CART_ITEMS", cartItems.data);
    commit("SET_LOADING", false);
    return cartItems.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
  async setCartItemStatusToInProgress({ commit }, payload) {
    try{
    commit("SET_LOADING", true);
    const cartItems = await CartService.setCartItemStatusToInProgress(payload);
    commit("SET_CART_ITEMS", cartItems.data);
    commit("SET_LOADING", false);
    return cartItems.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
  async setCartItemStatusToCompleted({ commit }, payload) {
    try{
    commit("SET_LOADING", true);
    const cartItems = await CartService.setCartItemStatusToCompleted(payload);
    commit("SET_CART_ITEMS", cartItems.data);
    commit("SET_LOADING", false);
    return cartItems.data;
    } catch (error) {
     
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
  async getCartItemById({ commit }, payload) {
    try{
    commit("SET_LOADING", true);
    let id = payload.id;
    const cartItem = await CartService.getCartItemById(id);
    commit("SET_CART_ITEM", cartItem.data);
    commit("SET_LOADING", false);
    return cartItem.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
  async setCartItemStatusToConfirmed({ commit }, payload) {
    try{
    commit("SET_LOADING", true);
    const cartItem = await CartService.setCartItemStatusToConfirmed(payload);
    commit("SET_CART_ITEM", cartItem.data);
    commit("SET_LOADING", false);
    return cartItem.data;
    } catch (error) {
      commit("SET_ERROR", getError(error));
      commit("SET_LOADING", false);
    }
  },
};

export const getters = {
  cart: (state) => state.cart,
  cartItems: (state) => state.cartItems,
  cartItemData: (state) => state.cartItemData,
  cartItem: (state) => state.cartItem,
  getError: (state) => state.error,
  loading: (state) => state.loading,
};
